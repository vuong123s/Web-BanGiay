import { ReactNode, useMemo, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Heart,
  Menu,
  RotateCcw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
  User,
  X,
  Zap,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { products as catalogProducts } from "../data/shopData";

import logoMate from "../../imports/TrangChủ/89309c4327d643be9d6885f84d12f69b214a62e7.png";
import heroBackground from "../../imports/TrangChủ/f9b8c513c6f1279c9130e7d7020620f5c3b0ccf8.png";
import heroBoot from "../../imports/TrangChủ/73fc0d2451347ee9bb5f678eff480891a836731a.png";
import brandBlackWorld from "../../imports/TrangChủ/3d38157bbc53af033773543bf2860c55b8023f9d.png";
import brandVogue from "../../imports/TrangChủ/4605c17e4188257a178fa0dd32be611f7278a6d4.png";
import brandMalissa from "../../imports/TrangChủ/6c5c42a34c9eacc73993f9ce62835d62404f0ee2.png";
import brandSalvador from "../../imports/TrangChủ/89df456a3e100335b80d7ca7d7ad248f4cb071ae.png";
import brandBeauty from "../../imports/TrangChủ/b829bd23eefb6caabe6f949498ce08fe1a2564e0.png";
import brandPreston from "../../imports/TrangChủ/94e746b86164557af011cecad63e99e99da71cd8.png";
import bannerStreet from "../../imports/TrangChủ/0bd1d8e55618da3864ed4e4557419bd6e6c99dad.png";
import bannerRunner from "../../imports/TrangChủ/55def639ae98599ce3bf06c93fa2c4578db9f4f4.png";
import bannerDark from "../../imports/TrangChủ/e4be452edb340fc6729a30cad87aff9a00f208d9.png";
import categoryLifestyle from "../../imports/TrangChủ/a227bd67d26144ffe3090446250e00ab80fedf32.png";
import categoryCourt from "../../imports/TrangChủ/8ef96f6374c5e1c00fba23973a1d4766640515a5.png";
import categoryMoto from "../../imports/TrangChủ/6e27b05fe34db924f81cf038e980f311d6266030.png";
import productBlack from "../../imports/TrangChủ/b957fac1f8d50131a15ad42f8f2b097046045ebd.png";
import productBlackHover from "../../imports/TrangChủ/4874dfb16d99bf2e9456ba848e707ad414d011bd.png";
import productRed from "../../imports/TrangChủ/c48fa71271af6fd83d4ce1b3f7d28e23cbb78b8e.png";
import productRedHover from "../../imports/TrangChủ/50d9d6e7f76ac128256ec9d7cda69e42629aa79d.png";
import productBlue from "../../imports/TrangChủ/df3056b8ac054a9393841c0264d36fc1088cde03.png";
import productBlueHover from "../../imports/TrangChủ/26872436964b54174675dc8fd3a167c8d6f84fb3.png";
import productBrown from "../../imports/TrangChủ/fa25379e812d9dddfb49229861453670e8e99724.png";
import productBrownHover from "../../imports/TrangChủ/73fc0d2451347ee9bb5f678eff480891a836731a.png";
import productGreen from "../../imports/TrangChủ/07efb7f17b073299b1a70210f5e78b1e05e14db4.png";
import productVans from "../../imports/TrangChủ/4b1c34b74d60936ad774c03b3c498bd652a41fe6.png";
import articleArena from "../../imports/TrangChủ/e56eacf1af6a4d2f7b5da5aeabc2500a195eb06f.png";
import articleStyle from "../../imports/TrangChủ/eb8c685892e0df295135da0f8c93c9ee6a1558fa.png";
import articleMoney from "../../imports/TrangChủ/d9ba888d38f1fd476885363ec75226d6c8c6c0a0.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/products" },
  { label: "Product", to: "/product/1" },
  { label: "About", to: "/about-us" },
  { label: "Contact", to: "/contact" },
];

const brands = [
  brandBlackWorld,
  brandVogue,
  brandMalissa,
  brandSalvador,
  brandBeauty,
  brandPreston,
];

const categories = [
  { title: "Lifestyle", count: "18 styles", image: categoryLifestyle, tone: "bg-[#e8fff4]" },
  { title: "Running", count: "27 styles", image: bannerRunner, tone: "bg-[#fff4d8]" },
  { title: "Court", count: "14 styles", image: categoryCourt, tone: "bg-[#eef2ff]" },
  { title: "Outdoor", count: "22 styles", image: categoryMoto, tone: "bg-[#f1f5f9]" },
];

const products = [
  {
    id: 1,
    name: "Air Jordan DMP Retro",
    category: "Basketball",
    price: "VND 3,450,000",
    oldPrice: "VND 4,290,000",
    image: productBlack,
    hover: productBlackHover,
    badge: "Hot",
    colors: ["#111111", "#d8ff3f", "#f5f5f5"],
  },
  {
    id: 2,
    name: "Mulberry Area Sneaker",
    category: "Streetwear",
    price: "VND 2,990,000",
    oldPrice: "VND 3,590,000",
    image: productRed,
    hover: productRedHover,
    badge: "-18%",
    colors: ["#ef4444", "#fb7185", "#fef2f2"],
  },
  {
    id: 3,
    name: "Nike Air Max 89 ES",
    category: "Training",
    price: "VND 2,650,000",
    oldPrice: "VND 3,120,000",
    image: productBlue,
    hover: productBlueHover,
    badge: "New",
    colors: ["#2563eb", "#111827", "#f8fafc"],
  },
  {
    id: 4,
    name: "Terrain Boot High",
    category: "Outdoor",
    price: "VND 3,890,000",
    oldPrice: "VND 4,450,000",
    image: productBrown,
    hover: productBrownHover,
    badge: "Best",
    colors: ["#9a6b42", "#e5e7eb", "#111827"],
  },
  {
    id: 5,
    name: "Jordan Green Pulse",
    category: "Lifestyle",
    price: "VND 3,190,000",
    oldPrice: "VND 3,850,000",
    image: productGreen,
    hover: productBlackHover,
    badge: "Fresh",
    colors: ["#22c55e", "#111111", "#ffffff"],
  },
  {
    id: 6,
    name: "Classic Red Canvas",
    category: "Daily",
    price: "VND 1,490,000",
    oldPrice: "VND 1,890,000",
    image: productVans,
    hover: productRed,
    badge: "Deal",
    colors: ["#dc2626", "#f8fafc", "#111827"],
  },
];

const services = [
  { title: "Fast delivery", text: "2-4 business days", icon: Truck },
  { title: "Free size exchange", text: "Within the first 14 days", icon: RotateCcw },
  { title: "100% authentic", text: "Verified stock and invoice", icon: ShieldCheck },
];

const articles = [
  {
    title: "Five outfits for white sneakers",
    date: "Lookbook",
    image: articleStyle,
  },
  {
    title: "How to choose training shoes",
    date: "Guide",
    image: articleArena,
  },
  {
    title: "The everyday sneaker care kit",
    date: "Care",
    image: articleMoney,
  },
];

function IconButton({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="grid size-11 place-items-center rounded-full border border-black/10 bg-white text-black shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-[#61ff00]"
    >
      {children}
    </button>
  );
}

function HomeHeader() {
  const { openCart, totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-screen border-b border-black/10 bg-white/90 backdrop-blur-xl">
      <div className="relative mx-auto flex h-[76px] w-full max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          aria-label="Menu"
          title="Menu"
          onClick={() => setMenuOpen(true)}
          className="grid size-11 place-items-center rounded-full bg-[#f3f3f3] text-black transition hover:bg-[#61ff00] lg:hidden"
        >
          <Menu size={19} />
        </button>

        <nav className="hidden items-center gap-8 text-[13px] font-bold uppercase text-[#6d6d6d] lg:flex">
          {navItems.slice(0, 4).map(item => (
            <Link key={item.label} to={item.to} className="transition hover:text-black">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2" aria-label="Mate Shoes home">
          <img src={logoMate} alt="Mate Shoes" className="h-6 w-auto" />
        </Link>

        <button
          type="button"
          aria-label="Cart"
          title="Cart"
          onClick={openCart}
          className="fixed right-4 top-4 z-[9999] grid size-11 place-items-center rounded-full bg-black text-[#61ff00] shadow-sm sm:hidden"
        >
          <ShoppingBag size={18} />
          <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#61ff00] text-[10px] font-black text-black">
            {totalItems}
          </span>
        </button>

        <div className="hidden items-center gap-2 sm:static sm:flex">
          <div className="hidden sm:block">
            <IconButton label="Search" onClick={() => setSearchOpen(true)}>
              <Search size={18} />
            </IconButton>
          </div>
          <Link
            to="/account"
            aria-label="Account"
            title="Account"
            className="hidden size-11 place-items-center rounded-full border border-black/10 bg-white text-black shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-[#61ff00] sm:grid"
          >
            <User size={18} />
          </Link>
          <IconButton label="Cart" onClick={openCart}>
            <span className="relative">
              <ShoppingBag size={18} />
              <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-black text-[10px] font-bold text-[#61ff00]">
                {totalItems}
              </span>
            </span>
          </IconButton>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden" onClick={() => setMenuOpen(false)}>
          <div
            className="h-full w-[min(86vw,360px)] bg-white p-5 shadow-2xl"
            onClick={event => event.stopPropagation()}
          >
            <div className="mb-8 flex items-center justify-between">
              <img src={logoMate} alt="Mate Shoes" className="h-6 w-auto" />
              <IconButton label="Close menu" onClick={() => setMenuOpen(false)}>
                <X size={18} />
              </IconButton>
            </div>
            <nav className="flex flex-col divide-y divide-black/10 text-[22px] font-black uppercase">
              {navItems.map(item => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-5"
                >
                  {item.label}
                  <ArrowRight size={18} />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-50 grid place-items-start bg-black/50 px-4 pt-24" onClick={() => setSearchOpen(false)}>
          <div
            className="mx-auto flex w-full max-w-2xl items-center gap-3 rounded-[8px] bg-white p-3 shadow-2xl"
            onClick={event => event.stopPropagation()}
          >
            <Search className="ml-3 text-[#737373]" size={20} />
            <input
              autoFocus
              placeholder="Search sneakers, running shoes, boots..."
              className="h-12 flex-1 bg-transparent text-base outline-none"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="rounded-[6px] bg-black px-5 py-3 text-sm font-bold uppercase text-white transition hover:bg-[#61ff00] hover:text-black"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const { addItem, openCart } = useCart();
  const [favorite, setFavorite] = useState(false);
  const catalogProduct = catalogProducts.find(item => item.id === product.id);

  const addFeaturedProduct = () => {
    if (!catalogProduct) return;
    addItem(catalogProduct, {
      size: catalogProduct.sizes[0],
      color: catalogProduct.colors[0],
      quantity: 1,
    });
    openCart();
  };

  return (
    <article className="group relative overflow-hidden rounded-[8px] border border-black/10 bg-white">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/4.65] overflow-hidden bg-[#f6f6f6]">
          <span className="absolute left-4 top-4 z-10 rounded-full bg-black px-3 py-1 text-xs font-black uppercase text-[#61ff00]">
            {product.badge}
          </span>
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-contain p-8 transition duration-500 group-hover:scale-105 group-hover:opacity-0"
          />
          <img
            src={product.hover}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-contain p-8 opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
        </div>
      </Link>

      <div className="absolute right-4 top-4 flex translate-x-16 flex-col gap-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <IconButton label={favorite ? "Remove favorite" : "Add favorite"} onClick={() => setFavorite(value => !value)}>
          <Heart size={17} fill={favorite ? "currentColor" : "none"} />
        </IconButton>
        <Link
          to={`/product/${product.id}`}
          aria-label="Quick view"
          title="Quick view"
          className="grid size-11 place-items-center rounded-full border border-black/10 bg-white text-black shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-[#61ff00]"
        >
          <Search size={17} />
        </Link>
        <IconButton label="Add to cart" onClick={addFeaturedProduct}>
          <ShoppingBag size={17} />
        </IconButton>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="text-sm font-medium text-[#707070]">{product.category}</p>
          <div className="flex items-center gap-1 text-[#ffbf00]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={13} fill="currentColor" />
            ))}
          </div>
        </div>
        <Link to={`/product/${product.id}`} className="block text-lg font-black leading-snug transition hover:text-[#0b8f24]">
          {product.name}
        </Link>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-lg font-black">{product.price}</p>
            <p className="text-sm text-[#929292] line-through">{product.oldPrice}</p>
          </div>
          <div className="flex gap-1">
            {product.colors.map(color => (
              <span
                key={color}
                className="size-4 rounded-full border border-black/10"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  const { openCart } = useCart();
  const marqueeBrands = useMemo(() => [...brands, ...brands], []);

  return (
    <div className="bg-white text-[#111]">
      <HomeHeader />

      <section className="mate-hero relative overflow-hidden border-b border-black/10">
        <img src={heroBackground} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-white/35" />

        <div className="relative mx-auto grid max-w-[1320px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <div className="relative z-20 flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-xs font-black uppercase text-black shadow-sm">
              <Zap size={15} className="text-[#0db22a]" />
              New arrivals 2026
            </div>
            <h1 className="font-['Oswald',sans-serif] text-6xl font-black uppercase leading-none text-black sm:text-7xl lg:text-8xl">
              <span className="block">Mate</span>
              <span className="block">Shoes</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#303030]">
              A modern footwear store for streetwear, running, and outdoor shoes. The interface keeps products sharp, actions fast, and shopping effortless.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 rounded-[6px] bg-black px-7 py-4 text-sm font-black uppercase text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#61ff00] hover:text-black"
              >
                Shop now
                <ArrowRight size={17} />
              </Link>
              <button
                type="button"
                onClick={openCart}
                className="inline-flex items-center gap-3 rounded-[6px] border border-black/15 bg-white px-7 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-0.5 hover:border-black"
              >
                Quick cart
                <ShoppingBag size={17} />
              </button>
            </div>

            <div className="mt-10 grid w-full max-w-lg grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
              {[
                ["06", "Home demos"],
                ["09+", "Shop layouts"],
                ["24h", "Support"],
              ].map(([value, label]) => (
                <div key={label} className="min-w-0 rounded-[8px] border border-black/10 bg-white/70 p-3 sm:p-4">
                  <p className="text-2xl font-black sm:text-3xl">{value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase text-[#656565] sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[600px]">
            <div className="absolute left-0 top-10 hidden rounded-full bg-black px-5 py-3 text-sm font-black uppercase text-[#61ff00] shadow-xl sm:block">
              Mulberry area
            </div>
            <img
              src={categoryLifestyle}
              alt="Blue lifestyle sneaker"
              className="hero-shoe absolute left-1/2 top-[58%] z-10 h-[390px] w-[390px] max-w-none -translate-x-1/2 -translate-y-1/2 rounded-[10px] object-cover object-center drop-shadow-2xl sm:h-[500px] sm:w-[500px] lg:h-[560px] lg:w-[560px]"
            />
            <img
              src={heroBoot}
              alt="Brown outdoor sneaker"
              className="absolute bottom-8 right-8 hidden h-[210px] w-[210px] rotate-[-8deg] rounded-[10px] object-contain opacity-95 drop-shadow-xl sm:block lg:h-[250px] lg:w-[250px]"
            />
            <div className="absolute bottom-8 left-0 max-w-[230px] rounded-[8px] border border-black/10 bg-white/85 p-5 shadow-xl backdrop-blur">
              <p className="text-xs font-black uppercase text-[#0b8f24]">Drop highlight</p>
              <p className="mt-2 text-xl font-black leading-tight">Air-cushion sole, stronger daily grip.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white py-8">
        <div className="brand-marquee overflow-hidden">
          <div className="brand-track flex w-max items-center gap-12">
            {marqueeBrands.map((brand, index) => (
              <img key={`${brand}-${index}`} src={brand} alt="" className="h-16 w-28 object-contain grayscale transition hover:grayscale-0" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase text-[#0b8f24]">Shop by mood</p>
            <h2 className="mt-2 font-['Oswald',sans-serif] text-4xl font-black uppercase sm:text-5xl">
              Featured collections
            </h2>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-black uppercase hover:text-[#0b8f24]">
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(category => (
            <Link
              key={category.title}
              to="/products"
              className={`${category.tone} group overflow-hidden rounded-[8px] border border-black/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-black`}
            >
              <div className="aspect-[1.35/1] overflow-hidden rounded-[6px] bg-white">
                <img src={category.image} alt={category.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black">{category.title}</h3>
                  <p className="text-sm text-[#666]">{category.count}</p>
                </div>
                <span className="grid size-10 place-items-center rounded-full bg-black text-[#61ff00]">
                  <ArrowRight size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-5 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <Link to="/products" className="group relative min-h-[390px] overflow-hidden rounded-[8px] bg-black text-white">
          <img src={bannerStreet} alt="Sneaker streetwear collection" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute bottom-0 left-0 max-w-md p-7">
            <p className="text-sm font-black uppercase text-[#61ff00]">Street selection</p>
            <h2 className="mt-2 font-['Oswald',sans-serif] text-5xl font-black uppercase leading-none">Summer kicks</h2>
            <p className="mt-4 text-white/85">Bright colors, easy styling, and clean outfit shots.</p>
          </div>
        </Link>

        <div className="grid gap-5">
          <Link to="/products" className="group relative min-h-[185px] overflow-hidden rounded-[8px] bg-[#111] text-white">
            <img src={bannerRunner} alt="Runner training shoes" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute left-6 top-6">
              <p className="text-sm font-black uppercase text-[#61ff00]">Performance</p>
              <h3 className="mt-2 text-3xl font-black uppercase">Run lighter</h3>
            </div>
          </Link>
          <Link to="/products" className="group relative min-h-[185px] overflow-hidden rounded-[8px] bg-[#111] text-white">
            <img src={bannerDark} alt="Black premium sneaker" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute left-6 top-6">
              <p className="text-sm font-black uppercase text-[#61ff00]">Limited black</p>
              <h3 className="mt-2 text-3xl font-black uppercase">Night drop</h3>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-[#f6f6f6] py-16">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#0b8f24]">Best seller</p>
              <h2 className="mt-2 font-['Oswald',sans-serif] text-4xl font-black uppercase sm:text-5xl">
                Products on the shelf
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 text-sm font-black uppercase">
              {["New", "Trending", "Sale"].map(item => (
                <button key={item} type="button" className="rounded-full border border-black/10 bg-white px-5 py-2 transition hover:border-black hover:bg-[#61ff00]">
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-5 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        {services.map(service => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="flex items-center gap-4 rounded-[8px] border border-black/10 bg-white p-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#61ff00] text-black">
                <Icon size={23} />
              </span>
              <div>
                <h3 className="text-lg font-black">{service.title}</h3>
                <p className="text-sm text-[#666]">{service.text}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="border-y border-black/10 bg-black py-16 text-white">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase text-[#61ff00]">Mate stories</p>
            <h2 className="mt-2 font-['Oswald',sans-serif] text-4xl font-black uppercase sm:text-5xl">
              Latest style guide
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {articles.map(article => (
              <Link key={article.title} to="/info" className="group block overflow-hidden rounded-[8px] bg-white text-black">
                <div className="aspect-[1.2/1] overflow-hidden">
                  <img src={article.image} alt={article.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-black uppercase text-[#0b8f24]">{article.date}</p>
                  <h3 className="mt-2 font-black leading-snug">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.2fr_1fr] lg:px-8">
          <div>
            <img src={logoMate} alt="Mate Shoes" className="h-6 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-7 text-[#626262]">
              A MateShoes-inspired footwear storefront: fast, polished, product-first, and built for smooth shopping.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {["Sneaker", "Running", "Boots", "Jordan", "Lifestyle", "Sale"].map(item => (
              <Link key={item} to="/products" className="text-sm font-bold uppercase text-[#5f5f5f] transition hover:text-black">
                {item}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-sm font-black uppercase">Get updates</p>
            <div className="mt-4 flex overflow-hidden rounded-[8px] border border-black/10">
              <input placeholder="Your email" className="min-w-0 flex-1 px-4 py-3 text-sm outline-none" />
              <button type="button" className="bg-black px-5 text-sm font-black uppercase text-white transition hover:bg-[#61ff00] hover:text-black">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-black/10 px-4 py-5 text-center text-xs font-bold uppercase text-[#777]">
          Mate Shoes React Store
        </div>
      </footer>
    </div>
  );
}
