import { Link, useLocation } from "react-router";
import { useCart } from "../context/CartContext";
import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";

const navItems = [
  { label: "Home", to: "/", match: "/" },
  { label: "Shop", to: "/products", match: "/products" },
  { label: "Product", to: "/product/1", match: "/product" },
  { label: "About", to: "/about-us", match: "/about-us" },
  { label: "Contact", to: "/contact", match: "/contact" },
];

export default function Navigation() {
  const { toggleCart } = useCart();
  const location = useLocation();

  return (
    <header className="bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
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
              className="relative flex items-center justify-center size-11 rounded-full bg-[#f1f1f1] text-[#222] hover:bg-[#e7e7e7]"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <Link
              to="/account"
              className="relative flex items-center justify-center size-11 rounded-full bg-[#f1f1f1] text-[#222] hover:bg-[#e7e7e7]"
              aria-label="Account"
            >
              <User size={18} />
            </Link>
            <button
              type="button"
              onClick={toggleCart}
              className="relative flex items-center justify-center size-11 rounded-full bg-[#f1f1f1] text-[#222] hover:bg-[#e7e7e7]"
              aria-label="Cart"
            >
              <ShoppingCart size={18} />
              <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-black text-[10px] font-semibold text-white">
                1
              </span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-10 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#777]">
            {navItems.map(item => {
              const isActive = item.match === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.match);

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
    </header>
  );
}
