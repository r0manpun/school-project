"use client";
import React, { useEffect, useState } from "react";
import Facilities from "./facilities";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

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
    ["CONTACT", "/contact", "hello"],
  ];

  const [page, setPage] = useState(1);
  const [noticesPerPage, setNoticesPerPage] = useState(5);

  useEffect(() => {
    function handleResize() {
      const screenSize = window.innerWidth;
      setNoticesPerPage(screenSize > 1530 ? 6 : 5);
    }

    handleResize(); // Initial call to set the initial value
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const lastIndex = page * noticesPerPage;
  const firstIndex = lastIndex - noticesPerPage;

  const notices = data.slice(firstIndex, lastIndex);

  const npage = Math.ceil(data.length / noticesPerPage);

  const numbers: number[] = Array.from(
    { length: npage },
    (_, i) => i + 1
  ).slice(0);

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
          height={1440}
          src="/assets/DJI_0905.jpg"
          className="w-full object-cover p-2"
          alt="homepage"
        />
        {/* Welcome  */}
        <div className="h-full sm:flex relative justify-around mt-4 p-6 xl:p-10 2xl:p-12">
          <div className="lg:flex sm:w-4/6 lg:w-4/5 2xl:w-10/12">
            <section className="flex flex-col items-center xl:w-3/5 2xl:w-2/4 p-2 xl:p-0">
              <div className="border-[1px] w-px h-10 xl:h-16 bg-[#BAAEAE]"></div>
              <h1 className="mt-3 2xl:mt-4 font-medium text-[#797979] text-base xl:text-xl  2xl:text-3xl">
                WELCOME
              </h1>
              <h1 className="text-xl xl:text-3xl 2xl:text-4xl text-[#FD7900] font-normal text-center mt-2 xl:mt-6">
                WHAT MAKES US <br />
                UNIQUE?
              </h1>
              <br />
              <p className="mx-auto text-sm xl:text-base 2xl:text-xl text-[#4B4747] text-center sm:px-6 lg:p-0 2xl:p-2">
                Rainbow Academic Homes is renowned for academic excellence. What
                sets us apart is our unwavering dedication to provide a
                distinctive and inclusive educational experience. Our passionate
                educators are committed to creating innovative learning
                opportunities that inspire creativity, critical thinking, and a
                lifelong passion for learning.
                <br/><br/>
                Emphasizing character development, we instill values of empathy,
                integrity, and resilience, empowering our students to become
                compassionate leaders and global citizens.
              </p>
            </section>
            <Image
              className=" object-cover my-auto w-[90%] sm:h-[300px] lg:w-1/2 lg:h-3/4 2xl:w-1/2 mx-auto p-3 2xl:p-4 "
              src="/assets/welcome.jpg"
              width={1200}
              height={1100}
              alt="welcome"
            />
          </div>
          <aside className=" relative rounded-xl border border-black mx-auto w-11/12 sm:w-2/5 lg:w-2/6 h-[510px] xl:h-[600px] 2xl:h-[726px] my-auto lg:mt-4">
            <div className="bg-[#fd7900] flex justify-center items-center rounded-[12px_12px_0px_0px] w-full h-[50px] lg:h-14 2xl:h-[78px] text-[#ffffff] text-xl xl:text-2xl 2xl:text-3xl">
              Important Notices
            </div>
            <ul>
              {notices.map(([title, url, desc], index) => (
                <li
                  key={index}
                  className="flex justify-center p-2 "
                >
                  <Link
                    className="flex flex-col rounded-xl w-[95%] lg:w-11/12 h-16 xl:h-20 bg-zinc-100 shadow-md "
                    href={url}
                  >
                    <div className="ml-3 xl:text-xl 2xl:text-lg mt-2 font-extrabold">
                      {title}
                      <p className="text-base xl:text-xl font-normal">{desc}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex absolute bottom-7 w-full justify-center">
              <button className="border" onClick={prevPage} disabled={page === 1}>
                ⬅️
              </button>
              {numbers.map((n) => (
                <div key={n} className={`${page === n ? "active " : ""} border w-6`}>
                  <a href="#" onClick={() => ChangePage(n)} className="flex justify-center">
                    {n}
                  </a>
                </div>
              ))}
              <button className="border" onClick={nextPage} disabled={page === npage}>
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
