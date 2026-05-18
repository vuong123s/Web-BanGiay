import { Link } from "react-router";
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react";

import { products } from "../data/shopData";

export default function CartPage() {
  const cartItems = products.slice(0, 2);

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

      <section className="mx-auto grid max-w-[1320px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="grid gap-4 rounded-[8px] border border-black/10 p-4 sm:grid-cols-[120px_1fr_auto] sm:items-center">
              <div className="aspect-square rounded-[6px] bg-[#f6f6f6]">
                <img src={item.image} alt={item.name} className="h-full w-full object-contain p-3" />
              </div>
              <div>
                <Link to={`/product/${item.id}`} className="text-xl font-black hover:text-[#0b8f24]">
                  {item.name}
                </Link>
                <p className="mt-2 text-sm text-[#666]">{item.category}</p>
                <p className="mt-3 font-black">{item.price}</p>
              </div>
              <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                <div className="flex w-28 items-center justify-between rounded-full border border-black/10 px-3 py-2">
                  <Minus size={14} />
                  <span className="text-sm font-black">1</span>
                  <Plus size={14} />
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-black uppercase text-[#777] hover:text-black">
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
              <span className="font-black">VND 6,440,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#666]">Shipping</span>
              <span className="font-black">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#666]">Discount</span>
              <span className="font-black">VND 0</span>
            </div>
          </div>
          <div className="mt-5 flex justify-between text-xl font-black">
            <span>Total</span>
            <span>VND 6,440,000</span>
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
    </div>
  );
}
