import { Product } from "./shopData";

export const LAST_ORDER_KEY = "mate-shoes-last-order";

export type SavedOrderItem = {
  id: string;
  productId: number;
  name: string;
  image: string;
  size: string;
  color: string;
  quantity: number;
  price: string;
  lineTotal: number;
};

export type SavedOrder = {
  id: string;
  date: string;
  status: "Processing" | "Completed";
  total: number;
  totalLabel: string;
  itemCount: number;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    district: string;
    postalCode: string;
    payment: string;
  };
  items: SavedOrderItem[];
};

export function createOrderItem(line: {
  id: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
  lineTotal: number;
}): SavedOrderItem {
  return {
    id: line.id,
    productId: line.product.id,
    name: line.product.name,
    image: line.product.image,
    size: line.size,
    color: line.color,
    quantity: line.quantity,
    price: line.product.price,
    lineTotal: line.lineTotal,
  };
}

export function saveLastOrder(order: SavedOrder) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(order));
}

export function readLastOrder(): SavedOrder | null {
  if (typeof window === "undefined") return null;

  try {
    const rawOrder = window.localStorage.getItem(LAST_ORDER_KEY);
    if (!rawOrder) return null;
    return JSON.parse(rawOrder) as SavedOrder;
  } catch {
    return null;
  }
}
