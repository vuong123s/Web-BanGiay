import { Link } from "react-router";
import { Heart, MapPin, PackageCheck, Settings, User } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="bg-white text-[#111]">
      <section className="border-y border-black/10 bg-[#f6f6f6]">
        <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase text-[#0b8f24]">My account</p>
          <h1 className="mt-4 font-['Oswald',sans-serif] text-5xl font-black uppercase sm:text-7xl">
            Account dashboard
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
        <aside className="h-fit rounded-[8px] border border-black/10 p-4">
          {[
            { icon: User, label: "Profile" },
            { icon: PackageCheck, label: "Orders" },
            { icon: Heart, label: "Wishlist" },
            { icon: MapPin, label: "Addresses" },
            { icon: Settings, label: "Settings" },
          ].map(item => {
            const Icon = item.icon;
            return (
              <button key={item.label} className="flex w-full items-center gap-3 rounded-[6px] px-4 py-3 text-left font-bold hover:bg-[#f6f6f6]">
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </aside>

        <div className="grid gap-5">
          <div className="rounded-[8px] border border-black/10 p-6">
            <h2 className="text-2xl font-black">Welcome back</h2>
            <p className="mt-3 leading-7 text-[#666]">
              Manage your orders, saved products, addresses, and account details from one clean dashboard.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              ["02", "Active orders"],
              ["06", "Saved products"],
              ["01", "Default address"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[8px] border border-black/10 p-5">
                <p className="font-['Oswald',sans-serif] text-4xl font-black">{value}</p>
                <p className="mt-2 text-sm font-black uppercase text-[#666]">{label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[8px] border border-black/10 p-6">
            <h2 className="text-xl font-black uppercase">Recent order</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-4">
              <div>
                <p className="text-sm text-[#666]">Order</p>
                <p className="font-black">#MS-2048</p>
              </div>
              <div>
                <p className="text-sm text-[#666]">Date</p>
                <p className="font-black">May 18, 2026</p>
              </div>
              <div>
                <p className="text-sm text-[#666]">Status</p>
                <p className="font-black text-[#0b8f24]">Processing</p>
              </div>
              <div>
                <p className="text-sm text-[#666]">Total</p>
                <p className="font-black">VND 6,440,000</p>
              </div>
            </div>
          </div>
          <Link to="/products" className="inline-flex w-fit rounded-[6px] bg-black px-7 py-4 text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black">
            Shop new arrivals
          </Link>
        </div>
      </section>
    </div>
  );
}
