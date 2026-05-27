import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import logoMate from "../../imports/TrangChủ/89309c4327d643be9d6885f84d12f69b214a62e7.png";

export default function RegisterPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#f6f6f6] px-4 py-10 text-[#111]">
      <div className="w-full max-w-md rounded-[8px] border border-black/10 bg-white p-6 shadow-sm">
        <Link to="/" className="mb-8 flex justify-center">
          <img src={logoMate} alt="Mate Shoes" className="h-7 w-auto" />
        </Link>
        <p className="text-sm font-black uppercase text-[#0b8f24]">Join the store</p>
        <h1 className="mt-2 font-['Oswald',sans-serif] text-4xl font-black uppercase">Create account</h1>
        <div className="mt-6 space-y-4">
          <label className="block text-sm font-black uppercase">
            Full name
            <input className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black" />
          </label>
          <label className="block text-sm font-black uppercase">
            Email
            <input type="email" className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black" />
          </label>
          <label className="block text-sm font-black uppercase">
            Password
            <input type="password" className="mt-2 h-12 w-full rounded-[6px] border border-black/10 px-4 text-base font-normal outline-none focus:border-black" />
          </label>
        </div>
        <button className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-[6px] bg-black text-sm font-black uppercase text-white hover:bg-[#61ff00] hover:text-black">
          Create account
          <ArrowRight size={17} />
        </button>
        <p className="mt-5 text-center text-sm text-[#666]">
          Already have an account?{" "}
          <Link to="/login" className="font-black text-black underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
