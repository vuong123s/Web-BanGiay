import { Link } from "react-router";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white text-[#111]">
      <section className="border-y border-black/10 bg-[#f6f6f6]">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase text-[#0b8f24]">Contact</p>
          <h1 className="mt-4 font-['Oswald',sans-serif] text-5xl font-black uppercase leading-none sm:text-7xl">
            We are here to help
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555]">
            Ask about sizes, product availability, delivery, exchanges, or anything else you need before ordering.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="space-y-4">
          {[
            { icon: Phone, title: "Phone", text: "+84 900 123 456" },
            { icon: Mail, title: "Email", text: "support@mateshoes.local" },
            { icon: MapPin, title: "Store", text: "District 1, Ho Chi Minh City" },
            { icon: Clock, title: "Hours", text: "Monday - Saturday, 9:00 - 21:00" },
          ].map(item => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4 rounded-[8px] border border-black/10 p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#61ff00]">
                  <Icon size={21} />
                </span>
                <div>
                  <h2 className="font-black">{item.title}</h2>
                  <p className="mt-1 text-[#666]">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <form className="rounded-[8px] border border-black/10 p-5 sm:p-7">
          <div className="mb-6 flex items-center gap-3">
            <MessageCircle className="text-[#0b8f24]" />
            <h2 className="font-['Oswald',sans-serif] text-3xl font-black uppercase">Send a message</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-black uppercase">
              First name
              <input className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black" />
            </label>
            <label className="text-sm font-black uppercase">
              Last name
              <input className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black" />
            </label>
            <label className="text-sm font-black uppercase">
              Email
              <input type="email" className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black" />
            </label>
            <label className="text-sm font-black uppercase">
              Topic
              <select className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black">
                <option>Product question</option>
                <option>Order support</option>
                <option>Exchange and return</option>
              </select>
            </label>
          </div>
          <label className="mt-4 block text-sm font-black uppercase">
            Message
            <textarea className="mt-2 min-h-36 w-full rounded-[6px] border border-black/10 px-4 py-3 text-base font-normal outline-none focus:border-black" />
          </label>
          <button type="button" className="mt-5 inline-flex items-center gap-3 rounded-[6px] bg-black px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-[#61ff00] hover:text-black">
            Send message
            <ArrowRight size={17} />
          </button>
        </form>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[8px] border border-black/10 bg-black p-8 text-white sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase text-[#61ff00]">Need shoes now?</p>
            <h2 className="mt-2 font-['Oswald',sans-serif] text-4xl font-black uppercase">Browse available products</h2>
          </div>
          <Link to="/products" className="mt-6 inline-flex items-center gap-3 rounded-[6px] bg-white px-7 py-4 text-sm font-black uppercase text-black sm:mt-0">
            Shop products
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
