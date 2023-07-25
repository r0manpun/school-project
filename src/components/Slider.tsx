"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

type Props = {
  slides: {
    url: string;
  }[];
};

export default function Slider({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlide = (direction: string) => {
    if (direction === "right") {
      setCurrentIndex(
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1
      );
    } else {
      setCurrentIndex(
        currentIndex === 0 ? slides.length - 1 : currentIndex - 1
      );
    }
  };

  return (
    <div className=" h-full relative">
      <button
        className="absolute text-3xl text-white top-1/2 left-1"
        onClick={() => handleSlide("left")}
      >
        <MdOutlineArrowBackIosNew />
      </button>
      {slides.map((item, index) => (
        <Image
        width={1200}
        height={1000}
          src={item.url}
          key={index}
          alt={`slider${index}`}
          className={
            currentIndex === index
              ? "rounded-2xl w-full h-full object-cover"
              : "hidden"
          }
        />
      ))}
      <button
        className="absolute text-3xl text-white top-1/2 right-1"
        onClick={() => handleSlide("right")}
      >
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
}
