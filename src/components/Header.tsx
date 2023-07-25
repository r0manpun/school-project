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
      className="flex md:flex-row w-full h-28 [background-image:linear-gradient(180deg,_rgba(20,_151,_207,_0.4),_rgba(66,_19,_165,_0.7)_0%,_rgba(13,_176,_227,_0.77)_83%)] gap-4
      "
    >
      <div className="flex ml-6">
      <Image
          className="w-24 h-20 mt-2"
          width={700}
          height={640}
          src="/logo2.png"
          style={{ filter: 'brightness(100%)' }} 
          alt="logo"
          
        />
      {isSmallScreen ? (
        <>
        <ul className="flex flex-col text-white justify-center -mt-7 ml-24 relative">
          <li className="text-sm md:text-base  h-3 w-58 md:w-[284px] font-semibold">
            RAINBOW ACADEMIC HOMES
          </li>
          <li className="text-sm sm:text-[12px]">KOLPATAN-15, Pokhara</li>
          <li className="text-sm sm:text-[10px]">ESTD, 2052 B.S (1995 A.D)</li>
        </ul></>
      ): (<>
      <ul className="flex flex-col text-white justify-center -mt-4 relative">
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
      </>)
}     
      </div>
    </header>
  );
}
