import { Link } from "react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { type ReactNode } from "react";

const helpLinks = ["Shipping", "Returns", "Size Guide", "Track Order"];
const companyLinks = [
  { label: "About Us", to: "/about-us" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
  { label: "Shop", to: "/products" },
  { label: "Account", to: "/account" },
];
const socialLinks = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
];

export default function MateFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#111] text-white">
      <div className="mx-auto grid max-w-[1140px] gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Link className="text-[30px] font-black tracking-[0.42em]" to="/">
            MATE
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
            Premium sneaker store layout inspired by MateShoes, tuned for clear browsing, filtering, and checkout.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ icon: Icon, label }) => (
              <button
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/75 hover:border-[#61ff00] hover:text-[#61ff00]"
                key={label}
                type="button"
              >
                <Icon size={17} />
              </button>
            ))}
          </div>
        </div>

        <FooterColumn title="Help">
          {helpLinks.map(item => (
            <a className="text-sm text-white/65 hover:text-[#61ff00]" href="#" key={item}>
              {item}
            </a>
          ))}
        </FooterColumn>

        <FooterColumn title="Company">
          {companyLinks.map(item => (
            <Link className="text-sm text-white/65 hover:text-[#61ff00]" key={item.label} to={item.to}>
              {item.label}
            </Link>
          ))}
        </FooterColumn>

        <div>
          <h2 className="font-['Oswald',sans-serif] text-xl font-black uppercase">Contact Us</h2>
          <div className="mt-5 grid gap-4 text-sm text-white/65">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-[#61ff00]" size={17} />
              268 St, District 1, Ho Chi Minh City
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 shrink-0 text-[#61ff00]" size={17} />
              +84 987 654 321
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 shrink-0 text-[#61ff00]" size={17} />
              hello@mateshoes.local
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1140px] flex-col justify-between gap-3 px-6 py-5 text-xs font-bold uppercase tracking-[0.12em] text-white/45 sm:flex-row sm:px-8">
          <span>Copyright 2026 Mate Shoes</span>
          <span>Privacy Policy / Terms</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div>
      <h2 className="font-['Oswald',sans-serif] text-xl font-black uppercase">{title}</h2>
      <div className="mt-5 grid gap-3">{children}</div>
    </div>
  );
}

