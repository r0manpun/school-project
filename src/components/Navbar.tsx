"use client";

import React, { useState } from "react";
import { Playfair_Display } from "next/font/google";
//import { useMediaQuery } from "react-responsive";
import { MdHome, MdOutlineMenu } from "react-icons/md";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal"],
});

export default function Navbar() {
  //const isSmallScreen = useMediaQuery({maxWidth:'800'});
  const isSmallScreen = useMediaQuery('(max-width: 800px)')
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={playfair.className}>
      <nav className="relative w-full h-16 lg:h-20 bg-[url(https://file.rendit.io/n/Qgb95NPNO8bIiZPFnZv6.svg)] bg-cover bg-50%_50% bg-blend-normal -top-2 flex  flex-row flex-auto flex-shrink-0 flex-grow justify-start gap-6 items-center px-12 drop-shadow-lg ">
        {isSmallScreen && (<div className="flex items-center justify-between w-full">
          <div className="ml-auto">
          <button className="flex" onClick={handleToggle}>
              <MdOutlineMenu className="w-7 h-8" />
            </button>
          </div>
          {isMenuOpen&& (<div className={`absolute flex flex-col items-center top-14 right-0 w-2/5 h-screen bg-slate-300 transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0':'translate-x-full'}`}>
            <Link href="/home"><MdHome/> HOME </Link>
            <h1>NEWS/EVENTS</h1>
            <h1>ACADEMICS</h1>
            <h1>Home</h1>
            <h1>Home</h1>
          </div>)}
        </div> )}
        {!isSmallScreen &&(<>
      <div className="xl:text-3xl md:text-sm md:font-semibold lg:font-bold text-black md:mr-8 items-center relative w-1/6 lg:h-1/6 hover:text-[#1091C8] ">
        <Link href="/">HOME</Link>
      </div>
      <div className="border-solid border-[#bcb9b9] md:mr-6 relative w-px md:shrink-0 h-6 md:h-9 border-r border-l-0 border-y-0 md:mt-2" ></div>
      <div className="md:text-lg text-sm font-semibold text-black relative w-1/6 lg:h-1/6 hover:text-[#1091C8]">
        <Link href="/news&events">NEWS/EVENTS</Link>
      </div>
      <div className="border-solid border-[#bcb9b9] mr-10 relative w-px shrink-0 h-6 md:h-9 border-r borderl-0 bordery-0 mt-2" />
      <div className="md:text-lg text-sm font-semibold text-black mr-4 relative w-1/6 lg:h-1/6 hover:text-[#1091C8]">
        <Link href='/academics'>ACADEMICS</Link>
      </div>
      <div className="border-solid border-[#bcb9b9] mr-8 relative w-px shrink-0 h-6 md:h-9  border-r borderl-0 bordery-0 mt-2" />
      <div className="md:text-lg text-sm font-semibold text-black mr-4 relative w-1/6 lg:h-1/6 hover:text-[#1091C8]">
        GALLERY
      </div>
      <div className="border-solid border-[#bcb9b9] mr-6 relative w-px shrink-0 h-6 md:h-9  border-r borderl-0 bordery-0 mt-2" />
      <div className="md:text-lg text-sm font-semibold text-black mr-2 relative w-1/6 lg:h-1/6 hover:text-[#1091C8]">
        <Link href="/about-us">ABOUT US</Link>
      </div>
      <div className="border-solid border-[#bcb9b9] mr-8 relative w-px shrink-0 h-6 md:h-9  border-r borderl-0 bordery-0 mt-2" />
      <div className="md:text-lg text-sm font-semibold text-black mr-3 relative w-1/6 lg:h-1/6 hover:text-[#1091C8]">
      <Link href='/contact'>CONTACT</Link>
      </div>
      <div className="border-solid border-[#bcb9b9] mr-8 relative w-px shrink-0 h-6 md:h-9  border-r borderl-0 bordery-0 mt-2" />
      <div className="md:text-lg text-sm  font-semibold text-black relative w-1/6 lg:h-1/6 hover:text-[#1091C8]">
        ADMISSION
      </div>
      </>
      )
    }
   </nav>
   </div>
  );
}
