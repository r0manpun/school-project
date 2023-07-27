"use client";
import React, { useState } from "react";
import Facilities from "./facilities";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
});

export default function Home() {
  const data = [
    ["HOME", "/", "hello"],
    ["NEWS/EVENTS", "/events", "hello"],
    ["ACADEMICS", "/academics", "hello"],
    ["GALLERY", "/gallery", "hello"],
    ["ABOUT US", "/about", "hello"],
    ["CONTACT", "/contact", "hello"],
  ];

  const [page, setPage] = useState(1);
  const noticesPerPage = 4;
  const lastIndex = page * noticesPerPage;
  const firstIndex = lastIndex - noticesPerPage ;

  const notices = data.slice(firstIndex, lastIndex);

  const npage = Math.ceil(data.length / noticesPerPage);

  const numbers: number[] = Array.from({ length: npage }, (_,i) => i+1).slice(0);

  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => setPage((prev) => prev - 1);

  function ChangePage(id: number) {
    setPage(id);
  }

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
        <div className="lg:flex relative justify-around mt-4 lg:mt-12">
          <div className="lg:flex lg:w-[70%]">
            <section className="flex flex-col items-center lg:mx-10 lg:w-[60%] 2xl:w-[50%]">
              <div className="border-[1px] w-px h-10 lg:h-16 bg-[#BAAEAE;]"></div>
              <h1 className="mt-2 lg:mt-8 font-medium text-[#797979] text-base lg:text-4xl 2xl:text-3xl">
                WELCOME
              </h1>
              <h1 className="text-xl lg:text-4xl text-[#FD7900] font-normal text-center md:mt-10">
                WHAT MAKES US <br/>
                UNIQUE?
              </h1>
              <br />
              <p className="mx-auto text-sm lg:text-xl 2xl:text-[21px] text-[#4B4747] text-center font-medium lg:font-normal">
                Rainbow Academic Homes is renowned for academic
                <br className="hidden " /> excellence. What sets us apart is our
                unwavering <br className="hidden " />
                dedication to provide a distinctive and inclusive
                <br className="hidden " />
                educational experience. Our passionate educators are
                <br className="hidden " />
                committed to creating innovative learning opportunities
                <br className="hidden " />
                that inspire creativity, critical thinking, and a lifelong
                <br className="hidden " />
                passion for learning.
                <br className="hidden " />
                <br className="hidden " />
                Emphasizing character development, we instill values of
                <br className="hidden " /> empathy, integrity, and resilience,
                empowering our <br className="hidden " />
                students to become compassionate leaders and global
                <br className="hidden " /> citizens.
              </p>
            </section>
            <Image
              className=" object-cover mt-4 w-[90%] h-[300px] lg:w-[450px] lg:h-[75%] 2xl:w-[45%] 2xl:h-[75%] lg:mt-20 mx-auto "
              src="/assets/welcome.jpg"
              width={1000}
              height={800}
              alt="welcome"
            />
          </div>
          <aside className=" relative bg-white rounded-xl border border-black mx-auto w-[93%] h-[500px] lg:h-[800px] lg:w-[25%] 2xl:h-[800px] mt-4">
            <div className="bg-[#fd7900] flex justify-center items-center rounded-[12px_12px_0px_0px] w-full h-[50px] lg:h-[78px] text-[#ffffff] text-xl lg:text-3xl">
              Important Notices
            </div>
            <ul>
              {notices.map(([title, url, desc], index) => (
                <li
                  key={index}
                  className="flex justify-center sm:p-2 p-2 lg:mt-[1.1em] 2xl:mt-6 "
                >
                  <a
                    className="flex flex-col rounded-xl w-[95%] lg:w-11/12 lg:h-20  bg-zinc-300 lg:gap-8 2xl:gap-6"
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

            <div className="flex  absolute bottom-4 w-full justify-center">
              <button onClick={prevPage} disabled={page === 1}>
                ⬅️
              </button>
              {numbers.map((n) => (
                <div key={n} className={`${page === n ? "active " : ""}`}>
                  <a href="#" onClick={() => ChangePage(n)}>
                    {n}
                  </a>
                </div>
              ))}
              <button onClick={nextPage} disabled={page === npage}>
                ➡️
              </button>
            </div>
          </aside>
        </div>
      </div>
      <Facilities />
    </>
  );
}
