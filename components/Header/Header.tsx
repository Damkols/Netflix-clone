import { useEffect, useState } from "react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Header = () => {
 const [isScrolled, setIsScrolled] = useState(false);
 useEffect(() => {
  const hamdleScroll = () => {
   if (window.scrollY > 0) {
    setIsScrolled(true);
   } else {
    setIsScrolled(false);
   }
  };
  window.addEventListener("scroll", hamdleScroll);

  return () => {
   window.removeEventListener("scroll", hamdleScroll);
  };
 }, [isScrolled]);
 return (
  <header className={`${isScrolled && "bg-[#141414]"}`}>
   <div className="flex items-center space-x-2 md:spacing-x-10 ">
    <img
     src="https://rb.gy/ulxxee"
     width={100}
     height={100}
     alt="netflix logo"
     className="cursor-pointer object-contain"
    />

    <ul className="hidden space-x-4 md:flex ">
     <li className="headerLink">Home</li>
     <li className="headerLink">Tv Shows</li>
     <li className="headerLink">Movies</li>
     <li className="headerLink">New & Popular</li>
     <li className="headerLink">My List</li>
    </ul>
   </div>

   <div className="flex items-center space-x-4 font-light">
    <MagnifyingGlassIcon className="hidden sm:inline h-6 w-6" />
    <p className="hidden lg:inline">Kids</p>
    <BellIcon className="sm:inline h-6 w-6" />
    <Link href="/account">
     <img
      src="https://rb.gy/g1pwyx"
      alt=""
      className="cursor-pointer rounded"
     />
    </Link>
   </div>
  </header>
 );
};

export default Header;
