import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { ArrowRight, Filter, Heart, Search, ShoppingBag, SlidersHorizontal, Star, X } from "lucide-react";

import { useCart } from "../context/CartContext";
import { categories, formatCurrency, parseCurrency, type Product, productCategories, products, productSizes } from "../data/shopData";

type SortMode = "featured" | "price-low" | "price-high" | "rating";

const collectionCategoryMap: Record<string, string[]> = {
  Court: ["Basketball"],
  Kid: ["Daily"],
  Kids: ["Daily"],
  Lifestyle: ["Lifestyle", "Daily", "Streetwear"],
  Men: ["Basketball", "Training", "Streetwear", "Outdoor"],
  Outdoor: ["Outdoor"],
  Running: ["Training"],
  "Running Shoes": ["Training"],
  Skate: ["Daily", "Streetwear"],
  Sneakers: ["Lifestyle", "Streetwear", "Daily", "Training"],
  "Sport Shoes": ["Basketball", "Training"],
  Women: ["Lifestyle", "Daily"],
};

function getBrand(product: Product) {
  const text = `${product.name} ${product.description}`.toLowerCase();
  if (text.includes("nike") || text.includes("jordan")) return "Nike";
  if (text.includes("canvas") || text.includes("vans")) return "Vans";
  if (text.includes("terrain") || text.includes("boot")) return "K1X";
  if (text.includes("mulberry")) return "Calvin Klein";
  return "Mate";
}

function getColorName(hex: string) {
  const color = hex.toLowerCase();
  if (["#111111", "#111827"].includes(color)) return "Black";
  if (["#f5f5f5", "#f8fafc", "#ffffff", "#fef2f2"].includes(color)) return "White";
  if (color.includes("dc") || color.includes("ef") || color.includes("fb")) return "Red";
  if (color.includes("22c") || color.includes("d8ff")) return "Green";
  if (color.includes("2563")) return "Blue";
  if (color.includes("9a6")) return "Brown";
  return "Neutral";
}

function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter(item => item !== value) : [...values, value];
}

export default function ProductCategoryPage() {
  const { addItem, openCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortMode, setSortMode] = useState<SortMode>("featured");

  const minCatalogPrice = useMemo(() => Math.min(...products.map(product => parseCurrency(product.price))), []);
  const maxCatalogPrice = useMemo(() => Math.max(...products.map(product => parseCurrency(product.price))), []);
  const [minPrice, setMinPrice] = useState(minCatalogPrice);
  const [maxPrice, setMaxPrice] = useState(maxCatalogPrice);

  const productBrands = useMemo(() => Array.from(new Set(products.map(getBrand))).sort(), []);
  const productColors = useMemo(
    () => Array.from(new Set(products.flatMap(product => product.colors.map(getColorName)))).sort(),
    [],
  );

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

  const clearFilters = () => {
    setSearch("");
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSortMode("featured");
    setMinPrice(minCatalogPrice);
    setMaxPrice(maxCatalogPrice);
    setSearchParams({});
  };

  const hasActiveFilters =
    Boolean(search) ||
    selectedCategories.length > 0 ||
    selectedBrands.length > 0 ||
    selectedSizes.length > 0 ||
    selectedColors.length > 0 ||
    sortMode !== "featured" ||
    minPrice !== minCatalogPrice ||
    maxPrice !== maxCatalogPrice;

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const visibleProducts = products.filter(product => {
      const productBrand = getBrand(product);
      const productColorNames = product.colors.map(getColorName);
      const productPrice = parseCurrency(product.price);
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [product.name, product.category, product.description, productBrand].some(value =>
          value.toLowerCase().includes(normalizedSearch),
        );
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(productBrand);
      const matchesSize = selectedSizes.length === 0 || selectedSizes.some(size => product.sizes.includes(size));
      const matchesColor = selectedColors.length === 0 || selectedColors.some(color => productColorNames.includes(color));
      const matchesPrice = productPrice >= minPrice && productPrice <= maxPrice;

      return matchesSearch && matchesCategory && matchesBrand && matchesSize && matchesColor && matchesPrice;
    });

    return [...visibleProducts].sort((firstProduct, secondProduct) => {
      if (sortMode === "price-low") return parseCurrency(firstProduct.price) - parseCurrency(secondProduct.price);
      if (sortMode === "price-high") return parseCurrency(secondProduct.price) - parseCurrency(firstProduct.price);
      if (sortMode === "rating") return secondProduct.rating - firstProduct.rating;
      return firstProduct.id - secondProduct.id;
    });
  }, [maxPrice, minPrice, search, selectedBrands, selectedCategories, selectedColors, selectedSizes, sortMode]);

  const addProductToCart = (product: Product) => {
    addItem(product, {
      color: product.colors[0],
      quantity: 1,
      size: product.sizes[0],
    });
    openCart();
  };

  const setMinPriceFromSlider = (value: number) => setMinPrice(Math.min(value, maxPrice));
  const setMaxPriceFromSlider = (value: number) => setMaxPrice(Math.max(value, minPrice));

  return (
    <div className="bg-white text-[#111]">
      <section className="border-y border-black/10 bg-[#f6f6f6]">
        <div className="mx-auto max-w-[1140px] px-6 py-16 sm:px-8">
          <p className="text-sm font-black uppercase text-[#0b8f24]">Home / Shop</p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="font-['Oswald',sans-serif] text-5xl font-black uppercase leading-none sm:text-7xl">
                Shop
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#555]">
                Filter by category, brand, color, size, and price. The product grid reflows naturally like a real shop.
              </p>
            </div>
            <label className="flex w-full max-w-xs items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black uppercase lg:w-72">
              <SlidersHorizontal size={16} />
              <select
                aria-label="Sort products"
                className="min-w-0 flex-1 bg-transparent outline-none"
                onChange={event => setSortMode(event.target.value as SortMode)}
                value={sortMode}
              >
                <option value="featured">Default sorting</option>
                <option value="price-low">Price low to high</option>
                <option value="price-high">Price high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-6 py-10 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(category => {
            const linkedCategories = collectionCategoryMap[category.title] ?? [category.title];
            const selected = linkedCategories.some(item => selectedCategories.includes(item));

            return (
              <button
                className={`${category.tone} group overflow-hidden rounded-[8px] border p-4 text-left transition hover:-translate-y-1 hover:border-black ${
                  selected ? "border-black" : "border-black/10"
                }`}
                key={category.title}
                onClick={() =>
                  setSelectedCategories(currentCategories => {
                    const everyCategorySelected = linkedCategories.every(item => currentCategories.includes(item));
                    return everyCategorySelected
                      ? currentCategories.filter(item => !linkedCategories.includes(item))
                      : Array.from(new Set([...currentCategories, ...linkedCategories]));
                  })
                }
                type="button"
              >
                <div className="aspect-[1.35/1] overflow-hidden rounded-[6px] bg-white">
                  <img
                    alt={category.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={category.image}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-black">{category.title}</h2>
                    <p className="text-sm text-[#666]">{category.count}</p>
                  </div>
                  <ArrowRight size={18} />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1140px] gap-8 px-6 pb-16 sm:px-8 lg:grid-cols-[270px_1fr]">
        <aside className="h-fit self-start rounded-[8px] border border-black/10 bg-white p-5">
          <div className="mb-6 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm font-black uppercase">
              <Filter size={16} />
              Filter by
            </div>
            {hasActiveFilters ? (
              <button className="text-xs font-black uppercase text-[#0b8f24]" onClick={clearFilters} type="button">
                Clear
              </button>
            ) : null}
          </div>

          <div className="space-y-7">
            <FilterGroup
              items={productCategories}
              selectedItems={selectedCategories}
              title="Categories"
              onToggle={value => setSelectedCategories(current => toggleValue(current, value))}
            />
            <FilterGroup
              items={productBrands}
              selectedItems={selectedBrands}
              title="Brands"
              onToggle={value => setSelectedBrands(current => toggleValue(current, value))}
            />

            <div>
              <h3 className="mb-3 text-sm font-black uppercase">Price</h3>
              <div className="rounded-[8px] bg-[#f6f6f6] p-4">
                <div className="mb-3 flex justify-between gap-3 text-xs font-black uppercase text-[#505157]">
                  <span>{formatCurrency(minPrice)}</span>
                  <span>{formatCurrency(maxPrice)}</span>
                </div>
                <div className="shop-price-range">
                  <input
                    aria-label="Minimum price"
                    max={maxCatalogPrice}
                    min={minCatalogPrice}
                    onChange={event => setMinPriceFromSlider(Number(event.target.value))}
                    step={10000}
                    type="range"
                    value={minPrice}
                  />
                  <input
                    aria-label="Maximum price"
                    max={maxCatalogPrice}
                    min={minCatalogPrice}
                    onChange={event => setMaxPriceFromSlider(Number(event.target.value))}
                    step={10000}
                    type="range"
                    value={maxPrice}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-black uppercase">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {productColors.map(color => (
                  <button
                    className={`rounded-full border px-3 py-1.5 text-xs font-black uppercase ${
                      selectedColors.includes(color)
                        ? "border-black bg-[#61ff00]"
                        : "border-black/10 bg-white hover:border-black"
                    }`}
                    key={color}
                    onClick={() => setSelectedColors(current => toggleValue(current, color))}
                    type="button"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-black uppercase">Sizes</h3>
              <div className="grid grid-cols-4 gap-2">
                {productSizes.map(size => (
                  <button
                    className={`rounded-[6px] border py-2 text-sm font-bold ${
                      selectedSizes.includes(size)
                        ? "border-black bg-[#61ff00]"
                        : "border-black/10 hover:border-black hover:bg-[#61ff00]"
                    }`}
                    key={size}
                    onClick={() => setSelectedSizes(current => toggleValue(current, size))}
                    type="button"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm font-bold text-[#666]">
              Showing {filteredProducts.length} of {products.length} results
            </p>
            <label className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm text-[#666] focus-within:border-black">
              <Search size={16} />
              <input
                className="min-w-0 bg-transparent outline-none"
                onChange={event => setSearch(event.target.value)}
                placeholder="Search products"
                value={search}
              />
              {search ? (
                <button aria-label="Clear search" onClick={() => setSearch("")} type="button">
                  <X size={15} />
                </button>
              ) : null}
            </label>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-[8px] border border-dashed border-black/15 p-10 text-center">
              <h2 className="font-['Oswald',sans-serif] text-4xl font-black uppercase">No products found</h2>
              <p className="mx-auto mt-3 max-w-lg leading-7 text-[#666]">
                Clear one filter or widen the price range to show more shoes.
              </p>
              <button
                className="mt-6 rounded-[6px] bg-black px-6 py-3 text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black"
                onClick={clearFilters}
                type="button"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} onAddToCart={addProductToCart} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function FilterGroup({
  items,
  onToggle,
  selectedItems,
  title,
}: {
  items: string[];
  onToggle: (value: string) => void;
  selectedItems: string[];
  title: string;
}) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-black uppercase">{title}</h3>
      <div className="space-y-1 text-sm text-[#555]">
        {items.map(item => (
          <label className="flex cursor-pointer items-center justify-between rounded-[6px] px-2 py-2 hover:bg-[#f6f6f6]" key={item}>
            <span>{item}</span>
            <input
              checked={selectedItems.includes(item)}
              className="size-4 accent-black"
              onChange={() => onToggle(item)}
              type="checkbox"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ onAddToCart, product }: { onAddToCart: (product: Product) => void; product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-black/10 bg-white">
      <Link className="relative block aspect-[4/4.6] overflow-hidden bg-[#f6f6f6]" to={`/product/${product.id}`}>
        <span className="absolute left-4 top-4 z-10 rounded-full bg-black px-3 py-1 text-xs font-black uppercase text-[#61ff00]">
          {product.badge}
        </span>
        <img
          alt={product.name}
          className="absolute inset-0 h-full w-full object-contain p-8 transition duration-500 group-hover:scale-105 group-hover:opacity-0"
          src={product.image}
        />
        <img
          alt=""
          className="absolute inset-0 h-full w-full object-contain p-8 opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          src={product.hover}
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm text-[#666]">{getBrand(product)}</p>
          <div className="flex text-[#ffbf00]">
            {Array.from({ length: product.rating }).map((_, index) => (
              <Star fill="currentColor" key={index} size={13} />
            ))}
          </div>
        </div>
        <Link className="text-lg font-black hover:text-[#0b8f24]" to={`/product/${product.id}`}>
          {product.name}
        </Link>
        <p className="mt-2 text-sm text-[#666]">{product.category}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#666]">{product.description}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <p className="font-black">{product.price}</p>
            <p className="text-sm text-[#999] line-through">{product.oldPrice}</p>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Add to wishlist"
              className="grid size-10 place-items-center rounded-full border border-black/10 hover:border-black"
              type="button"
            >
              <Heart size={17} />
            </button>
            <button
              aria-label={`Add ${product.name} to cart`}
              className="grid size-10 place-items-center rounded-full bg-black text-[#61ff00]"
              onClick={() => onAddToCart(product)}
              type="button"
            >
              <ShoppingBag size={17} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

