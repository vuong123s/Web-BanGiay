import { Link } from "react-router";
import { ArrowRight, CreditCard, Lock, Truck } from "lucide-react";

import { products } from "../data/shopData";

export default function CheckoutPage() {
  const cartItems = products.slice(0, 2);

  return (
    <div className="bg-white text-[#111]">
      <section className="border-y border-black/10 bg-[#f6f6f6]">
        <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase text-[#0b8f24]">Cart / Checkout</p>
          <h1 className="mt-4 font-['Oswald',sans-serif] text-5xl font-black uppercase sm:text-7xl">
            Checkout
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
        <form className="space-y-8">
          <div className="rounded-[8px] border border-black/10 p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <Truck className="text-[#0b8f24]" />
              <h2 className="text-xl font-black uppercase">Shipping details</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["First name", "Last name", "Email", "Phone"].map(label => (
                <label key={label} className="text-sm font-black uppercase">
                  {label}
                  <input className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black" />
                </label>
              ))}
            </div>
            <label className="mt-4 block text-sm font-black uppercase">
              Address
              <input className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black" />
            </label>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {["City", "District", "Postal code"].map(label => (
                <label key={label} className="text-sm font-black uppercase">
                  {label}
                  <input className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black" />
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-[8px] border border-black/10 p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <CreditCard className="text-[#0b8f24]" />
              <h2 className="text-xl font-black uppercase">Payment method</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Cash on delivery", "Bank transfer"].map(method => (
                <label key={method} className="flex items-center gap-3 rounded-[6px] border border-black/10 p-4 font-bold hover:border-black">
                  <input name="payment" type="radio" className="accent-black" defaultChecked={method === "Cash on delivery"} />
                  {method}
                </label>
              ))}
            </div>
          </div>
        </form>

        <aside className="h-fit rounded-[8px] border border-black/10 p-5">
          <h2 className="text-xl font-black uppercase">Your order</h2>
          <div className="mt-5 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex gap-3">
                <div className="size-20 rounded-[6px] bg-[#f6f6f6]">
                  <img src={item.image} alt={item.name} className="h-full w-full object-contain p-2" />
                </div>
                <div className="flex-1">
                  <p className="font-black leading-snug">{item.name}</p>
                  <p className="mt-1 text-sm text-[#666]">Qty 1</p>
                </div>
                <p className="text-sm font-black">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t border-black/10 pt-5">
            <div className="flex justify-between text-lg font-black">
              <span>Total</span>
              <span>VND 6,440,000</span>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-[6px] bg-[#e8fff4] p-3 text-sm font-bold text-[#0b8f24]">
              <Lock size={16} />
              Secure checkout, no payment captured in this demo.
            </div>
            <Link to="/checkout/success" className="mt-5 flex h-14 items-center justify-center gap-3 rounded-[6px] bg-black text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black">
              Place order
              <ArrowRight size={17} />
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
