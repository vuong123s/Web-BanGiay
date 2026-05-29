import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle2, PackageCheck } from "lucide-react";

import { readLastOrder } from "../data/orders";

export default function CheckoutSuccessPage() {
  const [order] = useState(readLastOrder);

  return (
    <div className="bg-white text-[#111]">
      <section className="mx-auto max-w-[900px] px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto grid size-20 place-items-center rounded-full bg-[#61ff00]">
          <CheckCircle2 size={38} />
        </div>
        <p className="mt-8 text-sm font-black uppercase text-[#0b8f24]">Order confirmed</p>
        <h1 className="mt-3 font-['Oswald',sans-serif] text-5xl font-black uppercase leading-none sm:text-7xl">
          Thank you for your order
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#555]">
          Your order has been received. A confirmation email and delivery update will be sent shortly.
        </p>

        {order && (
          <div className="mx-auto mt-8 grid max-w-2xl gap-4 rounded-[8px] border border-black/10 p-5 text-left sm:grid-cols-3">
            <div>
              <p className="text-sm text-[#666]">Order</p>
              <p className="font-black">#{order.id}</p>
            </div>
            <div>
              <p className="text-sm text-[#666]">Items</p>
              <p className="font-black">{order.itemCount}</p>
            </div>
            <div>
              <p className="text-sm text-[#666]">Total</p>
              <p className="font-black">{order.totalLabel}</p>
            </div>
          </div>
        )}

        {!order && (
          <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 rounded-[8px] border border-black/10 bg-[#f6f6f6] p-5 text-left">
            <PackageCheck className="shrink-0 text-[#0b8f24]" size={22} />
            <p className="text-sm font-bold leading-6 text-[#555]">
              No saved demo order was found in this browser yet. Place an order from checkout to see live order details here.
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/products" className="inline-flex items-center justify-center gap-3 rounded-[6px] bg-black px-7 py-4 text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black">
            Continue shopping
            <ArrowRight size={17} />
          </Link>
          <Link to="/account" className="inline-flex items-center justify-center rounded-[6px] border border-black/10 px-7 py-4 text-sm font-black uppercase hover:border-black">
            View account
          </Link>
        </div>
      </section>
    </div>
  );
}

