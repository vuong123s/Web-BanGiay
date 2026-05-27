import { Link, useNavigate } from "react-router";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";

import { useCart } from "../context/CartContext";
import { formatCurrency } from "../data/shopData";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const navigate = useNavigate();
  const { detailedItems, subtotal, totalItems, removeItem, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />
      <aside className="fixed right-0 top-0 z-50 flex h-full w-[min(92vw,420px)] flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} />
            <h2 className="text-lg font-black uppercase">Shopping cart</h2>
            <span className="rounded-full bg-[#61ff00] px-2 py-0.5 text-xs font-black">{totalItems}</span>
          </div>
          <button onClick={onClose} className="grid size-10 place-items-center rounded-full bg-[#f3f3f3] hover:bg-[#61ff00]" aria-label="Close cart">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {detailedItems.length === 0 ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-[8px] border border-dashed border-black/15 p-6 text-center">
              <div className="grid size-16 place-items-center rounded-full bg-[#f6f6f6]">
                <ShoppingBag size={24} />
              </div>
              <h3 className="mt-5 text-xl font-black uppercase">Your cart is empty</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#666]">
                Add a pair from the shop and it will appear here instantly.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  navigate("/products");
                }}
                className="mt-5 rounded-[6px] bg-black px-6 py-3 text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black"
              >
                Shop products
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {detailedItems.map(item => (
                <div key={item.id} className="flex gap-4 rounded-[8px] border border-black/10 p-3">
                  <Link to={`/product/${item.product.id}`} onClick={onClose} className="size-24 shrink-0 rounded-[6px] bg-[#f6f6f6]">
                    <img src={item.product.image} alt={item.product.name} className="h-full w-full object-contain p-2" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <Link to={`/product/${item.product.id}`} onClick={onClose} className="font-black leading-snug hover:text-[#0b8f24]">
                        {item.product.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="grid size-8 shrink-0 place-items-center rounded-full text-[#777] hover:bg-[#f6f6f6] hover:text-black"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <X size={15} />
                      </button>
                    </div>
                    <p className="mt-1 text-sm text-[#666]">
                      Size {item.size} / Color {item.color}
                    </p>
                    <p className="mt-1 text-sm font-black">{formatCurrency(item.lineTotal)}</p>
                    <div className="mt-3 flex w-28 items-center justify-between rounded-full border border-black/10 px-2 py-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="grid size-7 place-items-center"
                        aria-label={`Decrease ${item.product.name} quantity`}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-black">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="grid size-7 place-items-center"
                        aria-label={`Increase ${item.product.name} quantity`}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-black/10 p-5">
          <div className="mb-4 flex items-center justify-between text-lg font-black">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <button
            onClick={() => {
              onClose();
              navigate(detailedItems.length === 0 ? "/products" : "/checkout");
            }}
            className="mb-3 flex h-14 w-full items-center justify-center rounded-[6px] bg-black text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black"
          >
            {detailedItems.length === 0 ? "Shop now" : "Checkout"}
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
