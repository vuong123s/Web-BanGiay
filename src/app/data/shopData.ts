import brandBeauty from "../../imports/TrangChủ/b829bd23eefb6caabe6f949498ce08fe1a2564e0.png";
import brandBlackWorld from "../../imports/TrangChủ/3d38157bbc53af033773543bf2860c55b8023f9d.png";
import brandMalissa from "../../imports/TrangChủ/6c5c42a34c9eacc73993f9ce62835d62404f0ee2.png";
import brandPreston from "../../imports/TrangChủ/94e746b86164557af011cecad63e99e99da71cd8.png";
import brandSalvador from "../../imports/TrangChủ/89df456a3e100335b80d7ca7d7ad248f4cb071ae.png";
import brandVogue from "../../imports/TrangChủ/4605c17e4188257a178fa0dd32be611f7278a6d4.png";
import imageArena from "../../imports/TrangChủ/e56eacf1af6a4d2f7b5da5aeabc2500a195eb06f.png";
import imageCourt from "../../imports/TrangChủ/8ef96f6374c5e1c00fba23973a1d4766640515a5.png";
import imageLifestyle from "../../imports/TrangChủ/a227bd67d26144ffe3090446250e00ab80fedf32.png";
import imageMoto from "../../imports/TrangChủ/6e27b05fe34db924f81cf038e980f311d6266030.png";
import imageRunner from "../../imports/TrangChủ/55def639ae98599ce3bf06c93fa2c4578db9f4f4.png";
import imageStyle from "../../imports/TrangChủ/eb8c685892e0df295135da0f8c93c9ee6a1558fa.png";
import productBlack from "../../imports/TrangChủ/b957fac1f8d50131a15ad42f8f2b097046045ebd.png";
import productBlackHover from "../../imports/TrangChủ/4874dfb16d99bf2e9456ba848e707ad414d011bd.png";
import productBlue from "../../imports/TrangChủ/df3056b8ac054a9393841c0264d36fc1088cde03.png";
import productBlueHover from "../../imports/TrangChủ/26872436964b54174675dc8fd3a167c8d6f84fb3.png";
import productBoot from "../../imports/TrangChủ/fa25379e812d9dddfb49229861453670e8e99724.png";
import productBootHover from "../../imports/TrangChủ/73fc0d2451347ee9bb5f678eff480891a836731a.png";
import productGreen from "../../imports/TrangChủ/07efb7f17b073299b1a70210f5e78b1e05e14db4.png";
import productRed from "../../imports/TrangChủ/c48fa71271af6fd83d4ce1b3f7d28e23cbb78b8e.png";
import productRedHover from "../../imports/TrangChủ/50d9d6e7f76ac128256ec9d7cda69e42629aa79d.png";
import productVans from "../../imports/TrangChủ/4b1c34b74d60936ad774c03b3c498bd652a41fe6.png";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  oldPrice: string;
  badge: string;
  rating: number;
  image: string;
  hover: string;
  colors: string[];
  sizes: string[];
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Air Jordan DMP Retro",
    category: "Basketball",
    price: "VND 3,450,000",
    oldPrice: "VND 4,290,000",
    badge: "Hot",
    rating: 5,
    image: productBlack,
    hover: productBlackHover,
    colors: ["#111111", "#d8ff3f", "#f5f5f5"],
    sizes: ["39", "40", "41", "42", "43"],
    description: "A bold court-inspired sneaker with cushioned support, sharp contrast panels, and a street-ready silhouette.",
  },
  {
    id: 2,
    name: "Mulberry Area Sneaker",
    category: "Streetwear",
    price: "VND 2,990,000",
    oldPrice: "VND 3,590,000",
    badge: "-18%",
    rating: 5,
    image: productRed,
    hover: productRedHover,
    colors: ["#ef4444", "#fb7185", "#fef2f2"],
    sizes: ["38", "39", "40", "41", "42"],
    description: "A lightweight everyday sneaker made for clean outfits, long walks, and weekend city plans.",
  },
  {
    id: 3,
    name: "Nike Air Max 89 ES",
    category: "Training",
    price: "VND 2,650,000",
    oldPrice: "VND 3,120,000",
    badge: "New",
    rating: 4,
    image: productBlue,
    hover: productBlueHover,
    colors: ["#2563eb", "#111827", "#f8fafc"],
    sizes: ["40", "41", "42", "43", "44"],
    description: "A training-ready design with a stable sole, breathable upper, and a confident blue finish.",
  },
  {
    id: 4,
    name: "Terrain Boot High",
    category: "Outdoor",
    price: "VND 3,890,000",
    oldPrice: "VND 4,450,000",
    badge: "Best",
    rating: 5,
    image: productBoot,
    hover: productBootHover,
    colors: ["#9a6b42", "#e5e7eb", "#111827"],
    sizes: ["40", "41", "42", "43", "44"],
    description: "A sculpted outdoor boot with grippy texture, padded comfort, and a premium trail look.",
  },
  {
    id: 5,
    name: "Jordan Green Pulse",
    category: "Lifestyle",
    price: "VND 3,190,000",
    oldPrice: "VND 3,850,000",
    badge: "Fresh",
    rating: 5,
    image: productGreen,
    hover: productBlackHover,
    colors: ["#22c55e", "#111111", "#ffffff"],
    sizes: ["39", "40", "41", "42"],
    description: "A lifestyle sneaker with a classic profile, crisp green accents, and easy all-day styling.",
  },
  {
    id: 6,
    name: "Classic Red Canvas",
    category: "Daily",
    price: "VND 1,490,000",
    oldPrice: "VND 1,890,000",
    badge: "Deal",
    rating: 4,
    image: productVans,
    hover: productRed,
    colors: ["#dc2626", "#f8fafc", "#111827"],
    sizes: ["37", "38", "39", "40", "41"],
    description: "A simple canvas sneaker for daily wear, built with a flexible sole and a clean low-cut shape.",
  },
];

export const categories = [
  { title: "Lifestyle", count: "18 styles", image: imageLifestyle, tone: "bg-[#e8fff4]" },
  { title: "Running", count: "27 styles", image: imageRunner, tone: "bg-[#fff4d8]" },
  { title: "Court", count: "14 styles", image: imageCourt, tone: "bg-[#eef2ff]" },
  { title: "Outdoor", count: "22 styles", image: imageMoto, tone: "bg-[#f1f5f9]" },
];

export const brandImages = [
  brandBlackWorld,
  brandVogue,
  brandMalissa,
  brandSalvador,
  brandBeauty,
  brandPreston,
];

export const storyCards = [
  {
    title: "Five outfits for white sneakers",
    tag: "Lookbook",
    image: imageStyle,
  },
  {
    title: "How to choose training shoes",
    tag: "Guide",
    image: imageArena,
  },
  {
    title: "The everyday sneaker care kit",
    tag: "Care",
    image: imageLifestyle,
  },
];

export function getProductById(id: string | undefined) {
  const numericId = Number(id);
  return products.find(product => product.id === numericId) ?? products[0];
}
