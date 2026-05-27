import { Link } from "react-router";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import { useCart } from "../context/CartContext";
import { formatCurrency } from "../data/shopData";

export default function CartPage() {
  const { detailedItems, subtotal, updateQuantity, removeItem } = useCart();

  return (
    <div className="bg-white text-[#111]">
      <section className="border-y border-black/10 bg-[#f6f6f6]">
        <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase text-[#0b8f24]">Home / Cart</p>
          <h1 className="mt-4 font-['Oswald',sans-serif] text-5xl font-black uppercase sm:text-7xl">
            Shopping cart
          </h1>
        </div>
      </section>

      {detailedItems.length === 0 ? (
        <section className="mx-auto max-w-[760px] px-4 py-16 text-center sm:px-6 lg:px-8">
          <div className="mx-auto grid size-20 place-items-center rounded-full bg-[#61ff00]">
            <ShoppingBag size={32} />
          </div>
          <h2 className="mt-6 font-['Oswald',sans-serif] text-4xl font-black uppercase">Your cart is empty</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#666]">
            Pick a product, choose your size, and it will be saved here while you keep browsing.
          </p>
          <Link to="/products" className="mt-7 inline-flex items-center gap-3 rounded-[6px] bg-black px-7 py-4 text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black">
            Shop products
            <ArrowRight size={17} />
          </Link>
        </section>
      ) : (
        <section className="mx-auto grid max-w-[1320px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div className="space-y-4">
            {detailedItems.map(item => (
              <div key={item.id} className="grid gap-4 rounded-[8px] border border-black/10 p-4 sm:grid-cols-[120px_1fr_auto] sm:items-center">
                <Link to={`/product/${item.product.id}`} className="aspect-square rounded-[6px] bg-[#f6f6f6]">
                  <img src={item.product.image} alt={item.product.name} className="h-full w-full object-contain p-3" />
                </Link>
                <div>
                  <Link to={`/product/${item.product.id}`} className="text-xl font-black hover:text-[#0b8f24]">
                    {item.product.name}
                  </Link>
                  <p className="mt-2 text-sm text-[#666]">
                    {item.product.category} / Size {item.size} / Color {item.color}
                  </p>
                  <p className="mt-3 font-black">{formatCurrency(item.lineTotal)}</p>
                </div>
                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                  <div className="flex w-28 items-center justify-between rounded-full border border-black/10 px-2 py-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="grid size-8 place-items-center"
                      aria-label={`Decrease ${item.product.name} quantity`}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-black">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="grid size-8 place-items-center"
                      aria-label={`Increase ${item.product.name} quantity`}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="inline-flex items-center gap-2 text-sm font-black uppercase text-[#777] hover:text-black"
                  >
                    <Trash2 size={15} />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-[8px] border border-black/10 p-5">
            <h2 className="text-xl font-black uppercase">Order summary</h2>
            <div className="mt-5 space-y-3 border-b border-black/10 pb-5 text-sm">
              <div className="flex justify-between">
                <span className="text-[#666]">Subtotal</span>
                <span className="font-black">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666]">Shipping</span>
                <span className="font-black">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666]">Discount</span>
                <span className="font-black">{formatCurrency(0)}</span>
              </div>
            </div>
            <div className="mt-5 flex justify-between text-xl font-black">
              <span>Total</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <Link to="/checkout" className="mt-6 flex h-14 items-center justify-center gap-3 rounded-[6px] bg-black text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black">
              Continue to checkout
              <ArrowRight size={17} />
            </Link>
            <Link to="/products" className="mt-3 flex h-14 items-center justify-center rounded-[6px] border border-black/10 text-sm font-black uppercase hover:border-black">
              Keep shopping
            </Link>
          </aside>
        </section>
      )}
    </div>
  );
}
