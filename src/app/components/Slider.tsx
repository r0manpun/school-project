"use client";

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
    // if (direction === "left") {
    //   setCurrentIndex((prevIndex) =>
    //     prevIndex > 0 ? prevIndex - 1 : slides.length - 1
    //   );
    // } else {
    //   setCurrentIndex((prevIndex) =>
    //     prevIndex < slides.length - 1 ? prevIndex + 1 : 0
    //   );
    // }
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
        <img
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
    // <div className="h-full relative">
    //   <button className="absolute text-4xl top-1/2 transform -translate-y-1/2 z-10" style={{left:'4px'}}  onClick={() => handleSlide("left")}>
    //     <MdOutlineArrowBackIosNew />
    //   </button>
    //   <div className="flex h-full transition-all duration-1500 ease-linear" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
    //     {slides.map((item, index) => (
    //       <div
    //         className={`flex-shrink-0 w-full h-full  ${
    //           index === currentIndex ? "opacity-100" : "opacity-0"
    //         }`}
    //         key={index}
    //       >
    //         <img className="w-full h-full border-2 rounded-3xl border-gray-400 object-cover" src={item.url} alt={`slider-${index}`} />
    //       </div>
    //     ))}
    //     </div>
    //   <button className="absolute text-4xl top-1/2 transform -translate-y-1/2 z-10" style={{right:'4px'}} onClick={() => handleSlide("right")}>
    //     <MdOutlineArrowForwardIos />
    //   </button>
    // </div>
  );
}

// {`flex-shrink-0 w-full h-full object-cover ${
//   index === currentIndex ? "opacity-100" : "opacity-0"
// } transition-opacity duration-400`}
