import { FormEvent, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  topic: string;
  message: string;
};

const initialContactForm: ContactForm = {
  firstName: "",
  lastName: "",
  email: "",
  topic: "Product question",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialContactForm);
  const [status, setStatus] = useState("");

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm(currentForm => ({ ...currentForm, [field]: value }));
    setStatus("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.firstName || !form.email || !form.message) {
      setStatus("Please add your name, email, and message before sending.");
      return;
    }

    setStatus("Message sent. Our support team will reply shortly.");
    setForm(initialContactForm);
  };

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

        <form className="rounded-[8px] border border-black/10 p-5 sm:p-7" onSubmit={handleSubmit}>
          <div className="mb-6 flex items-center gap-3">
            <MessageCircle className="text-[#0b8f24]" />
            <h2 className="font-['Oswald',sans-serif] text-3xl font-black uppercase">Send a message</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-black uppercase">
              First name
              <input
                value={form.firstName}
                onChange={event => updateField("firstName", event.target.value)}
                className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black"
              />
            </label>
            <label className="text-sm font-black uppercase">
              Last name
              <input
                value={form.lastName}
                onChange={event => updateField("lastName", event.target.value)}
                className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black"
              />
            </label>
            <label className="text-sm font-black uppercase">
              Email
              <input
                type="email"
                value={form.email}
                onChange={event => updateField("email", event.target.value)}
                className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black"
              />
            </label>
            <label className="text-sm font-black uppercase">
              Topic
              <select
                value={form.topic}
                onChange={event => updateField("topic", event.target.value)}
                className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black"
              >
                <option>Product question</option>
                <option>Order support</option>
                <option>Exchange and return</option>
              </select>
            </label>
          </div>
          <label className="mt-4 block text-sm font-black uppercase">
            Message
            <textarea
              value={form.message}
              onChange={event => updateField("message", event.target.value)}
              className="mt-2 min-h-36 w-full rounded-[6px] border border-black/10 px-4 py-3 text-base font-normal outline-none focus:border-black"
            />
          </label>
          {status && (
            <p className="mt-4 rounded-[6px] bg-[#e8fff4] p-3 text-sm font-bold text-[#0b8f24]">
              {status}
            </p>
          )}
          <button type="submit" className="mt-5 inline-flex items-center gap-3 rounded-[6px] bg-black px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-[#61ff00] hover:text-black">
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
