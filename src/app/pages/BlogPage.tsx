import { useMemo, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, CalendarDays, Search, Tag } from "lucide-react";

import { storyCards } from "../data/shopData";

const blogPosts = [
  {
    ...storyCards[0],
    category: "Lookbook",
    date: "May 12, 2026",
    excerpt: "Clean sneaker outfits built around white, black, and green pairs for everyday styling.",
  },
  {
    ...storyCards[1],
    category: "Guide",
    date: "May 08, 2026",
    excerpt: "A practical checklist for choosing training shoes based on support, grip, and daily use.",
  },
  {
    ...storyCards[2],
    category: "Care",
    date: "April 30, 2026",
    excerpt: "Simple care habits that keep suede, canvas, and leather sneakers looking sharp longer.",
  },
  {
    ...storyCards[0],
    title: "How to rotate shoes through the week",
    category: "Guide",
    date: "April 24, 2026",
    excerpt: "Build a small rotation that covers office days, training blocks, and weekend outfits.",
  },
  {
    ...storyCards[1],
    title: "Running shoe details that matter",
    category: "Performance",
    date: "April 18, 2026",
    excerpt: "Heel shape, outsole texture, and breathable uppers make a real difference on long walks.",
  },
  {
    ...storyCards[2],
    title: "The Mate Shoes travel kit",
    category: "Care",
    date: "April 10, 2026",
    excerpt: "Compact cleaning tools and packing notes for keeping sneakers ready during travel.",
  },
];

const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return blogPosts.filter(post => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [post.title, post.category, post.excerpt].some(value => value.toLowerCase().includes(normalizedSearch));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="bg-white text-[#111]">
      <section className="border-y border-black/10 bg-[#f6f6f6]">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase text-[#0b8f24]">Home / Blog</p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="font-['Oswald',sans-serif] text-5xl font-black uppercase leading-none sm:text-7xl">
                Mate Blog
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#555]">
                Style guides, product notes, and care tips for the shoes in the Mate collection.
              </p>
            </div>
            <label className="flex w-full max-w-md items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-[#666] focus-within:border-black">
              <Search size={17} />
              <input
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Search articles"
                className="min-w-0 flex-1 bg-transparent outline-none"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-black uppercase transition ${
                activeCategory === category
                  ? "border-black bg-[#61ff00] text-black"
                  : "border-black/10 bg-white text-[#666] hover:border-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="rounded-[8px] border border-dashed border-black/15 p-10 text-center">
            <h2 className="font-['Oswald',sans-serif] text-4xl font-black uppercase">No posts found</h2>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearch("");
              }}
              className="mt-6 rounded-[6px] bg-black px-6 py-3 text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map(post => (
              <article key={`${post.title}-${post.date}`} className="group overflow-hidden rounded-[8px] border border-black/10 bg-white">
                <div className="aspect-[1.25/1] overflow-hidden bg-[#f6f6f6]">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase text-[#666]">
                    <span className="inline-flex items-center gap-1">
                      <Tag size={13} />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays size={13} />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="mt-4 text-xl font-black leading-tight">{post.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[#666]">{post.excerpt}</p>
                  <Link to="/products" className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase hover:text-[#0b8f24]">
                    Shop related shoes
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
