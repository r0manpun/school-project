'use client';

import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiMail, FiYoutube, FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";


export default function Header(){
  const isSmallScreen = useMediaQuery('(max-width: 1310px)')
  return (
    <header
      className="flex md:flex-row w-full h-32 md:h-32 [background-image:linear-gradient(180deg,_rgba(20,_151,_207,_0.4),_rgba(66,_19,_165,_0.7)_0%,_rgba(13,_176,_227,_0.77)_83%)] gap-4
      "
    >
      <div className="flex md:justify-start">
      {isSmallScreen && (
        <>
        <Image
          className="flex absolute mt-auto -ml-12 w-48 md:-ml-12 h-30 md:w-56 md:items-center"
          width={100}
          height={40}
          src="/assets/logo.png"
          alt="logo"
          style={{filter:('invert()')}}
        />
        <ul className="flex flex-col text-white justify-center -mt-7 ml-24 md:ml-48 relative">
          <li className="text-sm lg:md:text-lg md:h-6 h-3 w-58 md:w-[284px] font-semibold sm:lg:md:text-left">
            RAINBOW ACADEMIC HOMES
          </li>
          <li className="text-sm sm:text-[12px]">KOLPATAN-15, Pokhara</li>
          <li className="text-sm sm:text-[10px]">ESTD, 2052 B.S (1995 A.D)</li>
        </ul></>
      )
}
{!isSmallScreen && (<><Image
          className="flex absolute h-30 w-56 md:ml-0 sm:justify-start md:items-center"
          width={100}
          height={40}
          src="/assets/logo.png"
          alt="logo"
        />
        <ul className="flex flex-col text-white justify-center -mt-4 ml-48 relative">
          <li className="text-lg md:h-6 md:w-[284px] font-semibold text-left">
            RAINBOW ACADEMIC HOMES
          </li>
          <li className="text-sm">KOLPATAN-15, Pokhara</li>
          <li className="text-sm">ESTD, 2052 B.S (1995 A.D)</li>
        </ul>
        <ul className="hidden md:flex flex-col md:flex-row justify-center items-center text-white gap-10 md:gap-20 ">
          <li className="flex text-base/[22px]">
            <SlLocationPin /> Pokhara, Nepal
          </li>
          <li className="flex text-base/[22px]">
            <FiMail /> rainbowacademic52@gmail.com
          </li>
          <li className="flex text-base/[22px]">
            <FiPhone /> +977-061-430577, 061-430191
          </li>
        </ul>
        </>) }       
      </div>
    </header>
  );
}
