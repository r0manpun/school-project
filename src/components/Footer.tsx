"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiMail, FiYoutube, FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Footer() {
  const isSmallScreen = useMediaQuery("(max-width:420px)");
  return (
    <footer className="mt-6 xl:mt-24">
      <div className="relative w-full h-[190px] xl:mt-14 lg:h-[380px]">
        <Image
          width={1400}
          height={800}
          src="/assets/home/footer.png"
          className="absolute w-full h-full object-cover bg-white opacity-30"
          alt="footer"
        />
        <div className="absolute top-0 lg:top-[13%] lg:left-[12%] w-full  xl:w-[30%] mx-auto">
          <div className="flex gap-3 ml-16 mb-2 pl-3">
            <Image
              className=" w-20 ml-5 mt-4 "
              src="/logo2.png"
              width={1000}
              height={800}
              alt="logo"
            />
            <div className="flex flex-col mt-8">
              <label className="top-6  xl:top-8  text-sm lg:text-xl font-bold">
                RAINBOW ACADEMIC HOMES
              </label>
              <label className=" top-11 lg:top-14  text-[9px] lg:font-semibold">
                POKHARA, NEPAL
              </label>
            </div>
          </div>
          <hr className="w-[220px] lg:w-[70%] border-[#ea9443] border-[1.5px] ml-20" />
          <div className="flex flex-row flex-wrap xl:grid gap-2 xl:justify-center text-[10px] lg:text-base text-center mt-3 xl:mt-5 xl:-ml-12">
            <div className="flex items-center gap-1 font-semibold ">
              <SlLocationPin className="w-3 xl:w-5 xl:h-5" />
              KOLPATAN-15,POKHARA,NEPAL<p className="xl:hidden">|</p>
            </div>
            <div className="flex justify-center items-center gap-1 font-semibold ">
              <FiPhone className="w-3 xl:w-5 xl:h-5" /> TEL: +977-061-430577,
              061-430191<p className="xl:hidden">|</p>
            </div>
            <div className="flex items-center gap-1 font-semibold ">
              <FiMail className="w-3 xl:w-5 xl:h-5" />
              rainbowacademic52@gmail.com<p className="xl:hidden">|</p>
            </div>
          </div>
        </div>
        {!isSmallScreen && (
          <>
            <div className="flex absolute text-center top-[30%] right-[20%] justify-between ml-40 gap-10 p-10">
              <ul>
                <li className="text-lg font-semibold">ABOUT US</li>
                <li className="text-sm">Code of Conduct</li>
                <li className="text-sm">Faculty</li>
                <li className="text-sm">Events</li>
              </ul>
              <ul>
                <li className="text-sm xl:text-lg font-semibold">GALLERY</li>
                <li className="text-sm">Photos</li>
                <li className="text-sm">Videos</li>
                <li className="text-sm">
                  Extra Curricular <br />
                  Activities
                </li>
              </ul>
            </div>
            <hr className="absolute bottom-[88px] w-[220px] lg:w-[20%] border-[#ea9443] border-[1.5px] right-[19%]" />
          </>
        )}
        <div className="flex absolute justify-around w-[100px]  xl:bottom-[40px] xl:right-[21%] lg:w-[296px] ">
          <RiFacebookCircleLine className="w-7 h-7" />
          <FiYoutube className="w-7 h-7" />
        </div>
      </div>

      <div
        className="text-center my-8 text-[#959595] text-[10px]"
        style={sans.style}
      >
        Copyright © 2023 RAINBOW ACADEMIC HOMES • All Rights Reserved
      </div>
    </footer>
  );
}
