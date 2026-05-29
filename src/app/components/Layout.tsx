import { ReactNode } from "react";
import { useLocation } from "react-router";

import CartSidebar from "./CartSidebar";
import SidebarNav from "./SidebarNav";
import Navigation from "./Navigation";
import MateFooter from "./MateFooter";
import { useCart } from "../context/CartContext";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isCartOpen, closeCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-white">
      {!isHome && <Navigation />}
      {isHome && <SidebarNav />}
      <main className={isHome ? "home-shell" : "non-home-page"}>
        {children}
      </main>
      {!isHome ? <MateFooter /> : null}
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
    </div>
  );
}

