import { Link } from "react-router";
import { ArrowRight, Filter, Grid3X3, Heart, Search, ShoppingBag, SlidersHorizontal, Star } from "lucide-react";

import { useCart } from "../context/CartContext";
import { categories, products } from "../data/shopData";

export default function ProductCategoryPage() {
  const { toggleCart } = useCart();

  return (
    <div className="bg-white text-[#111]">
      <section className="border-y border-black/10 bg-[#f6f6f6]">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase text-[#0b8f24]">Home / Shop</p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="font-['Oswald',sans-serif] text-5xl font-black uppercase leading-none sm:text-7xl">
                Shop Shoes
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#555]">
                Browse curated sneakers, running shoes, boots, and everyday pairs with quick actions and clean product details.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black uppercase hover:border-black">
                <SlidersHorizontal size={16} />
                Sort
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black uppercase hover:border-black">
                <Grid3X3 size={16} />
                Grid
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(category => (
            <Link
              key={category.title}
              to="/products"
              className={`${category.tone} group overflow-hidden rounded-[8px] border border-black/10 p-4 transition hover:-translate-y-1 hover:border-black`}
            >
              <div className="aspect-[1.35/1] overflow-hidden rounded-[6px] bg-white">
                <img src={category.image} alt={category.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-black">{category.title}</h2>
                  <p className="text-sm text-[#666]">{category.count}</p>
                </div>
                <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="h-fit rounded-[8px] border border-black/10 bg-white p-5">
          <div className="mb-6 flex items-center gap-2 text-sm font-black uppercase">
            <Filter size={16} />
            Filters
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-black uppercase">Category</h3>
              <div className="space-y-2 text-sm text-[#555]">
                {["Lifestyle", "Running", "Basketball", "Outdoor", "Daily"].map(item => (
                  <label key={item} className="flex items-center justify-between rounded-[6px] px-2 py-2 hover:bg-[#f6f6f6]">
                    <span>{item}</span>
                    <input type="checkbox" className="accent-black" />
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-black uppercase">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {["37", "38", "39", "40", "41", "42", "43", "44"].map(size => (
                  <button key={size} className="rounded-[6px] border border-black/10 py-2 text-sm font-bold hover:border-black hover:bg-[#61ff00]">
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-black uppercase">Price</h3>
              <div className="rounded-[6px] bg-[#f6f6f6] p-4 text-sm font-bold text-[#555]">
                VND 1,000,000 - VND 5,000,000
              </div>
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm font-bold text-[#666]">Showing {products.length} curated products</p>
            <div className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm text-[#666]">
              <Search size={16} />
              Search products
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.map(product => (
              <article key={product.id} className="group overflow-hidden rounded-[8px] border border-black/10 bg-white">
                <Link to={`/product/${product.id}`} className="relative block aspect-[4/4.6] overflow-hidden bg-[#f6f6f6]">
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-black px-3 py-1 text-xs font-black uppercase text-[#61ff00]">
                    {product.badge}
                  </span>
                  <img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-contain p-8 transition duration-500 group-hover:scale-105 group-hover:opacity-0" />
                  <img src={product.hover} alt="" className="absolute inset-0 h-full w-full object-contain p-8 opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                </Link>
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm text-[#666]">{product.category}</p>
                    <div className="flex text-[#ffbf00]">
                      {Array.from({ length: product.rating }).map((_, index) => (
                        <Star key={index} size={13} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <Link to={`/product/${product.id}`} className="text-lg font-black hover:text-[#0b8f24]">
                    {product.name}
                  </Link>
                  <p className="mt-3 text-sm leading-6 text-[#666]">{product.description}</p>
                  <div className="mt-5 flex items-end justify-between gap-3">
                    <div>
                      <p className="font-black">{product.price}</p>
                      <p className="text-sm text-[#999] line-through">{product.oldPrice}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="grid size-10 place-items-center rounded-full border border-black/10 hover:border-black" aria-label="Add to wishlist">
                        <Heart size={17} />
                      </button>
                      <button onClick={toggleCart} className="grid size-10 place-items-center rounded-full bg-black text-[#61ff00]" aria-label="Add to cart">
                        <ShoppingBag size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
