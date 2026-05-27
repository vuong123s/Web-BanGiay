import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { ArrowRight, Filter, Heart, Search, ShoppingBag, SlidersHorizontal, Star, X } from "lucide-react";

import { useCart } from "../context/CartContext";
import { categories, parseCurrency, Product, productCategories, products, productSizes } from "../data/shopData";

type SortMode = "featured" | "price-low" | "price-high" | "rating";
type PriceRange = "all" | "under-2m" | "2m-3m" | "over-3m";

const collectionCategoryMap: Record<string, string[]> = {
  Kid: ["Daily"],
  Kids: ["Daily"],
  Lifestyle: ["Lifestyle", "Daily", "Streetwear"],
  Men: ["Basketball", "Training", "Streetwear"],
  Running: ["Training"],
  "Running Shoes": ["Training"],
  Court: ["Basketball"],
  Outdoor: ["Outdoor"],
  Skate: ["Daily", "Streetwear"],
  Sneakers: ["Lifestyle", "Streetwear", "Daily"],
};

const priceRanges: Array<{ id: PriceRange; label: string; matches: (price: number) => boolean }> = [
  { id: "all", label: "All prices", matches: () => true },
  { id: "under-2m", label: "Under VND 2M", matches: price => price < 2000000 },
  { id: "2m-3m", label: "VND 2M - 3M", matches: price => price >= 2000000 && price <= 3000000 },
  { id: "over-3m", label: "Over VND 3M", matches: price => price > 3000000 },
];

export default function ProductCategoryPage() {
  const { addItem, openCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortMode, setSortMode] = useState<SortMode>("featured");
  const [priceRange, setPriceRange] = useState<PriceRange>("all");

  useEffect(() => {
    const querySearch = searchParams.get("search") ?? "";
    const queryCategory = searchParams.get("category");

    setSearch(querySearch);
    if (!queryCategory) {
      setSelectedCategories([]);
      return;
    }

    const normalizedCategory = queryCategory
      .split(" ")
      .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
      .join(" ");
    const linkedCategories = collectionCategoryMap[normalizedCategory] ?? [normalizedCategory];
    setSelectedCategories(linkedCategories.filter(category => productCategories.includes(category)));
  }, [searchParams]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(currentCategories =>
      currentCategories.includes(category)
        ? currentCategories.filter(item => item !== category)
        : [...currentCategories, category],
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(currentSizes =>
      currentSizes.includes(size)
        ? currentSizes.filter(item => item !== size)
        : [...currentSizes, size],
    );
  };

  const toggleCollection = (collectionTitle: string) => {
    const linkedCategories = collectionCategoryMap[collectionTitle] ?? [collectionTitle];
    setSelectedCategories(currentCategories => {
      const everyCategorySelected = linkedCategories.every(category => currentCategories.includes(category));

      if (everyCategorySelected) {
        return currentCategories.filter(category => !linkedCategories.includes(category));
      }

      return Array.from(new Set([...currentCategories, ...linkedCategories]));
    });
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSortMode("featured");
    setPriceRange("all");
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const visibleProducts = products.filter(product => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [product.name, product.category, product.description].some(value =>
          value.toLowerCase().includes(normalizedSearch),
        );
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesSize =
        selectedSizes.length === 0 || selectedSizes.some(size => product.sizes.includes(size));
      const productPrice = parseCurrency(product.price);
      const matchesPrice =
        priceRanges.find(range => range.id === priceRange)?.matches(productPrice) ?? true;

      return matchesSearch && matchesCategory && matchesSize && matchesPrice;
    });

    return [...visibleProducts].sort((firstProduct, secondProduct) => {
      if (sortMode === "price-low") {
        return parseCurrency(firstProduct.price) - parseCurrency(secondProduct.price);
      }
      if (sortMode === "price-high") {
        return parseCurrency(secondProduct.price) - parseCurrency(firstProduct.price);
      }
      if (sortMode === "rating") {
        return secondProduct.rating - firstProduct.rating;
      }
      return firstProduct.id - secondProduct.id;
    });
  }, [priceRange, search, selectedCategories, selectedSizes, sortMode]);

  const addProductToCart = (product: Product) => {
    addItem(product, {
      size: product.sizes[0],
      color: product.colors[0],
      quantity: 1,
    });
    openCart();
  };

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
                Browse curated sneakers, running shoes, boots, and everyday pairs with working filters, sorting, and cart actions.
              </p>
            </div>
            <label className="flex w-full max-w-xs items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black uppercase lg:w-64">
              <SlidersHorizontal size={16} />
              <select
                value={sortMode}
                onChange={event => setSortMode(event.target.value as SortMode)}
                className="min-w-0 flex-1 bg-transparent outline-none"
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price low to high</option>
                <option value="price-high">Price high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(category => (
            <button
              key={category.title}
              type="button"
              onClick={() => toggleCollection(category.title)}
              className={`${category.tone} group overflow-hidden rounded-[8px] border p-4 text-left transition hover:-translate-y-1 hover:border-black ${
                (collectionCategoryMap[category.title] ?? [category.title]).some(item => selectedCategories.includes(item))
                  ? "border-black"
                  : "border-black/10"
              }`}
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
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="h-fit rounded-[8px] border border-black/10 bg-white p-5">
          <div className="mb-6 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm font-black uppercase">
              <Filter size={16} />
              Filters
            </div>
            {(search || selectedCategories.length > 0 || selectedSizes.length > 0 || sortMode !== "featured" || priceRange !== "all") && (
              <button type="button" onClick={clearFilters} className="text-xs font-black uppercase text-[#0b8f24]">
                Clear
              </button>
            )}
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-black uppercase">Category</h3>
              <div className="space-y-2 text-sm text-[#555]">
                {productCategories.map(item => (
                  <label key={item} className="flex items-center justify-between rounded-[6px] px-2 py-2 hover:bg-[#f6f6f6]">
                    <span>{item}</span>
                    <input
                      type="checkbox"
                      className="accent-black"
                      checked={selectedCategories.includes(item)}
                      onChange={() => toggleCategory(item)}
                    />
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-black uppercase">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {productSizes.map(size => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => toggleSize(size)}
                    className={`rounded-[6px] border py-2 text-sm font-bold ${
                      selectedSizes.includes(size)
                        ? "border-black bg-[#61ff00]"
                        : "border-black/10 hover:border-black hover:bg-[#61ff00]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-black uppercase">Price</h3>
              <div className="grid gap-2">
                {priceRanges.map(range => (
                  <button
                    key={range.id}
                    type="button"
                    onClick={() => setPriceRange(range.id)}
                    className={`rounded-[6px] border px-3 py-2 text-left text-sm font-bold ${
                      priceRange === range.id
                        ? "border-black bg-[#61ff00] text-black"
                        : "border-black/10 bg-[#f6f6f6] text-[#555] hover:border-black"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm font-bold text-[#666]">
              Showing {filteredProducts.length} of {products.length} curated products
            </p>
            <label className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm text-[#666] focus-within:border-black">
              <Search size={16} />
              <input
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Search products"
                className="min-w-0 bg-transparent outline-none"
              />
              {search && (
                <button type="button" onClick={() => setSearch("")} aria-label="Clear search">
                  <X size={15} />
                </button>
              )}
            </label>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-[8px] border border-dashed border-black/15 p-10 text-center">
              <h2 className="font-['Oswald',sans-serif] text-4xl font-black uppercase">No products found</h2>
              <p className="mx-auto mt-3 max-w-lg leading-7 text-[#666]">
                Try clearing a size or category filter to bring more shoes back into view.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-[6px] bg-black px-6 py-3 text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map(product => (
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
                        <button
                          type="button"
                          onClick={() => addProductToCart(product)}
                          className="grid size-10 place-items-center rounded-full bg-black text-[#61ff00]"
                          aria-label={`Add ${product.name} to cart`}
                        >
                          <ShoppingBag size={17} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
