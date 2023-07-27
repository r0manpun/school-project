"use client";
import React, { useState } from "react";
import Image from "next/image";

const img = [
  "/assets/gallery/parentsday/p1.jpg",
  "/assets/gallery/parentsday/p2.jpg",
  "/assets/gallery/parentsday/p3.jpg",
  "/assets/gallery/parentsday/p4.jpg",
  "/assets/gallery/parentsday/p5.jpg",
  "/assets/gallery/parentsday/p6.jpg",
  "/assets/gallery/environment/1.jpg",
  "/assets/gallery/environment/2.jpg",
  "/assets/gallery/environment/3.jpg",
  "/assets/gallery/environment/4.jpg",
  "/assets/gallery/environment/5.jpg",
  "/assets/gallery/environment/6.jpg",
  "/assets/gallery/environment/7.jpg",
  "/assets/gallery/environment/8.jpg",
  "/assets/gallery/environment/9.jpg",
  "/assets/gallery/environment/10.jpg",
  "/assets/gallery/environment/11.jpg",
  "/assets/gallery/environment/12.jpg",

  "/assets/gallery/parentsday/p1.jpg",
  "/assets/gallery/parentsday/p2.jpg",
  "/assets/gallery/parentsday/p3.jpg",
  "/assets/gallery/parentsday/p4.jpg",
  "/assets/gallery/parentsday/p5.jpg",
  "/assets/gallery/parentsday/p6.jpg",
  "/assets/gallery/environment/1.jpg",
  "/assets/gallery/environment/2.jpg",
  "/assets/gallery/environment/3.jpg",
  "/assets/gallery/environment/4.jpg",
  "/assets/gallery/environment/5.jpg",
  "/assets/gallery/environment/6.jpg",
  "/assets/gallery/environment/7.jpg",
  "/assets/gallery/environment/8.jpg",
  "/assets/gallery/environment/9.jpg",
  "/assets/gallery/environment/10.jpg",
  "/assets/gallery/environment/11.jpg",
  "/assets/gallery/environment/12.jpg",
];

export default function Page() {
  const [page, setPage] = useState(1);

  const recordsPerPage = 9;
  const lastIndex = page * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = img.slice(firstIndex, lastIndex);

  const npage = Math.ceil(img.length / recordsPerPage);

  // const numbers: number[] =[...Array(npage).keys()].slice(1);

  const numbers: number[] = Array.from(
    { length: npage },
    (_, i) => i+1
  ).slice(0);

  const content = (
    <div className=" max-w-[2000px] w-[80%] mx-auto flex flex-wrap place-content-center gap-10 mt-8 group">
      {records.map((path) => (
        <div key={path} className="lg:w-[425px] lg:h-[285px] ">
          <Image
            src={path}
            width={1000}
            height={800}
            alt="parents day"
            className="w-full h-full object-cover cursor-pointer group-hover:backdrop-grayscale bg-white  hover:backdrop-filter-none"
          />
        
        </div>
      ))}
    </div>
  );

  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => setPage((prev) => prev - 1);

  function ChangePage(id: number) {
    setPage(id);
  }

  return (
    <>
      <div className="flex justify-center items-center text-4xl mt-8 ">
        Parent&apos;s Day
      </div>
      <hr className="w-[220px] lg:w-[13%] border-black mx-auto mt-2" />
      {content}
      <nav className="mt-10 flex justify-center gap-4 ">
        <button onClick={prevPage} disabled={page === 1}>
          Prev Page
        </button>
        {numbers.map((n) => (
          <div key={n} className={`${page === n ? "active " : ""}`}>
            <a href="#" className="" onClick={() => ChangePage(n)}>
              {n}
            </a>
          </div>
        ))}
        <button onClick={nextPage} disabled={page === npage}>
          Next Page
        </button>
      </nav>
    </>
  );
}
