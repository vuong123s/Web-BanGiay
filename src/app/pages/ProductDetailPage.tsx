import { useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowRight, Check, Heart, Minus, Plus, RotateCcw, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";

import { useCart } from "../context/CartContext";
import { getProductById, products } from "../data/shopData";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = products.filter(item => item.id !== product.id).slice(0, 3);
  const { toggleCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] ?? product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white text-[#111]">
      <section className="mx-auto grid max-w-[1320px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="grid gap-4 sm:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 sm:order-1 sm:flex-col">
            {[product.image, product.hover].map(image => (
              <button
                key={image}
                onClick={() => setSelectedImage(image)}
                className={`aspect-square overflow-hidden rounded-[8px] border bg-[#f6f6f6] p-2 ${
                  selectedImage === image ? "border-black" : "border-black/10"
                }`}
              >
                <img src={image} alt="" className="h-full w-full object-contain" />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-[8px] bg-[#f6f6f6] sm:order-2">
            <div className="relative aspect-square">
              <span className="absolute left-5 top-5 rounded-full bg-black px-4 py-2 text-xs font-black uppercase text-[#61ff00]">
                {product.badge}
              </span>
              <img src={selectedImage} alt={product.name} className="h-full w-full object-contain p-10" />
            </div>
          </div>
        </div>

        <div className="lg:pt-6">
          <p className="text-sm font-black uppercase text-[#0b8f24]">Home / {product.category}</p>
          <h1 className="mt-4 font-['Oswald',sans-serif] text-5xl font-black uppercase leading-none sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <div className="flex text-[#ffbf00]">
              {Array.from({ length: product.rating }).map((_, index) => (
                <Star key={index} size={17} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#666]">128 verified reviews</span>
            <span className="rounded-full bg-[#e8fff4] px-3 py-1 text-xs font-black uppercase text-[#0b8f24]">
              In stock
            </span>
          </div>
          <p className="mt-6 text-lg leading-8 text-[#555]">{product.description}</p>

          <div className="mt-7 flex items-end gap-4">
            <p className="text-3xl font-black">{product.price}</p>
            <p className="pb-1 text-lg text-[#999] line-through">{product.oldPrice}</p>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-black uppercase">Color</p>
                <p className="text-sm text-[#666]">Selected palette</p>
              </div>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className="size-9 rounded-full border-2 border-white ring-1 ring-black/15 transition hover:ring-black"
                    style={{ backgroundColor: color }}
                    aria-label={`Choose color ${color}`}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-black uppercase">Size</p>
                <button className="text-sm font-bold underline">Size guide</button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-[6px] border py-3 text-sm font-black ${
                      selectedSize === size ? "border-black bg-black text-white" : "border-black/10 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex h-14 w-full items-center justify-between rounded-[6px] border border-black/10 px-4 sm:w-36">
                <button onClick={() => setQuantity(value => Math.max(1, value - 1))} aria-label="Decrease quantity">
                  <Minus size={16} />
                </button>
                <span className="font-black">{quantity}</span>
                <button onClick={() => setQuantity(value => value + 1)} aria-label="Increase quantity">
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={toggleCart}
                className="inline-flex h-14 flex-1 items-center justify-center gap-3 rounded-[6px] bg-black px-7 text-sm font-black uppercase text-white transition hover:bg-[#61ff00] hover:text-black"
              >
                Add to cart
                <ShoppingBag size={18} />
              </button>
              <button className="grid h-14 w-full place-items-center rounded-[6px] border border-black/10 hover:border-black sm:w-14" aria-label="Add to wishlist">
                <Heart size={19} />
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Truck, title: "Fast delivery", text: "2-4 business days" },
              { icon: RotateCcw, title: "Easy returns", text: "14-day exchange" },
              { icon: ShieldCheck, title: "Authentic", text: "Verified stock" },
            ].map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[8px] border border-black/10 p-4">
                  <Icon size={20} />
                  <p className="mt-3 font-black">{item.title}</p>
                  <p className="text-sm text-[#666]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f6f6f6] py-12">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              "Premium materials with breathable lining and padded support.",
              "Durable rubber outsole for daily grip and confident movement.",
              "Styled for streetwear, training looks, and weekend outfits.",
            ].map(text => (
              <div key={text} className="flex gap-3 rounded-[8px] bg-white p-5">
                <Check className="mt-1 text-[#0b8f24]" size={18} />
                <p className="font-bold leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase text-[#0b8f24]">You may also like</p>
            <h2 className="mt-2 font-['Oswald',sans-serif] text-4xl font-black uppercase">Related products</h2>
          </div>
          <Link to="/products" className="hidden items-center gap-2 text-sm font-black uppercase sm:inline-flex">
            View all
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map(item => (
            <Link key={item.id} to={`/product/${item.id}`} className="group overflow-hidden rounded-[8px] border border-black/10 bg-white">
              <div className="aspect-[4/3.5] bg-[#f6f6f6]">
                <img src={item.image} alt={item.name} className="h-full w-full object-contain p-8 transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-sm text-[#666]">{item.category}</p>
                <h3 className="mt-1 text-lg font-black">{item.name}</h3>
                <p className="mt-2 font-black">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
