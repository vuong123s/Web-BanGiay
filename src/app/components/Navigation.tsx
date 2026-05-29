import { type FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { ChevronDown, Search, ShoppingCart, User, X } from "lucide-react";

const navItems = [
  { label: "Home", to: "/", match: "/" },
  { label: "Shop", to: "/products", match: "/products" },
  { label: "Product", to: "/product/1", match: "/product" },
  { label: "Blog", to: "/blog", match: "/blog" },
  { label: "About", to: "/about-us", match: ["/about-us", "/about", "/aboutus"] },
  { label: "Contact", to: "/contact", match: "/contact" },
];

export default function Navigation() {
  const { openCart, totalItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchOpen(false);
    navigate(query.trim() ? `/products?search=${encodeURIComponent(query.trim())}` : "/products");
  };

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-[1140px] px-6 sm:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center py-6">
          <div />

          <Link
            to="/"
            className="text-[30px] font-black tracking-[0.45em] text-[#111]"
          >
            MATE
          </Link>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="relative flex items-center justify-center size-11 rounded-full bg-[#f1f1f1] text-[#222] hover:bg-[#e7e7e7]"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <Link
              onClick={() => setSearchOpen(false)}
              to="/account"
              className="relative flex items-center justify-center size-11 rounded-full bg-[#f1f1f1] text-[#222] hover:bg-[#e7e7e7]"
              aria-label="Account"
            >
              <User size={18} />
            </Link>
            <button
              type="button"
              onClick={openCart}
              className="relative flex items-center justify-center size-11 rounded-full bg-[#f1f1f1] text-[#222] hover:bg-[#e7e7e7]"
              aria-label="Cart"
            >
              <ShoppingCart size={18} />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-black leading-none text-white">
                {totalItems}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="mx-auto max-w-[1140px] px-6 sm:px-8">
          <nav className="flex min-w-max items-center justify-start gap-7 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#777] sm:justify-center sm:gap-10">
            {navItems.map(item => {
              const matches = Array.isArray(item.match) ? item.match : [item.match];
              const isActive = matches.includes("/")
                ? location.pathname === "/"
                : matches.some(match => location.pathname.startsWith(match));

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`group inline-flex items-center gap-1 hover:text-[#111] ${
                    isActive ? "text-[#111]" : ""
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={12}
                    className={`text-[#bdbdbd] group-hover:text-[#111] ${
                      isActive ? "text-[#111]" : ""
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {searchOpen ? (
        <div className="fixed inset-0 z-50 bg-black/45 px-4 pt-24" onClick={() => setSearchOpen(false)}>
          <form
            className="mx-auto flex w-full max-w-2xl items-center gap-3 rounded-[8px] bg-white p-3 shadow-2xl"
            onClick={event => event.stopPropagation()}
            onSubmit={submitSearch}
          >
            <Search className="ml-3 text-[#737373]" size={20} />
            <input
              autoFocus
              className="h-12 min-w-0 flex-1 bg-transparent text-base outline-none"
              onChange={event => setQuery(event.target.value)}
              placeholder="Search shoes"
              value={query}
            />
            <button
              type="submit"
              className="rounded-[6px] bg-black px-5 py-3 text-sm font-black uppercase text-white transition hover:bg-[#61ff00] hover:text-black"
            >
              Search
            </button>
            <button
              aria-label="Close search"
              className="grid size-11 place-items-center rounded-[6px] bg-[#f4f4f4] hover:bg-[#61ff00]"
              onClick={() => setSearchOpen(false)}
              type="button"
            >
              <X size={18} />
            </button>
          </form>
        </div>
      ) : null}
    </header>
  );
}

