import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="grid min-h-[70vh] place-items-center bg-white px-4 py-16 text-center text-[#111]">
      <div>
        <p className="font-['Oswald',sans-serif] text-8xl font-black">404</p>
        <h1 className="mt-3 font-['Oswald',sans-serif] text-4xl font-black uppercase">Page not found</h1>
        <p className="mx-auto mt-4 max-w-lg leading-7 text-[#666]">
          The page you are looking for may have moved, or the link is no longer available.
        </p>
        <Link to="/" className="mt-8 inline-flex items-center gap-3 rounded-[6px] bg-black px-7 py-4 text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black">
          Back to home
          <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  );
}
