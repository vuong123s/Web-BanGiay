import { Link } from "react-router";
import { useCart } from "../context/CartContext";

// Cart icon
function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 18.333a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM15.833 18.333a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM1.667 1.667h2.5l1.333 6.666a1.667 1.667 0 0 0 1.667 1.334h8.166a1.667 1.667 0 0 0 1.667-1.334l1.333-7H5.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


// User icon
function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.667 17.5v-1.667a3.333 3.333 0 0 0-3.334-3.333H6.667a3.333 3.333 0 0 0-3.334 3.333V17.5M10 9.167A3.333 3.333 0 1 0 10 2.5a3.333 3.333 0 0 0 0 6.667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Facebook icon
function FacebookIcon() {
  return (
    <svg width="10" height="17" viewBox="0 0 10 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.39 17V9.25h2.6l.39-3.02H6.39V4.31c0-.87.24-1.47 1.5-1.47h1.6V.12C9.17.08 8.23 0 7.13 0 4.84 0 3.3 1.39 3.3 3.95v2.28H.7v3.02h2.6V17h3.09Z" />
    </svg>
  );
}

// Instagram icon
function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 0C5.1 0 4.87.01 4.12.04 3.37.08 2.87.2 2.43.38a3.47 3.47 0 0 0-1.26.82 3.47 3.47 0 0 0-.82 1.26C.17 2.87.05 3.37.02 4.12 0 4.87 0 5.1 0 7s.01 2.13.04 2.88c.03.75.15 1.25.33 1.69.18.47.43.86.82 1.26.4.39.79.64 1.26.82.44.18.94.3 1.69.33.75.03.98.04 2.88.04s2.13-.01 2.88-.04c.75-.03 1.25-.15 1.69-.33.47-.18.86-.43 1.26-.82.39-.4.64-.79.82-1.26.18-.44.3-.94.33-1.69.03-.75.04-.98.04-2.88s-.01-2.13-.04-2.88c-.03-.75-.15-1.25-.33-1.69a3.47 3.47 0 0 0-.82-1.26A3.47 3.47 0 0 0 11.57.38C11.13.2 10.63.08 9.88.04 9.13 0 8.9 0 7 0Zm0 1.26c1.87 0 2.1.01 2.84.04.68.03 1.05.14 1.3.24.33.13.56.28.8.52.24.24.39.47.52.8.1.25.21.62.24 1.3.03.74.04.97.04 2.84 0 1.87-.01 2.1-.04 2.84-.03.68-.14 1.05-.24 1.3-.13.33-.28.56-.52.8-.24.24-.47.39-.8.52-.25.1-.62.21-1.3.24-.74.03-.97.04-2.84.04-1.87 0-2.1-.01-2.84-.04-.68-.03-1.05-.14-1.3-.24a2.16 2.16 0 0 1-.8-.52 2.16 2.16 0 0 1-.52-.8c-.1-.25-.21-.62-.24-1.3-.03-.74-.04-.97-.04-2.84 0-1.87.01-2.1.04-2.84.03-.68.14-1.05.24-1.3.13-.33.28-.56.52-.8.24-.24.47-.39.8-.52.25-.1.62-.21 1.3-.24.74-.03.97-.04 2.84-.04Z" />
      <path d="M7 9.33a2.33 2.33 0 1 1 0-4.66 2.33 2.33 0 0 1 0 4.66Zm0-5.93a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm4.58-.14a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.68 0Z" />
    </svg>
  );
}



// Twitter icon
function TwitterIcon() {
  return (
    <svg width="16" height="13" viewBox="0 0 16 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 1.54a6.58 6.58 0 0 1-1.89.52A3.29 3.29 0 0 0 15.55.24a6.58 6.58 0 0 1-2.08.8A3.28 3.28 0 0 0 7.8 4.03 9.32 9.32 0 0 1 1.11.6a3.28 3.28 0 0 0 1.01 4.38A3.27 3.27 0 0 1 .64 4.5v.04a3.28 3.28 0 0 0 2.63 3.22 3.29 3.29 0 0 1-1.48.06 3.28 3.28 0 0 0 3.06 2.28A6.58 6.58 0 0 1 0 11.54a9.28 9.28 0 0 0 5.03 1.47c6.04 0 9.34-5 9.34-9.34l-.01-.42A6.68 6.68 0 0 0 16 1.54Z" />
    </svg>
  );
}

// Scroll-to-top arrow icon
function ArrowUpIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.407 4.79 7.72.103a.316.316 0 0 0-.44 0L2.593 4.79a.317.317 0 0 0 0 .44.317.317 0 0 0 .44 0L7.192 1.07v13.623a.308.308 0 0 0 .308.307.308.308 0 0 0 .307-.307V1.07l4.16 4.16a.317.317 0 0 0 .44 0 .317.317 0 0 0 0-.44Z" fill="black" />
    </svg>
  );
}

export default function SidebarNav() {
  const { toggleCart } = useCart();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Right Sidebar - VerticalBorder */}
      <div className="fixed right-0 top-0 z-20 hidden h-screen w-[100px] flex-col items-center justify-between bg-white/85 backdrop-blur-xl lg:flex" style={{ borderLeft: "0.8px solid #e4e4e4" }}>

        {/* Top section: Cart + Wishlist + User */}
        <div className="flex flex-col items-center pt-[20px]">
          {/* Cart Button */}
          <div className="pb-[30px]">
            <button
              onClick={toggleCart}
              className="relative flex items-center justify-center min-h-[46px] min-w-[46px] rounded-full cursor-pointer bg-transparent border-none"
            >
              <div className="flex items-center justify-center px-[13px] py-[5px]">
                <CartIcon />
              </div>
              <div className="absolute bg-[#61ff00] right-[-3px] top-[-5px] rounded-full w-[18px] h-[18px] flex items-center justify-center">
                <span className="text-[10px] font-bold text-black">0</span>
              </div>
            </button>
          </div>



          {/* User/Account Button */}
          <div className="pb-[10px]">
            <Link
              to="/account"
              className="flex items-center justify-center min-h-[46px] min-w-[46px] rounded-full no-underline text-black"
            >
              <div className="flex items-center justify-center px-[13px] py-[5px]">
                <UserIcon />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom section: Social Media Icons */}
        <div className="flex flex-col items-center pb-[20px] gap-[10px]">
          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
            className="bg-[#eaeaea] flex items-center justify-center rounded-full w-[30px] h-[30px] text-[#333] hover:bg-[#61ff00] hover:text-black transition-colors duration-300">
            <FacebookIcon />
          </a>
          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="bg-[#eaeaea] flex items-center justify-center rounded-full w-[30px] h-[30px] text-[#333] hover:bg-[#61ff00] hover:text-black transition-colors duration-300">
            <InstagramIcon />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
            className="bg-[#eaeaea] flex items-center justify-center rounded-full w-[30px] h-[30px] text-[#333] hover:bg-[#61ff00] hover:text-black transition-colors duration-300">
            <TwitterIcon />
          </a>
        </div>
      </div>

      {/* Scroll to Top Button - Bottom right, near navbar */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-[30px] right-[120px] z-30 hidden h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-full border-none bg-white lg:flex"
        style={{
          boxShadow: "inset 0px 0px 0px 2px rgba(34,34,34,0.2)",
        }}
        aria-label="Scroll to top"
      >
        {/* Green circular progress ring */}
        <svg className="absolute inset-0 w-[56px] h-[56px]" viewBox="0 0 56 56" fill="none">
          <circle
            cx="28" cy="28" r="26.5"
            stroke="#0DB22A"
            strokeWidth="2"
            strokeDasharray="166.5"
            strokeDashoffset="0"
          />
        </svg>
        <ArrowUpIcon />
      </button>
    </>
  );
}
