'use client';

import React from "react";
import { RiFacebookCircleLine, RiFacebookCircleFill } from "react-icons/ri";
import { FiMail, FiYoutube, FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";


export default function Header(){
  const isSmallScreen = useMediaQuery('(max-width: 1310px)')
  return (
    // bg-gradient-to-b from-violet-700 via-indigo-400 to-sky-300
    <header
      className="flex md:flex-row w-full h-24 md:h-28 [background-image:linear-gradient(180deg,_rgba(20,_151,_207,_0.4),_rgba(66,_19,_165,_0.7)_0%,_rgba(13,_176,_227,_0.77)_83%)] gap-4
      "
    >
      <div className="flex w-full ml-3 lg:ml-14">
      <Image
          className="w-20 h-20 xl:w-24 xl:h-[88px] mt-1 md:mt-2"
          width={800}
          height={690}
          src="/logo2.png"
          style={{ filter: 'brightness(450%)' }} 
          alt="logo"
          
        />
      {isSmallScreen ? (
        <>
        <ul className="flex flex-col text-white justify-center -mt-5 ml-2 relative">
        <li className="text-sm lg:text-lg h-6 md:w-[284px] font-semibold text-left">
          RAINBOW ACADEMIC HOMES
        </li>
          <li className="text-[12px] lg:text-base">KOLPATAN-15, Pokhara</li>
        <li className="text-[12px] lg:text-base">ESTD, 2052 B.S (1995 A.D)</li>
        </ul></>
      ): (<>
       <ul className="flex flex-col text-white justify-center -mt-5 ml-2 relative">
        <li className="text-sm lg:text-lg h-6 w-[284px] font-semibold text-left">
          RAINBOW ACADEMIC HOMES
        </li>
          <li className="text-[12px] lg:text-base">KOLPATAN-15, Pokhara</li>
        <li className="text-[12px] lg:text-base">ESTD, 2052 B.S (1995 A.D)</li>
        </ul>
      <ul className="hidden md:flex items-center 2xl:text-lg  text-white w-full justify-evenly ">
        <li className="flex items-center gap-1">
          <SlLocationPin className="text-xl 2xl:text-3xl"/> Pokhara, Nepal
        </li>
        <li className="flex items-center gap-1" >
          <FiMail className="text-xl 2xl:text-3xl"/> rainbowacademic52@gmail.com
        </li>
        <li className="flex items-center gap-1">
          <FiPhone className="text-xl 2xl:text-3xl"/> +977-061-430577, 061-430191
        </li>
        <div className="border-r h-14 my-auto"/>
        <RiFacebookCircleFill className="text-3xl 2xl:text-5xl"/>
        <FiYoutube className="text-3xl 2xl:text-5xl"/>
      </ul>
      

      </>)
}     
      </div>
    </header>
  );
}
