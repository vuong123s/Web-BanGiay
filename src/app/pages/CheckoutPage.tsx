import { FormEvent, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowRight, CreditCard, Lock, ShoppingBag, Truck } from "lucide-react";

import { useCart } from "../context/CartContext";
import { createOrderItem, saveLastOrder, SavedOrder } from "../data/orders";
import { formatCurrency } from "../data/shopData";

type CheckoutForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  district: string;
  postalCode: string;
  payment: string;
};

const initialForm: CheckoutForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  district: "",
  postalCode: "",
  payment: "Cash on delivery",
};

const shippingFields: Array<[keyof CheckoutForm, string, string]> = [
  ["firstName", "First name", "text"],
  ["lastName", "Last name", "text"],
  ["email", "Email", "email"],
  ["phone", "Phone", "tel"],
];

const addressFields: Array<[keyof CheckoutForm, string]> = [
  ["city", "City"],
  ["district", "District"],
  ["postalCode", "Postal code"],
];

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { detailedItems, subtotal, totalItems, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  const missingField = useMemo(
    () =>
      (Object.keys(form) as Array<keyof CheckoutForm>).find(field => {
        if (field === "postalCode") return false;
        return form[field].trim().length === 0;
      }),
    [form],
  );

  const updateField = (field: keyof CheckoutForm, value: string) => {
    setForm(currentForm => ({ ...currentForm, [field]: value }));
    setError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (detailedItems.length === 0) {
      navigate("/products");
      return;
    }

    if (missingField) {
      setError("Please complete the required shipping details before placing the order.");
      return;
    }

    const order: SavedOrder = {
      id: `MS-${Date.now().toString().slice(-6)}`,
      date: new Date().toISOString(),
      status: "Processing",
      total: subtotal,
      totalLabel: formatCurrency(subtotal),
      itemCount: totalItems,
      customer: {
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city,
        district: form.district,
        postalCode: form.postalCode,
        payment: form.payment,
      },
      items: detailedItems.map(createOrderItem),
    };

    saveLastOrder(order);
    clearCart();
    navigate("/checkout/success");
  };

  if (detailedItems.length === 0) {
    return (
      <div className="bg-white text-[#111]">
        <section className="mx-auto max-w-[760px] px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mx-auto grid size-20 place-items-center rounded-full bg-[#61ff00]">
            <ShoppingBag size={32} />
          </div>
          <h1 className="mt-6 font-['Oswald',sans-serif] text-5xl font-black uppercase leading-none sm:text-7xl">
            Your cart is empty
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#666]">
            Add a product first and checkout will build an order summary from your cart.
          </p>
          <Link to="/products" className="mt-7 inline-flex items-center gap-3 rounded-[6px] bg-black px-7 py-4 text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black">
            Shop products
            <ArrowRight size={17} />
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#111]">
      <section className="border-y border-black/10 bg-[#f6f6f6]">
        <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase text-[#0b8f24]">Cart / Checkout</p>
          <h1 className="mt-4 font-['Oswald',sans-serif] text-5xl font-black uppercase sm:text-7xl">
            Checkout
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
        <form id="checkout-form" className="space-y-8" onSubmit={handleSubmit}>
          <div className="rounded-[8px] border border-black/10 p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <Truck className="text-[#0b8f24]" />
              <h2 className="text-xl font-black uppercase">Shipping details</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {shippingFields.map(([field, label, type]) => (
                <label key={field} className="text-sm font-black uppercase">
                  {label}
                  <input
                    type={type}
                    value={form[field]}
                    onChange={event => updateField(field, event.target.value)}
                    className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black"
                    required
                  />
                </label>
              ))}
            </div>
            <label className="mt-4 block text-sm font-black uppercase">
              Address
              <input
                value={form.address}
                onChange={event => updateField("address", event.target.value)}
                className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black"
                required
              />
            </label>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {addressFields.map(([field, label]) => (
                <label key={field} className="text-sm font-black uppercase">
                  {label}
                  <input
                    value={form[field]}
                    onChange={event => updateField(field, event.target.value)}
                    className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black"
                    required={field !== "postalCode"}
                  />
                </label>
              ))}
            </div>
            {error && (
              <p className="mt-4 rounded-[6px] bg-red-50 p-3 text-sm font-bold text-red-700">
                {error}
              </p>
            )}
          </div>

          <div className="rounded-[8px] border border-black/10 p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <CreditCard className="text-[#0b8f24]" />
              <h2 className="text-xl font-black uppercase">Payment method</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Cash on delivery", "Bank transfer"].map(method => (
                <label key={method} className="flex items-center gap-3 rounded-[6px] border border-black/10 p-4 font-bold hover:border-black">
                  <input
                    name="payment"
                    type="radio"
                    className="accent-black"
                    checked={form.payment === method}
                    onChange={() => updateField("payment", method)}
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>
        </form>

        <aside className="h-fit rounded-[8px] border border-black/10 p-5">
          <h2 className="text-xl font-black uppercase">Your order</h2>
          <div className="mt-5 space-y-4">
            {detailedItems.map(item => (
              <div key={item.id} className="flex gap-3">
                <div className="size-20 rounded-[6px] bg-[#f6f6f6]">
                  <img src={item.product.image} alt={item.product.name} className="h-full w-full object-contain p-2" />
                </div>
                <div className="flex-1">
                  <p className="font-black leading-snug">{item.product.name}</p>
                  <p className="mt-1 text-sm text-[#666]">
                    Qty {item.quantity} / Size {item.size}
                  </p>
                </div>
                <p className="text-sm font-black">{formatCurrency(item.lineTotal)}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t border-black/10 pt-5">
            <div className="flex justify-between text-sm">
              <span className="text-[#666]">Subtotal</span>
              <span className="font-black">{formatCurrency(subtotal)}</span>
            </div>
            <div className="mt-3 flex justify-between text-sm">
              <span className="text-[#666]">Shipping</span>
              <span className="font-black">Free</span>
            </div>
            <div className="mt-5 flex justify-between text-lg font-black">
              <span>Total</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-[6px] bg-[#e8fff4] p-3 text-sm font-bold text-[#0b8f24]">
              <Lock size={16} />
              Secure checkout, no payment captured in this demo.
            </div>
            <button
              type="submit"
              form="checkout-form"
              aria-label="Place order"
              className="mt-5 flex h-14 w-full items-center justify-center gap-3 rounded-[6px] bg-black text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black"
            >
              Place order
              <ArrowRight size={17} />
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
}
