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

const navItem = [
  {
    title: "home",
    slug: "",
  },
  {
    title: "news/events",
    slug: "news&events",
  },
  {
    title: "academics",
    slug: "academics",
  },
  {
    title: "gallery",
    slug: "gallery",
  },
  {
    title: "about us",
    slug: "about-us",
  },
  {
    title: "conact",
    slug: "contact",
  },
  {
    title: "admission",
    slug: "admission",
  },
];
export default function Navbar() {
  //const isSmallScreen = useMediaQuery({maxWidth:'800'});
  const isSmallScreen = useMediaQuery("(max-width: 800px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={playfair.className}>
      <nav className="relative w-full h-10 md:h-14 lg:h-16 bg-white bg-cover bg-blend-normal -top-2 flex  flex-auto flex-shrink-0 flex-grow justify-start gap-6 items-center px-12 drop-shadow-lg ">
        {isSmallScreen ? (
          <>
            <button className="ml-auto" onClick={handleToggle}>
              <MdOutlineMenu className="w-7 h-8" />
            </button>

            <div
              className={`fixed flex flex-col right-0 w-full h-screen top-10 opacity-100 bg-blue-500 transition-transform duration-500  ${
                isMenuOpen
                  ? "transform translate-x-0 "
                  : "transform translate-x-full"
              } ${isMenuOpen ? "" : "hidden"}`}
            >
              {navItem.map(({ title, slug },index) => (
                <Link
                key={index}
                  href={`/${slug}`}
                  className="uppercase flex justify-center items-center "
                >
                  <MdHome /> {title}
                </Link>
              ))}
            </div>
          </>
        ) : (
          <>
            {navItem.map((item, index) => (
              <div key={index}
                className={`w-full xl:text-lg 2xl:text-2xl ${
                  index === navItem.length - 1 ? "" : "border-r-2"
                } hover:text-[#1091C8]`}
              >
                <Link
                  href={`/${item.slug}`}
                  className="uppercase flex justify-around pr-2 xl:pr-8 active:text-[#1091C8]"
                  passHref
                >
                  {item.title}
                </Link>
              </div>
            ))}
            {/* < div className="text-sm lg:text-lg 2xl:text-2xl hover:text-[#1091C8] ">
          <Link href="/admission`" className="uppercase 2xl:pr-8 ">admission</Link>
        </div> */}
          </>
        )}
      </nav>
    </div>
  );
}
