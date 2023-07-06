import React from "react";
import Welcome from "./welcome";
import Facilities from "./facilities";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
});

export default function Home() {
  return (
    <>
      <div className={playfair.className}>
        {/* Image For Front Page */}
        <Image
          width={1440}
          height={656}
          src="/assets/DJI_0905.jpg"
          className="w-full object-cover"
          alt="slider"
        />
        {/* Welcome  */}
        <div className="flex relative justify-around mt-12">
          <div className="flex w-[70%]">
            <section className="flex flex-col items-center mx-10 lg:w-[60%] 2xl:w-[50%]">
              <div className="border-[1px] w-px h-16 bg-[#BAAEAE;]"></div>
              <h1 className="lg:text-4xl mt-8 font-medium text-[#797979] 2xl:text-3xl">
                WELCOME
              </h1>
              <h1 className="text-4xl text-[#FD7900] font-normal text-center md:mt-10">
                WHAT MAKES US <br />
                UNIQUE?
              </h1>
              <br />
              <p className="mx-auto lg:text-xl 2xl:text-[21px] text-[#4B4747] text-center font-medium lg:font-normal">
                Rainbow Academic Homes is renowned for academic<br/> excellence. What
                sets us apart is our unwavering <br/>dedication to provide a
                distinctive and inclusive <br/>educational experience. Our passionate
                educators are <br/>committed to creating innovative learning
                opportunities <br/>that inspire creativity, critical thinking, and a
                lifelong <br/>passion for learning.
                <br />
                <br />
                Emphasizing character development, we instill values of<br/> empathy,
                integrity, and resilience, empowering our <br/>students to become
                compassionate leaders and global<br/> citizens.
              </p>
            </section>
            <Image
              className="object-cover lg:w-[450px] 2xl:w-[45%] lg:max-h-[75%] 2xl:max-h-[75%] mt-20 mx-auto "
              src="/assets/welcome.jpg"
              width={411}
              height={501}
              alt="welcome"
            />
          </div>
          <aside className=" relative bg-white rounded-xl border border-black mx-auto h-[800px] lg:w-[25%] 2xl:h-[800px]">
            <div className="bg-[#fd7900] flex justify-center items-center rounded-[12px_12px_0px_0px] lg:w-full lg:h-[78px] text-[#ffffff] text-3xl">
              Important Notices
            </div>
            <ul>
              {[
                ["HOME", "/", "hello"],
                ["NEWS/EVENTS", "/events", "hello"],
                ["ACADEMICS", "/academics", "hello"],
                ["GALLERY", "/gallery", "hello"],
                ["ABOUT US", "/about", "hello"],
                ["CONTACT", "/contact", "hello"],
              ].map(([title, url, desc],index) => (
                <li key={index} className="flex justify-center sm:p-2 p-2 lg:mt-[1.1em] 2xl:mt-6 ">
                  <a
                    className="flex flex-col rounded-xl lg:w-11/12 lg:h-20  bg-zinc-300 lg:gap-8 2xl:gap-6"
                    href={url}
                  >
                    <div className="ml-3 lg:text-xl 2xl:text-lg mt-2">
                      {title}
                      <p>{desc}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
      <Facilities/>
    </>
  );
}
