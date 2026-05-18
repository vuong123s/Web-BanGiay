import { Link } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CheckoutSuccessPage() {
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
