import React from "react";
import Image from "next/image";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiMail, FiYoutube, FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Footer() {
  return (
    <>
      <footer className="relative w-full  mt-14  bg-[url('/assets/home/footer1.jpg')] lg:h-[380px]">
        <div className=" bg-white bg-opacity-70 w-full h-full">
          <div className="absolute top-[13%] left-[12%] w-[30%] mx-auto">
            <div >
              <Image
                className="relative -ml-4 mt-2"
                src="/assets/logo.png"
                width={205}
                height={98}
                style={{ filter: "invert" }}
                alt="logo"
              />
              <label className="absolute top-8 left-32 text-xl font-bold">RAINBOW ACADEMIC HOMES</label>
              <label className="absolute top-14 left-32 text-[9px] font-semibold">POKHARA, NEPAL</label>
            </div>
            <hr className="w-[220px] lg:w-[70%] border-[#ea9443] border-[1.5px] ml-20" />
            <div className="grid gap-2 justify-center mt-5 -ml-12">
            <div className="flex items-center gap-1 text-base font-semibold "><SlLocationPin className="w-5 h-5"/>KOLPATAN-15,POKHARA,NEPAL</div>
            <div className="flex justify-center items-center gap-1 text-base font-semibold "><FiPhone className="w-5 h-5"/> TEL: +977-061-430577, 061-430191</div>
            <div className="flex items-center gap-1 text-base font-semibold "><FiMail className="w-5 h-5"/> rainbowacademic52@gmail.com</div>
            </div>
          </div>
          <div className="flex absolute text-center top-[30%] right-[20%] justify-between ml-40 gap-10 p-10">
            <ul>
              <li className="text-lg font-semibold">ABOUT US</li>
              <li className="text-sm">Code of Conduct</li>
              <li className="text-sm">Faculty</li>
              <li className="text-sm">Events</li>
            </ul>
            <ul>
              <li className="text-lg font-semibold">GALLERY</li>
              <li className="text-sm">Photos</li>
              <li className="text-sm">Videos</li>
              <li className="text-sm">
                Extra Curricular <br />
                Activities
              </li>
            </ul>
          </div>
          <hr className="absolute bottom-[88px] w-[220px] lg:w-[20%] border-[#ea9443] border-[1.5px] right-[19%]" />
        </div>
        <div className="flex absolute justify-around bottom-[40px] right-[21%] lg:w-[300px] ">
              <RiFacebookCircleLine className="w-7 h-7"/>
              <FiYoutube className="w-7 h-7"/>
            </div>
      </footer>
      <div className="text-center my-8 text-[#959595]" style={sans.style}>
        Copyright © 2023 RAINBOW ACADEMIC HOMES • All Rights Reserved
      </div>
    </>
  );
}
