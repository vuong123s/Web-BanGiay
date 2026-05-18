import { Link, useNavigate } from "react-router";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";

import { products } from "../data/shopData";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const navigate = useNavigate();
  const cartItems = products.slice(0, 2);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />
      <aside className="fixed right-0 top-0 z-50 flex h-full w-[min(92vw,420px)] flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} />
            <h2 className="text-lg font-black uppercase">Shopping cart</h2>
          </div>
          <button onClick={onClose} className="grid size-10 place-items-center rounded-full bg-[#f3f3f3] hover:bg-[#61ff00]" aria-label="Close cart">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex gap-4 rounded-[8px] border border-black/10 p-3">
                <div className="size-24 shrink-0 rounded-[6px] bg-[#f6f6f6]">
                  <img src={item.image} alt={item.name} className="h-full w-full object-contain p-2" />
                </div>
                <div className="min-w-0 flex-1">
                  <Link to={`/product/${item.id}`} onClick={onClose} className="font-black leading-snug hover:text-[#0b8f24]">
                    {item.name}
                  </Link>
                  <p className="mt-1 text-sm text-[#666]">{item.price}</p>
                  <div className="mt-3 flex w-28 items-center justify-between rounded-full border border-black/10 px-3 py-1">
                    <Minus size={14} />
                    <span className="text-sm font-black">1</span>
                    <Plus size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-black/10 p-5">
          <div className="mb-4 flex items-center justify-between text-lg font-black">
            <span>Subtotal</span>
            <span>VND 6,440,000</span>
          </div>
          <button
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}
            className="mb-3 flex h-14 w-full items-center justify-center rounded-[6px] bg-black text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black"
          >
            Checkout
          </button>
          <button
            onClick={() => {
              onClose();
              navigate("/cart");
            }}
            className="flex h-14 w-full items-center justify-center rounded-[6px] border border-black/10 text-sm font-black uppercase hover:border-black"
          >
            View cart
          </button>
        </div>
      </aside>
    </>
  );
}
