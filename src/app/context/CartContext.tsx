import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

import { parseCurrency, Product, products } from "../data/shopData";

const CART_STORAGE_KEY = "mate-shoes-cart";

export type CartItem = {
  id: string;
  productId: number;
  size: string;
  color: string;
  quantity: number;
};

export type DetailedCartItem = CartItem & {
  product: Product;
  lineTotal: number;
};

type AddItemOptions = {
  size?: string;
  color?: string;
  quantity?: number;
};

interface CartContextType {
  isCartOpen: boolean;
  items: CartItem[];
  detailedItems: DetailedCartItem[];
  subtotal: number;
  totalItems: number;
  addItem: (product: Product, options?: AddItemOptions) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function getCartItemId(productId: number, size: string, color: string) {
  return `${productId}-${size}-${color}`;
}

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!storedCart) return [];
    const parsedCart = JSON.parse(storedCart);
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>(readStoredCart);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const detailedItems = useMemo(
    () =>
      items
        .map(item => {
          const product = products.find(productItem => productItem.id === item.productId);
          if (!product) return null;

          return {
            ...item,
            product,
            lineTotal: parseCurrency(product.price) * item.quantity,
          };
        })
        .filter((item): item is DetailedCartItem => item !== null),
    [items],
  );

  const subtotal = useMemo(
    () => detailedItems.reduce((total, item) => total + item.lineTotal, 0),
    [detailedItems],
  );

  const totalItems = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const addItem = (product: Product, options: AddItemOptions = {}) => {
    const size = options.size ?? product.sizes[0] ?? "One size";
    const color = options.color ?? product.colors[0] ?? "Default";
    const quantity = Math.max(1, options.quantity ?? 1);
    const id = getCartItemId(product.id, size, color);

    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === id);
      if (!existingItem) {
        return [...currentItems, { id, productId: product.id, size, color, quantity }];
      }

      return currentItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item,
      );
    });
  };

  const removeItem = (itemId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    const nextQuantity = Math.max(0, quantity);
    if (nextQuantity === 0) {
      removeItem(itemId);
      return;
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.id === itemId ? { ...item, quantity: nextQuantity } : item,
      ),
    );
  };

  const clearCart = () => setItems([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        items,
        detailedItems,
        subtotal,
        totalItems,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
