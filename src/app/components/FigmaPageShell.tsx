import {
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router";

import { products } from "../data/shopData";
import { useCart } from "../context/CartContext";

type FigmaPageShellProps = {
  children: ReactNode;
  designWidth?: number;
  page: string;
};

type FigmaAction =
  | "home"
  | "shop"
  | "product"
  | "category"
  | "about"
  | "contact"
  | "cart"
  | "account"
  | "login"
  | "register"
  | "search"
  | "add-cart"
  | "buy-now"
  | "checkout"
  | "place-order"
  | "coupon"
  | "compare"
  | "question"
  | "share"
  | "option"
  | "filter-toggle"
  | "tab"
  | "contact-submit"
  | "newsletter"
  | "load-more"
  | "wishlist";

type ActionPanel = {
  body: string;
  mode: "compare" | "question";
  title: string;
};

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function getElementText(element: HTMLElement) {
  return normalizeText(element.innerText || element.textContent || "");
}

function findActionFromText(text: string): FigmaAction | null {
  if (!text) return null;
  if (text.includes("PLACE ORDER")) return "place-order";
  if (text.includes("PROCEED TO CHECKOUT") || text === "CHECKOUT") return "checkout";
  if (text.includes("ADD TO CART")) return "add-cart";
  if (text.includes("BUY IT NOW")) return "buy-now";
  if (text.includes("APPLY COUPON") || text.includes("UPDATE CART")) return "coupon";
  if (text.includes("COMPARE")) return "compare";
  if (text.includes("ASK A QUESTION")) return "question";
  if (text.includes("SOCIAL SHARE") || text === "SHARE") return "share";
  if (text === "DESCRIPTION" || text === "ADDITIONAL INFORMATION" || text === "REVIEWS") return "tab";
  if (text.includes("SUBMIT NOW") || text === "SUBMIT") return "contact-submit";
  if (text.includes("SUBSCRIBE")) return "newsletter";
  if (text.includes("LOAD MORE")) return "load-more";
  if (text.includes("WISHLIST")) return "wishlist";
  if (text.includes("VIEW ALL PRODUCT") || text.includes("CONTINUE SHOPPING")) return "shop";
  if (text.includes("SHOP NOW") || text.includes("BUY NOW") || text.includes("SHOP WOMEN") || text.includes("SHOP MEN")) return "product";
  if (text === "HOME") return "home";
  if (text === "SHOP") return "shop";
  if (text === "PRODUCT") return "product";
  if (text === "BLOG" || text.includes("ABOUT US")) return "about";
  if (text.includes("CONTACT US") || text === "CONTACT") return "contact";
  if (text.includes("MY ACCOUNT")) return "account";
  if (text === "LOGIN" || text === "SIGN IN") return "login";
  if (text === "REGISTER" || text === "CREATE ACCOUNT") return "register";
  if (text === "SEARCH") return "search";
  if (text === "CART") return "cart";

  return null;
}

function isCategoryLabel(text: string) {
  return [
    "WOMEN",
    "MEN",
    "KIDS",
    "KID",
    "LIFESTYLE",
    "RUNNING",
    "TRAINING",
    "SNEAKERS",
    "FASHION",
    "SPORTS",
  ].includes(text);
}

function isSizeLabel(text: string) {
  return /^(3[5-9]|4[0-9]|5[0-2])$/.test(text);
}

function nearestInteractiveElement(start: HTMLElement, root: HTMLElement) {
  let element: HTMLElement | null = start;
  let depth = 0;

  while (element && element !== root && depth < 8) {
    const name = element.dataset.name ?? "";
    if (
      element.dataset.figmaAction ||
      name.includes("Link") ||
      name.includes("Button") ||
      name.includes("logo") ||
      name.includes("Search") ||
      name.includes("Input - Product quantity") ||
      name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes("San pham")
    ) {
      return element;
    }

    element = element.parentElement;
    depth += 1;
  }

  return start;
}

function actionFromHeaderIcon(event: ReactMouseEvent<HTMLDivElement>, root: HTMLElement): FigmaAction | null {
  const rootRect = root.getBoundingClientRect();
  const xFromRight = rootRect.right - event.clientX;
  const y = event.clientY - rootRect.top;

  if (y > 0 && y < 170) {
    if (xFromRight < 86) return "cart";
    if (xFromRight < 156) return "account";
    if (xFromRight < 238) return "search";
  }

  return null;
}

function markAction(element: HTMLElement, action: FigmaAction, productId?: number) {
  element.dataset.figmaAction = action;
  if (productId) element.dataset.productId = String(productId);
  element.setAttribute(
    "role",
    [
      "add-cart",
      "buy-now",
      "compare",
      "contact-submit",
      "coupon",
      "filter-toggle",
      "load-more",
      "newsletter",
      "option",
      "place-order",
      "question",
      "search",
      "share",
      "tab",
      "wishlist",
    ].includes(action)
      ? "button"
      : "link",
  );
  element.tabIndex = 0;
}

function markOption(element: HTMLElement, optionGroup: string, option: string) {
  markAction(element, "option");
  element.dataset.figmaOptionGroup = optionGroup;
  element.dataset.figmaOption = option;
}

function findOptionTarget(start: HTMLElement, root: HTMLElement) {
  let element: HTMLElement | null = start;
  let depth = 0;

  while (element && element !== root && depth < 5) {
    const className = String(element.className);
    const name = element.dataset.name ?? "";
    if (name.includes("Container") || className.includes("border") || className.includes("rounded")) {
      return element;
    }

    element = element.parentElement;
    depth += 1;
  }

  return nearestInteractiveElement(start, root);
}

function hydrateInteractiveTargets(root: HTMLElement) {
  const textNodes = root.querySelectorAll<HTMLElement>("p, span");

  textNodes.forEach(textNode => {
    const text = getElementText(textNode);
    const action = findActionFromText(text);

    if (isSizeLabel(text)) {
      markOption(findOptionTarget(textNode, root), "Size", text);
      return;
    }

    if (isCategoryLabel(text)) {
      const target = nearestInteractiveElement(textNode, root);
      if (!target.dataset.figmaAction) {
        markAction(target, "category");
        target.dataset.figmaOption = text;
      }
      return;
    }

    if (!action) return;

    const target = nearestInteractiveElement(textNode, root);
    markAction(target, action);
    if (action === "tab") {
      target.dataset.figmaOptionGroup = "Product tab";
      target.dataset.figmaOption = text;
    }
  });

  root.querySelectorAll<HTMLElement>('[data-name="logo"], [data-name="Logo"]').forEach(element => {
    const target = element.parentElement ?? element;
    markAction(target, "home");
  });

  root.querySelectorAll<HTMLElement>('[data-name="Search"]').forEach(element => {
    markAction(element, "search");
  });

  const productCards = Array.from(root.querySelectorAll<HTMLElement>("[data-name]")).filter(element => {
    const name = (element.dataset.name ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return name.includes("San pham");
  });

  productCards.forEach((card, index) => {
    const product = products[index % products.length] ?? products[0];
    markAction(card, "product", product.id);
  });
}

function hydrateToggleTargets(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('[data-name="Input"]').forEach(target => {
    if (target.querySelector("input, textarea")) return;

    const rect = target.getBoundingClientRect();
    if (rect.width > 34 || rect.height > 34) return;

    markAction(target, "filter-toggle");
    target.dataset.figmaOptionGroup = "Filter";
    target.dataset.figmaOption = getElementText(target.parentElement ?? target) || "Filter";
  });
}

function hideExportedScrollTopButtons(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('[data-name="Background"].sticky.top-0').forEach(button => {
    const wrapper = button.parentElement;
    if (!wrapper?.className.includes("pointer-events-none")) return;
    wrapper.dataset.figmaExportedScrollTop = "true";
  });
}

function isInputLike(element: HTMLElement) {
  const text = getElementText(element);
  const rect = element.getBoundingClientRect();
  if (rect.width < 30 && rect.height < 30) return false;
  if (text.includes("SUBMIT") || text.includes("LOGIN") || text.includes("REGISTER") || text.includes("PLACE ORDER")) return false;
  if (text.includes("APPLY COUPON") || text.includes("UPDATE CART")) return false;
  if (element.closest('[data-name="Button"]')) return false;

  return true;
}

function getInputType(label: string) {
  if (label.includes("PASSWORD")) return "password";
  if (label.includes("EMAIL")) return "email";
  if (label.includes("PHONE")) return "tel";
  if (label.includes("POSTCODE") || label.includes("ZIP")) return "text";
  return "text";
}

function hydrateNativeInputs(root: HTMLElement, onSearch: (query: string) => void) {
  const fieldTargets = root.querySelectorAll<HTMLElement>('[data-name="Input"], [data-name="Textarea"]');

  fieldTargets.forEach((target, index) => {
    if (!isInputLike(target)) return;
    if (target.querySelector("input, textarea")) return;

    const labelText = getElementText(target.parentElement ?? target);
    const placeholder = getElementText(target) || "";
    const nativeField =
      target.dataset.name === "Textarea"
        ? document.createElement("textarea")
        : document.createElement("input");

    nativeField.className = "figma-native-input";
    nativeField.setAttribute("aria-label", labelText || placeholder || `Field ${index + 1}`);
    nativeField.setAttribute("placeholder", placeholder);

    if (nativeField instanceof HTMLInputElement) {
      nativeField.type = getInputType(`${labelText} ${placeholder}`);
    }

    nativeField.addEventListener("click", event => event.stopPropagation());
    nativeField.addEventListener("keydown", event => {
      if (event.key === "Enter" && placeholder.includes("SEARCH")) {
        event.preventDefault();
        onSearch((event.currentTarget as HTMLInputElement).value);
      }
    });

    target.appendChild(nativeField);
  });
}

function updateCartBadge(root: HTMLElement, totalItems: number) {
  root.querySelectorAll<HTMLElement>("p").forEach(paragraph => {
    const currentValue = paragraph.textContent?.trim() ?? "";
    if (paragraph.dataset.figmaCartBadge !== "true" && !/^\d+$/.test(currentValue)) return;
    if (!paragraph.parentElement?.className.includes("text-[#60ff00]")) return;
    paragraph.dataset.figmaCartBadge = "true";
    paragraph.textContent = String(totalItems);
  });
}

function adjustQuantity(target: HTMLElement, delta: number) {
  let group = target.parentElement;
  let depth = 0;

  while (group && depth < 5) {
    const numericText = Array.from(group.querySelectorAll<HTMLElement>("p")).find(element => /^\d+$/.test(element.textContent?.trim() ?? ""));
    if (numericText) {
      const currentValue = Number(numericText.textContent);
      numericText.textContent = String(Math.max(1, currentValue + delta));
      return true;
    }

    group = group.parentElement;
    depth += 1;
  }

  return false;
}

export default function FigmaPageShell({ children, designWidth = 1421, page }: FigmaPageShellProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageHeight, setStageHeight] = useState<number | undefined>();
  const [notice, setNotice] = useState("");
  const [panel, setPanel] = useState<ActionPanel | null>(null);
  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { addItem, clearCart, totalItems } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 2200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    const updateVisibility = () => setScrollTopVisible(window.scrollY > 500);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return;

    const updateScale = () => {
      const rootWidth = root.clientWidth || window.innerWidth;
      const isFullFrame = designWidth > 900;
      const shouldScale = isFullFrame || rootWidth < designWidth;
      const scale = shouldScale
        ? isFullFrame
          ? rootWidth / designWidth
          : Math.min(1, rootWidth / designWidth)
        : 1;

      root.style.setProperty("--figma-scale", String(scale));
      root.style.setProperty("--figma-design-width", `${designWidth}px`);
      setStageHeight(shouldScale ? Math.ceil(stage.scrollHeight * scale) : undefined);
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(root);
    resizeObserver.observe(stage);
    window.addEventListener("resize", updateScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, [designWidth, page]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    hydrateInteractiveTargets(root);
    hydrateToggleTargets(root);
    hideExportedScrollTopButtons(root);
    hydrateNativeInputs(root, search => {
      setQuery(search);
      navigate(`/products?search=${encodeURIComponent(search)}`);
    });
    updateCartBadge(root, totalItems);
  }, [location.pathname, totalItems, navigate]);

  const activateSource = (source: HTMLElement | null | undefined, exclusive = true) => {
    if (!source) return;

    const group = source.dataset.figmaOptionGroup;
    if (exclusive && group) {
      rootRef.current?.querySelectorAll<HTMLElement>("[data-figma-option-group]").forEach(element => {
        if (element.dataset.figmaOptionGroup === group) {
          element.dataset.figmaActive = "false";
        }
      });
    }

    source.dataset.figmaActive = exclusive ? "true" : String(source.dataset.figmaActive !== "true");
  };

  const runAction = (action: FigmaAction, source?: HTMLElement | null) => {
    const productId = Number(source?.dataset.productId) || 1;
    const product = products[productId - 1] ?? products[0];
    const option = source?.dataset.figmaOption || (source ? getElementText(source) : "");

    if (action === "home") return navigate("/");
    if (action === "shop") return navigate("/products");
    if (action === "category") return navigate(`/products?category=${encodeURIComponent(option || "All")}`);
    if (action === "product") return navigate(`/product/${productId}`);
    if (action === "about") return navigate("/about-us");
    if (action === "contact") return navigate("/contact");
    if (action === "cart") return navigate("/cart");
    if (action === "account") return navigate("/account");
    if (action === "checkout") return navigate("/checkout");

    if (action === "login") {
      if (page === "login") {
        setNotice("Signed in");
        return navigate("/account");
      }
      return navigate("/login");
    }

    if (action === "register") {
      if (page === "register") {
        setNotice("Account created");
        return navigate("/account");
      }
      return navigate("/register");
    }

    if (action === "search") {
      setSearchOpen(true);
      return;
    }

    if (action === "add-cart") {
      addItem(product);
      setNotice("Added to cart");
      return;
    }

    if (action === "buy-now") {
      addItem(product);
      setNotice("Added for checkout");
      navigate("/checkout");
      return;
    }

    if (action === "place-order") {
      clearCart();
      setNotice("Order placed");
      navigate("/checkout/success");
      return;
    }

    if (action === "option") {
      activateSource(source);
      setNotice(`${source?.dataset.figmaOptionGroup ?? "Option"} ${option} selected`);
      return;
    }

    if (action === "filter-toggle") {
      activateSource(source, false);
      setNotice("Filter updated");
      return;
    }

    if (action === "tab") {
      activateSource(source);
      setNotice(`${option || "Product"} tab active`);
      return;
    }

    if (action === "compare") {
      setPanel({
        body: `${product.name} is ready to compare with your saved products. Add more products from the shop page to build a shortlist.`,
        mode: "compare",
        title: "Compare Products",
      });
      return;
    }

    if (action === "question") {
      setPanel({
        body: "Send a quick product question and the store team will follow up.",
        mode: "question",
        title: "Ask a Question",
      });
      return;
    }

    if (action === "share") {
      if (navigator.clipboard) {
        void navigator.clipboard.writeText(window.location.href).then(
          () => setNotice("Product link copied"),
          () => setNotice("Share link ready"),
        );
      } else {
        setNotice("Share link ready");
      }
      return;
    }

    if (action === "contact-submit") {
      setNotice("Message sent");
      return;
    }

    if (action === "newsletter") {
      setNotice("Subscribed");
      return;
    }

    if (action === "coupon") setNotice("Coupon updated");
    if (action === "load-more") setNotice("All Figma products are already shown");
    if (action === "wishlist") setNotice("Saved to wishlist");
  };

  const handleClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    const root = rootRef.current;
    if (!root) return;

    const target = event.target as HTMLElement;
    const text = getElementText(target);
    if (text === "+" && adjustQuantity(target, 1)) return;
    if ((text === "-" || text === "\u2013" || text === "\u2212") && adjustQuantity(target, -1)) return;

    const source = nearestInteractiveElement(target, root);
    const action =
      (source.dataset.figmaAction as FigmaAction | undefined) ??
      findActionFromText(getElementText(source)) ??
      actionFromHeaderIcon(event, root);

    if (!action) return;
    event.preventDefault();
    runAction(action, source);
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target as HTMLElement;
    const action = target.dataset.figmaAction as FigmaAction | undefined;
    if (!action) return;
    event.preventDefault();
    runAction(action, target);
  };

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchOpen(false);
    navigate(query.trim() ? `/products?search=${encodeURIComponent(query.trim())}` : "/products");
  };

  const scrollToTop = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="figma-page-shell"
      data-figma-page={page}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={rootRef}
      style={stageHeight ? { minHeight: stageHeight } : undefined}
    >
      <div className="figma-stage" ref={stageRef}>
        {children}
      </div>

      {searchOpen ? (
        <form className="figma-search-overlay" onSubmit={submitSearch}>
          <input
            autoFocus
            aria-label="Search products"
            onChange={event => setQuery(event.target.value)}
            placeholder="Search"
            value={query}
          />
          <button type="submit">Search</button>
          <button aria-label="Close search" onClick={() => setSearchOpen(false)} type="button">
            x
          </button>
        </form>
      ) : null}

      {notice ? <div className="figma-toast">{notice}</div> : null}

      {panel ? (
        <section
          aria-modal="true"
          className="figma-action-panel"
          onClick={event => event.stopPropagation()}
          role="dialog"
        >
          <button aria-label="Close panel" className="figma-action-panel__close" onClick={() => setPanel(null)} type="button">
            x
          </button>
          <h2>{panel.title}</h2>
          <p>{panel.body}</p>
          {panel.mode === "question" ? (
            <form
              onSubmit={event => {
                event.preventDefault();
                setPanel(null);
                setNotice("Question sent");
              }}
            >
              <input aria-label="Your email" placeholder="Email" type="email" />
              <textarea aria-label="Your question" placeholder="Question" />
              <button type="submit">Send</button>
            </form>
          ) : (
            <button onClick={() => setPanel(null)} type="button">
              Continue
            </button>
          )}
        </section>
      ) : null}

      <button
        aria-label="Back to top"
        className={`figma-scroll-top${scrollTopVisible ? " is-visible" : ""}`}
        onClick={scrollToTop}
        type="button"
      >
        &uarr;
      </button>
    </div>
  );
}
