import { Link } from "react-router";
import { ArrowRight, BadgeCheck, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { brandImages, categories, storyCards } from "../data/shopData";

export default function InfoPage() {
  return (
    <div className="bg-white text-[#111]">
      <section className="border-y border-black/10 bg-[#f6f6f6]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase text-[#0b8f24]">About Mate Shoes</p>
            <h1 className="mt-4 font-['Oswald',sans-serif] text-5xl font-black uppercase leading-none sm:text-7xl">
              Built for people who move
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555]">
              Mate Shoes is a modern footwear shop focused on clean curation, authentic products, and a smooth buying experience from first look to final checkout.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-3 rounded-[6px] bg-black px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-[#61ff00] hover:text-black"
            >
              Explore the shop
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {categories.slice(0, 2).map(category => (
              <div key={category.title} className={`${category.tone} overflow-hidden rounded-[8px] border border-black/10 p-4`}>
                <div className="aspect-[1.15/1] overflow-hidden rounded-[6px]">
                  <img src={category.image} alt={category.title} className="h-full w-full object-cover" />
                </div>
                <h2 className="mt-4 text-xl font-black">{category.title}</h2>
                <p className="text-sm text-[#666]">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            ["06", "Curated collections"],
            ["120+", "Verified products"],
            ["24h", "Customer support"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[8px] border border-black/10 p-6">
              <p className="font-['Oswald',sans-serif] text-5xl font-black">{value}</p>
              <p className="mt-2 text-sm font-black uppercase text-[#666]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-black uppercase text-[#61ff00]">What we care about</p>
            <h2 className="mt-2 font-['Oswald',sans-serif] text-4xl font-black uppercase sm:text-5xl">
              Clear standards, better shopping
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: BadgeCheck, title: "Authentic stock", text: "Every pair is checked before it reaches the storefront." },
              { icon: Sparkles, title: "Strong visuals", text: "Products are presented with large imagery and practical details." },
              { icon: HeartHandshake, title: "Human support", text: "Sizing questions, exchanges, and order updates stay simple." },
            ].map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[8px] border border-white/10 bg-white/5 p-6">
                  <Icon className="text-[#61ff00]" size={26} />
                  <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/70">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase text-[#0b8f24]">Journal</p>
          <h2 className="mt-2 font-['Oswald',sans-serif] text-4xl font-black uppercase">Guides from our team</h2>
          <p className="mt-4 leading-7 text-[#666]">
            Short, practical stories to help customers choose, style, and care for their favorite pairs.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {storyCards.map(card => (
            <Link key={card.title} to="/products" className="group overflow-hidden rounded-[8px] border border-black/10">
              <div className="aspect-[1.1/1] overflow-hidden">
                <img src={card.image} alt={card.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="text-xs font-black uppercase text-[#0b8f24]">{card.tag}</p>
                <h3 className="mt-2 font-black leading-snug">{card.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 py-10">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-10 px-4 sm:px-6 lg:px-8">
          {brandImages.map((brand, index) => (
            <img key={index} src={brand} alt="" className="h-16 w-28 object-contain grayscale" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[8px] border border-black/10 bg-[#e8fff4] p-8 sm:flex sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-black uppercase text-[#0b8f24]">
              <ShieldCheck size={17} />
              Authentic guarantee
            </div>
            <h2 className="font-['Oswald',sans-serif] text-4xl font-black uppercase">Ready to find your next pair?</h2>
          </div>
          <Link to="/products" className="mt-6 inline-flex items-center gap-3 rounded-[6px] bg-black px-7 py-4 text-sm font-black uppercase text-white sm:mt-0">
            Shop now
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
