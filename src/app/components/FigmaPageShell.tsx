import {
  Heart,
  ShoppingCart,
  UserRound,
} from "lucide-react";
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

import { formatCurrency, type Product, products } from "../data/shopData";
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
  | "blog"
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
  | "gallery"
  | "option"
  | "filter-toggle"
  | "tab"
  | "contact-submit"
  | "newsletter"
  | "load-more"
  | "wishlist"
  | "remove-cart";

type ActionPanel = {
  body: string;
  mode: "compare" | "question";
  title: string;
};

const figmaProductMeta = [
  { brand: "Nike", category: "Basketball", tags: ["MEN", "SNEAKERS", "SPORTS"], sizes: ["39", "40", "41", "42", "43"] },
  { brand: "Calvin Klein", category: "Fashion", tags: ["WOMEN", "LIFESTYLE"], sizes: ["38", "39", "40", "41", "42"] },
  { brand: "Vans", category: "Daily", tags: ["MEN", "SNEAKERS", "SKATE"], sizes: ["37", "38", "39", "40", "41"] },
  { brand: "Converse", category: "Streetwear", tags: ["MEN", "SKATE", "SNEAKERS"], sizes: ["39", "40", "41", "42", "43"] },
  { brand: "Converse", category: "Lifestyle", tags: ["WOMEN", "LIFESTYLE", "SNEAKERS"], sizes: ["38", "39", "40", "41", "42"] },
  { brand: "Jordan", category: "Basketball", tags: ["MEN", "SPORTS"], sizes: ["40", "41", "42", "43", "44"] },
  { brand: "K1X", category: "Outdoor", tags: ["MEN", "OUTDOOR"], sizes: ["40", "41", "42", "43", "44"] },
  { brand: "K1X", category: "Outdoor", tags: ["MEN", "OUTDOOR"], sizes: ["40", "41", "42", "43", "44"] },
  { brand: "Jordan", category: "Basketball", tags: ["MEN", "SPORTS"], sizes: ["40", "41", "42", "43", "44"] },
  { brand: "Jordan", category: "Basketball", tags: ["MEN", "SPORTS"], sizes: ["40", "41", "42", "43", "44"] },
  { brand: "Jordan", category: "Basketball", tags: ["MEN", "SPORTS"], sizes: ["39", "40", "41", "42", "43"] },
  { brand: "Jordan", category: "Basketball", tags: ["MEN", "SPORTS"], sizes: ["39", "40", "41", "42", "43"] },
];

function normalizeFilterToken(value: string) {
  return normalizeText(value)
    .replace(/\(\d+\)/g, "")
    .replace(/\$\s*\d+(\.\d+)?/g, "")
    .replace(/PRODUCTS?|RESULTS?|FILTER BY|CATEGORIES|BRANDS|COLORS|RATINGS|SIZES|PRICE/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

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

function productFromPathname(pathname: string) {
  const match = pathname.match(/\/product(?:-alt|-v2)?\/(\d+)/);
  const productId = Number(match?.[1] ?? 1);
  return products.find(product => product.id === productId) ?? products[0];
}

function findActionFromText(text: string): FigmaAction | null {
  if (!text) return null;
  if (text.includes("BACK TO HOMEPAGE")) return "home";
  if (text.includes("VIEW CART")) return "cart";
  if (text.includes("REMOVE THIS ITEM") || text === "REMOVE") return "remove-cart";
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
  if (text === "FILTER") return "filter-toggle";
  if (text.includes("VIEW ALL PRODUCT") || text.includes("CONTINUE SHOPPING")) return "shop";
  if (text.includes("SHOP NOW") || text.includes("BUY NOW") || text.includes("SHOP WOMEN") || text.includes("SHOP MEN")) return "product";
  if (text === "HOME") return "home";
  if (text === "SHOP") return "shop";
  if (text === "PRODUCT") return "product";
  if (text === "PAGES") return "about";
  if (text === "BLOG" || text.includes("OUR BLOG")) return "blog";
  if (text.includes("ABOUT US")) return "about";
  if (text.includes("CONTACT US") || text === "CONTACT") return "contact";
  if (text.includes("MY ACCOUNT")) return "account";
  if (text === "LOGIN" || text === "SIGN IN") return "login";
  if (text === "REGISTER" || text === "CREATE ACCOUNT") return "register";
  if (text === "SEARCH") return "search";
  if (text === "CART") return "cart";

  return null;
}

function findActionFromName(name: string): FigmaAction | null {
  const text = normalizeText(name);
  if (!text) return null;

  const isControlName =
    text.includes("BUTTON") ||
    text.includes("ICON") ||
    text.includes("LINK") ||
    text.includes("LOGO") ||
    text.includes("SEARCH");

  if (!isControlName) return null;
  if (text.includes("LOGO")) return "home";
  if (text.includes("SEARCH")) return "search";
  if (text.includes("WISHLIST")) return "wishlist";
  if (text.includes("COMPARE")) return "compare";
  if (text.includes("QUESTION")) return "question";
  if (text.includes("SHARE")) return "share";
  if (text.includes("REMOVE")) return "remove-cart";
  if (text.includes("ACCOUNT") || text.includes("USER")) return "account";
  if (text.includes("CART")) return "cart";

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

function getCategoryLabelFromText(text: string) {
  const normalizedText = normalizeText(text);
  const category = [
    "RUNNING SHOES",
    "SPORT SHOES",
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
    "SKATE",
    "OUTDOOR",
    "COURT",
  ].find(label => normalizedText === label || normalizedText.startsWith(`${label} `));

  return category ?? null;
}

function isSizeLabel(text: string) {
  return /^(3[5-9]|4[0-9]|5[0-2])$/.test(text);
}

function isSidebarFilterLabel(text: string) {
  const token = normalizeFilterToken(text);
  return ["ADIDAS", "CONVERSE", "NIKE", "PUMA", "REEBOK", "BLACK", "BROWN", "GREEN", "RED", "WHITE", "YELLOW"].includes(token);
}

function getCategoryFilters(value: string) {
  const category = normalizeText(value);
  const map: Record<string, string[]> = {
    BASKETBALL: ["BASKETBALL"],
    COURT: ["BASKETBALL"],
    DAILY: ["DAILY"],
    FASHION: ["LIFESTYLE", "STREETWEAR", "DAILY"],
    KID: ["DAILY"],
    KIDS: ["DAILY"],
    LIFESTYLE: ["LIFESTYLE", "STREETWEAR", "DAILY"],
    MEN: ["BASKETBALL", "TRAINING", "STREETWEAR"],
    OUTDOOR: ["OUTDOOR"],
    RUNNING: ["TRAINING"],
    "RUNNING SHOES": ["TRAINING"],
    SKATE: ["DAILY", "STREETWEAR"],
    SNEAKERS: ["LIFESTYLE", "STREETWEAR", "DAILY"],
    "SPORT SHOES": ["BASKETBALL", "TRAINING"],
    SPORTS: ["BASKETBALL", "TRAINING"],
    STREETWEAR: ["STREETWEAR"],
    TRAINING: ["TRAINING"],
    WOMEN: ["LIFESTYLE", "DAILY"],
  };

  return map[category] ?? (category ? [category] : []);
}

function getCategoryFilterTokens(value: string) {
  const category = normalizeText(value);
  const map: Record<string, string[]> = {
    BASKETBALL: ["BASKETBALL", "JORDAN", "SPORTS"],
    COURT: ["BASKETBALL", "JORDAN", "SPORTS"],
    DAILY: ["DAILY", "VANS"],
    FASHION: ["FASHION", "CALVIN KLEIN", "LIFESTYLE"],
    KID: ["KID"],
    KIDS: ["KID"],
    LIFESTYLE: ["LIFESTYLE", "CALVIN KLEIN", "CONVERSE"],
    MEN: ["MEN"],
    OUTDOOR: ["OUTDOOR", "K1X"],
    RUNNING: ["RUNNING", "NIKE"],
    "RUNNING SHOES": ["RUNNING", "NIKE"],
    SKATE: ["SKATE", "VANS", "CONVERSE"],
    SNEAKERS: ["SNEAKERS"],
    "SPORT SHOES": ["SPORTS", "BASKETBALL", "JORDAN"],
    SPORTS: ["SPORTS", "BASKETBALL", "JORDAN"],
    STREETWEAR: ["STREETWEAR", "CONVERSE"],
    TRAINING: ["TRAINING", "NIKE"],
    WOMEN: ["WOMEN"],
  };

  return map[category] ?? (category ? [category] : []);
}

function matchesFilterToken(value: string, filter: string) {
  if (!filter) return true;
  if (filter.length <= 3) return value === filter;
  return value === filter || value.startsWith(`${filter} `) || value.includes(` ${filter}`) || value.includes(filter);
}

function nearestInteractiveElement(start: HTMLElement, root: HTMLElement) {
  let element: HTMLElement | null = start;
  let depth = 0;

  while (element && element !== root && depth < 8) {
    const name = element.dataset.name ?? "";
    if (
      element.dataset.figmaAction ||
      findActionFromName(name) ||
      name.includes("Link") ||
      name.includes("Button") ||
      name.includes("logo") ||
      name.includes("Search") ||
      name.includes("product-image") ||
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

function nearestNamedActionElement(start: HTMLElement, root: HTMLElement) {
  let element: HTMLElement | null = start;
  let depth = 0;

  while (element && element !== root && depth < 8) {
    if (element.dataset.figmaAction || findActionFromName(element.dataset.name ?? "")) {
      return element;
    }

    element = element.parentElement;
    depth += 1;
  }

  return null;
}

function actionFromHeaderIcon(event: ReactMouseEvent<HTMLDivElement>, root: HTMLElement): FigmaAction | null {
  const elementAtPoint = document.elementFromPoint(event.clientX, event.clientY) as HTMLElement | null;
  if (elementAtPoint?.closest('[data-name="Search"]')) return "search";

  const rootRect = root.getBoundingClientRect();
  const xFromRight = rootRect.right - event.clientX;
  const y = event.clientY - rootRect.top;

  if (y > 0 && y < 170) {
    if (xFromRight < 86) return "cart";
    if (xFromRight < 238) return "account";
    if (xFromRight < 320) return "search";
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
      "gallery",
      "load-more",
      "newsletter",
      "option",
      "place-order",
      "question",
      "remove-cart",
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
  root.querySelectorAll<HTMLElement>("[data-name]").forEach(element => {
    const action = findActionFromName(element.dataset.name ?? "");
    if (action && !element.dataset.figmaAction) {
      markAction(element, action);
    }
  });

  const textNodes = root.querySelectorAll<HTMLElement>("p, span");

  textNodes.forEach(textNode => {
    const text = getElementText(textNode);
    const action = findActionFromText(text);
    const categoryLabel = getCategoryLabelFromText(text);

    if (isSizeLabel(text)) {
      markOption(findOptionTarget(textNode, root), "Size", text);
      return;
    }

    if (categoryLabel) {
      const target = nearestInteractiveElement(textNode, root);
      if (!target.dataset.figmaAction) {
        markAction(target, "category");
        target.dataset.figmaOption = categoryLabel;
      }
      return;
    }

    if (isSidebarFilterLabel(text)) {
      const target = nearestInteractiveElement(textNode, root);
      if (!target.dataset.figmaAction) {
        markAction(target, "filter-toggle");
        target.dataset.figmaOptionGroup = "Filter";
        target.dataset.figmaOption = normalizeFilterToken(text);
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
    const meta = figmaProductMeta[index % figmaProductMeta.length];
    const productText = getElementText(card);
    const productTags = [
      productText,
      normalizeText(product.category),
      normalizeText(meta.category),
      normalizeText(meta.brand),
      ...meta.tags.map(normalizeText),
    ];

    markAction(card, "product", product.id);
    card.dataset.figmaProductCard = "true";
    card.dataset.figmaProductCategory = normalizeText(meta.category);
    card.dataset.figmaProductName = normalizeText(`${product.name} ${product.category} ${product.description} ${productText}`);
    card.dataset.figmaProductSizes = meta.sizes.join("|");
    card.dataset.figmaProductTags = Array.from(new Set(productTags.filter(Boolean))).join("|");

    card.querySelectorAll<HTMLElement>('[data-name*="Link"], [data-name^="product-image"], p, span').forEach(child => {
      if (child.dataset.figmaAction && child.dataset.figmaAction !== "product") return;
      markAction(child, "product", product.id);
    });
  });
}

function hydrateSidebarFilterRows(root: HTMLElement) {
  if (root.dataset.figmaPage !== "products") return;

  root.querySelectorAll<HTMLElement>('[data-name="Item"]').forEach(item => {
    const option = normalizeFilterToken(getElementText(item));
    if (!option || option === "FILTER") return;

    const isUsableFilter =
      isSidebarFilterLabel(option) ||
      getCategoryFilterTokens(option).length > 0 ||
      /^(MEN|WOMEN|KID|KIDS|SNEAKERS|SPORTS|SPORT SHOES|RUNNING|RUNNING SHOES|LIFESTYLE|DAILY|OUTDOOR|SKATE|TRAINING)$/i.test(option);

    if (!isUsableFilter) return;

    const targets = [item, ...Array.from(item.querySelectorAll<HTMLElement>('[data-name="Input"], [data-name*="Link"], p, span'))];
    targets.forEach(target => {
      markAction(target, "filter-toggle");
      target.dataset.figmaOptionGroup = "Filter";
      target.dataset.figmaOption = option;
    });
  });
}

function hydrateGalleryTargets(root: HTMLElement) {
  const thumbnails = Array.from(root.querySelectorAll<HTMLElement>('[data-name^="product-image"]')).filter(element => {
    const rect = element.getBoundingClientRect();
    return rect.width > 24 && rect.height > 24 && rect.width < 260 && rect.height < 260;
  });

  thumbnails.forEach(thumbnail => {
    const image = thumbnail.querySelector<HTMLImageElement>("img");
    if (!image?.src) return;
    const target = thumbnail.closest<HTMLElement>('[data-name="Border"]') ?? thumbnail.parentElement ?? thumbnail;
    markAction(target, "gallery");
    target.dataset.figmaImageSrc = image.src;
    target.dataset.figmaOptionGroup = "Product gallery";
  });
}

function hydrateProductDetail(root: HTMLElement, product: Product) {
  if (!["product", "product-alt", "product-v2"].includes(root.dataset.figmaPage ?? "")) return;

  updateFirstMatchingText(root, text => text === "Nike Lebron 14 low", product.name);
  updateFirstMatchingText(root, text => text === "$44.00" || text.startsWith("VND "), product.price);
  updateFirstMatchingText(root, text => text === "$64.00", product.oldPrice);

  const imageEntries = Array.from(root.querySelectorAll<HTMLImageElement>('[data-name^="product-image"] img'))
    .map(image => ({ image, rect: image.getBoundingClientRect() }))
    .filter(({ rect }) => rect.width > 30 && rect.height > 30)
    .sort((first, second) => second.rect.width * second.rect.height - first.rect.width * first.rect.height);

  const mainImage = imageEntries[0]?.image;
  if (mainImage) {
    mainImage.src = product.image;
    mainImage.alt = product.name;
  }

  const gallerySources = [product.image, product.hover, product.image, product.hover];
  imageEntries.slice(1, 5).forEach(({ image }, index) => {
    const source = gallerySources[index % gallerySources.length];
    image.src = source;
    image.alt = product.name;
    const target = image.closest<HTMLElement>('[data-name="Border"]') ?? image.closest<HTMLElement>("[data-name]") ?? image.parentElement;
    if (!target) return;
    markAction(target, "gallery");
    target.dataset.figmaImageSrc = source;
    target.dataset.figmaOptionGroup = "Product gallery";
  });
}

function getDisplayedProductTotal(root: HTMLElement) {
  const countElement = Array.from(root.querySelectorAll<HTMLElement>("p, span")).find(element =>
    /Showing\s+\d+\s+of\s+\d+\s+(results|products)/i.test(element.textContent ?? ""),
  );
  const match = countElement?.textContent?.match(/of\s+(\d+)/i);
  return match ? Number(match[1]) : products.length;
}

function updateFigmaProductCount(root: HTMLElement, visibleCount: number, totalCount: number) {
  root.querySelectorAll<HTMLElement>("p, span").forEach(element => {
    const text = (element.textContent ?? "").replace(/\s+/g, " ").trim();

    if (/^Showing\s+\d+\s+of\s+\d+\s+(results|products)$/i.test(text)) {
      element.textContent = text.replace(
        /^Showing\s+\d+\s+of\s+\d+\s+(results|products)$/i,
        `Showing ${visibleCount} of ${totalCount} $1`,
      );
      return;
    }

    const parentText = (element.parentElement?.textContent ?? "").replace(/\s+/g, " ").trim();
    if (/^\d+$/.test(text) && /^Showing\s+\d+\s+of\s+\d+\s+products$/i.test(parentText)) {
      element.textContent = String(visibleCount);
    }
  });
}

function applyFigmaProductFilters(root: HTMLElement, search: string) {
  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-figma-product-card="true"]'));
  if (cards.length === 0) return;

  const searchParams = new URLSearchParams(search);
  const query = normalizeText(searchParams.get("search") ?? "");
  const categories = getCategoryFilterTokens(searchParams.get("category") ?? "");
  const activeSizes = Array.from(
    root.querySelectorAll<HTMLElement>('[data-figma-active="true"][data-figma-option-group="Size"]'),
  ).map(element => element.dataset.figmaOption ?? "");
  const activeFilters = Array.from(
    root.querySelectorAll<HTMLElement>('[data-figma-active="true"][data-figma-option-group="Filter"]'),
  )
    .map(element => normalizeFilterToken(element.dataset.figmaOption ?? ""))
    .filter(Boolean);
  const totalCount = getDisplayedProductTotal(root);
  let visibleCount = 0;

  cards.forEach(card => {
    const productName = card.dataset.figmaProductName ?? "";
    const productCategory = card.dataset.figmaProductCategory ?? "";
    const productSizes = (card.dataset.figmaProductSizes ?? "").split("|");
    const productTags = (card.dataset.figmaProductTags ?? "").split("|");
    const matchesQuery = !query || productName.includes(query);
    const matchesCategory =
      categories.length === 0 ||
      categories.some(category => matchesFilterToken(productCategory, category) || productTags.some(tag => matchesFilterToken(tag, category)));
    const matchesSize = activeSizes.length === 0 || activeSizes.some(size => productSizes.includes(size));
    const matchesActiveFilters =
      activeFilters.length === 0 ||
      activeFilters.every(filter => productTags.some(tag => matchesFilterToken(tag, filter)) || matchesFilterToken(productCategory, filter));
    const visible = matchesQuery && matchesCategory && matchesSize && matchesActiveFilters;

    card.dataset.figmaFilteredOut = String(!visible);
    card.style.display = visible ? "" : "none";
    if (visible) visibleCount += 1;
  });
  updateFigmaProductCount(root, visibleCount, totalCount);
}

function selectGalleryImage(root: HTMLElement, source?: HTMLElement | null) {
  const imageSrc = source?.dataset.figmaImageSrc;
  if (!imageSrc) return false;

  const images = Array.from(root.querySelectorAll<HTMLImageElement>('[data-name^="product-image"] img'));
  const mainImage = images
    .map(image => ({ image, rect: image.getBoundingClientRect() }))
    .filter(({ rect }) => rect.width > 120 && rect.height > 120)
    .sort((first, second) => second.rect.width * second.rect.height - first.rect.width * first.rect.height)[0]?.image;

  if (!mainImage) return false;
  mainImage.src = imageSrc;
  root.querySelectorAll<HTMLElement>('[data-figma-option-group="Product gallery"]').forEach(element => {
    element.dataset.figmaActive = "false";
  });
  if (source) source.dataset.figmaActive = "true";
  return true;
}

function hydrateToggleTargets(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('[data-name="Input"]').forEach(target => {
    if (target.querySelector("input, textarea")) return;

    const rect = target.getBoundingClientRect();
    if (rect.width > 34 || rect.height > 34) return;

    markAction(target, "filter-toggle");
    target.dataset.figmaOptionGroup = "Filter";
    const parentItem = target.closest<HTMLElement>('[data-name="Item"]');
    target.dataset.figmaOption = normalizeFilterToken(getElementText(parentItem ?? target.parentElement ?? target)) || "Filter";
  });
}

function hideExportedScrollTopButtons(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('[data-name="Background"].sticky.top-0').forEach(button => {
    const wrapper = button.parentElement;
    if (!wrapper?.className.includes("pointer-events-none")) return;
    wrapper.dataset.figmaExportedScrollTop = "true";
  });
}

function hydrateCartRemoveTargets(root: HTMLElement) {
  root.querySelectorAll<SVGElement>('[id*="Remove this item"]').forEach(icon => {
    const target =
      icon.closest<HTMLElement>('[data-name="Link"]') ??
      icon.closest<HTMLElement>('[data-name="Button"]') ??
      icon.parentElement;

    if (target) markAction(target, "remove-cart");
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
    target.style.pointerEvents = "auto";
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

function updateFirstMatchingText(root: HTMLElement, matcher: (text: string) => boolean, value: string) {
  const target = Array.from(root.querySelectorAll<HTMLElement>("p, span")).find(element =>
    matcher((element.textContent ?? "").replace(/\s+/g, " ").trim()),
  );
  if (target) target.textContent = value;
}

function hydrateCartPage(root: HTMLElement, detailedItems: ReturnType<typeof useCart>["detailedItems"], subtotal: number) {
  if (root.dataset.figmaPage !== "cart") return;

  const rows = Array.from(root.querySelectorAll<HTMLElement>('[data-name*="cart"]')).filter(row => {
    const text = getElementText(row);
    return text.includes("$") || text.includes("VND") || row.querySelector('img');
  });
  const uniqueRows = rows.filter(row => !rows.some(other => other !== row && other.contains(row)));
  const productRows = uniqueRows.length > 0 ? uniqueRows : rows;

  productRows.forEach((row, index) => {
    const item = detailedItems[index];
    row.dataset.cartItemId = item?.id ?? "";
    row.style.display = item ? "" : "none";
    if (!item) return;

    const image = row.querySelector<HTMLImageElement>("img");
    if (image) image.src = item.product.image;

    const textNodes = Array.from(row.querySelectorAll<HTMLElement>("p, span"));
    const nameNode = textNodes.find(element => {
      const text = (element.textContent ?? "").trim();
      return text && !/^\d+$/.test(text) && !/^[+$\-–−]+$/.test(text) && !text.includes("$") && !text.includes("VND");
    });
    if (nameNode) nameNode.textContent = item.product.name;

    const priceNodes = textNodes.filter(element => {
      const text = element.textContent ?? "";
      return text.includes("$") || text.includes("VND");
    });
    if (priceNodes[0]) priceNodes[0].textContent = item.product.price;
    if (priceNodes[1]) priceNodes[1].textContent = formatCurrency(item.lineTotal);

    const quantityNode = textNodes.find(element => /^\d+$/.test((element.textContent ?? "").trim()));
    if (quantityNode) quantityNode.textContent = String(item.quantity);
  });

  let emptyMessage = root.querySelector<HTMLElement>(".figma-cart-empty-message");
  if (!emptyMessage) {
    emptyMessage = document.createElement("div");
    emptyMessage.className = "figma-cart-empty-message";
    emptyMessage.textContent = "Your cart is empty";
    productRows[0]?.parentElement?.appendChild(emptyMessage);
  }
  emptyMessage.style.display = detailedItems.length === 0 ? "flex" : "none";

  const total = subtotal + (detailedItems.length > 0 ? 20000 : 0);
  updateFirstMatchingText(root, text => text === "$174.00", formatCurrency(subtotal));
  updateFirstMatchingText(root, text => text === "$194.00", formatCurrency(total));
  updateFirstMatchingText(root, text => /flat rate:/i.test(text), detailedItems.length > 0 ? "Flat rate: VND 20,000" : "Flat rate: VND 0");
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

function readSelectedQuantity(root: HTMLElement | null, source?: HTMLElement | null) {
  const quantityRoot =
    source?.closest<HTMLElement>('[data-name="Input - Product quantity"]') ??
    root?.querySelector<HTMLElement>('[data-name="Input - Product quantity"]');
  const quantityText = quantityRoot
    ? Array.from(quantityRoot.querySelectorAll<HTMLElement>("p")).find(element => /^\d+$/.test(element.textContent?.trim() ?? ""))
    : null;
  const quantity = Number(quantityText?.textContent ?? 1);

  return Number.isFinite(quantity) && quantity > 0 ? quantity : 1;
}

function readSelectedOption(root: HTMLElement | null, optionGroup: string) {
  return (
    root?.querySelector<HTMLElement>(`[data-figma-active="true"][data-figma-option-group="${optionGroup}"]`)?.dataset.figmaOption ??
    undefined
  );
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
  const { addItem, clearCart, detailedItems, removeItem, items, subtotal, totalItems, updateQuantity } = useCart();

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
      const railWidth = page === "home" && window.innerWidth >= 1024 ? 100 : 0;
      const rootWidth = Math.max(320, (root.clientWidth || window.innerWidth) - railWidth);
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
    hydrateSidebarFilterRows(root);
    hydrateGalleryTargets(root);
    hydrateProductDetail(root, productFromPathname(location.pathname));
    hydrateToggleTargets(root);
    hydrateCartRemoveTargets(root);
    hideExportedScrollTopButtons(root);
    hydrateNativeInputs(root, search => {
      setQuery(search);
      navigate(`/products?search=${encodeURIComponent(search)}`);
    });
    updateCartBadge(root, totalItems);
    hydrateCartPage(root, detailedItems, subtotal);
    if (page === "products") {
      applyFigmaProductFilters(root, location.search);
    }
  }, [detailedItems, location.pathname, location.search, page, subtotal, totalItems, navigate]);

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
    const productSource = source?.closest<HTMLElement>('[data-figma-product-card="true"]') ?? source;
    const routeProduct = productFromPathname(location.pathname);
    const productId = Number(productSource?.dataset.productId ?? source?.dataset.productId) || routeProduct.id;
    const product = products.find(item => item.id === productId) ?? routeProduct;
    const option = source?.dataset.figmaOption || (source ? getElementText(source) : "");
    const root = rootRef.current;

    if (action === "home") return navigate("/");
    if (action === "shop") return navigate("/products");
    if (action === "category") return navigate(`/products?category=${encodeURIComponent(option || "All")}`);
    if (action === "product") return navigate(`/product/${productId}`);
    if (action === "blog") return navigate("/blog");
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
      const searchValue = source?.querySelector<HTMLInputElement | HTMLTextAreaElement>("input, textarea")?.value.trim();
      if (searchValue) {
        setQuery(searchValue);
        setSearchOpen(false);
        navigate(`/products?search=${encodeURIComponent(searchValue)}`);
        return;
      }

      setSearchOpen(true);
      return;
    }

    if (action === "add-cart") {
      addItem(product, {
        quantity: readSelectedQuantity(root, source),
        size: readSelectedOption(root, "Size") ?? product.sizes[0],
      });
      setNotice("Added to cart");
      return;
    }

    if (action === "buy-now") {
      addItem(product, {
        quantity: readSelectedQuantity(root, source),
        size: readSelectedOption(root, "Size") ?? product.sizes[0],
      });
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

    if (action === "remove-cart") {
      const itemId = source?.closest<HTMLElement>("[data-cart-item-id]")?.dataset.cartItemId ?? items[0]?.id;
      if (itemId) {
        removeItem(itemId);
        setNotice("Item removed");
      } else {
        setNotice("Cart is empty");
      }
      return;
    }

    if (action === "gallery") {
      if (selectGalleryImage(rootRef.current ?? source?.ownerDocument.body ?? document.body, source)) {
        setNotice("Image selected");
      }
      return;
    }

    if (action === "option") {
      activateSource(source);
      if (page === "products" && rootRef.current) {
        applyFigmaProductFilters(rootRef.current, location.search);
        setNotice(`Filtered by size ${option}`);
      } else {
        setNotice(`${source?.dataset.figmaOptionGroup ?? "Option"} ${option} selected`);
      }
      return;
    }

    if (action === "filter-toggle") {
      const normalizedOption = normalizeFilterToken(option);
      if (normalizedOption === "FILTER") {
        if (page === "products" && rootRef.current) {
          applyFigmaProductFilters(rootRef.current, location.search);
        }
        setNotice("Filter applied");
        return;
      }
      activateSource(source, false);
      if (page === "products" && rootRef.current) {
        applyFigmaProductFilters(rootRef.current, location.search);
      }
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
    const cartRow = target.closest<HTMLElement>("[data-cart-item-id]");
    const cartItem = cartRow?.dataset.cartItemId
      ? detailedItems.find(item => item.id === cartRow.dataset.cartItemId)
      : undefined;

    if (cartItem && text === "+") {
      updateQuantity(cartItem.id, cartItem.quantity + 1);
      setNotice("Cart updated");
      return;
    }

    if (cartItem && (text === "-" || text === "\u2013" || text === "\u2212")) {
      updateQuantity(cartItem.id, cartItem.quantity - 1);
      setNotice("Cart updated");
      return;
    }

    if (text === "+" && adjustQuantity(target, 1)) return;
    if ((text === "-" || text === "\u2013" || text === "\u2212") && adjustQuantity(target, -1)) return;

    const source = nearestNamedActionElement(target, root) ?? nearestInteractiveElement(target, root);
    const action =
      (source.dataset.figmaAction as FigmaAction | undefined) ??
      findActionFromName(source.dataset.name ?? "") ??
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

      {page === "home" ? (
        <aside aria-label="Quick actions" className="figma-right-rail">
          <button aria-label="View cart" data-figma-action="cart" type="button">
            <ShoppingCart aria-hidden="true" size={20} strokeWidth={2} />
            <span>{totalItems}</span>
          </button>
          <button aria-label="Wishlist" data-figma-action="wishlist" type="button">
            <Heart aria-hidden="true" size={21} strokeWidth={2} />
            <span>0</span>
          </button>
          <button aria-label="My account" data-figma-action="account" type="button">
            <UserRound aria-hidden="true" size={21} strokeWidth={2} />
          </button>
        </aside>
      ) : null}

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

