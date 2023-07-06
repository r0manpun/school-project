import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div className="flex justify-center items-center gap-3 md:text-xl lg:text-2xl xl:text-5xl ">
        <hr className=" border-black w-20" />
        Everlasting Memories: Explore Our School Gallery
        <hr className="border-black w-20" />
      </div>
      <h1 className="lg:text-2xl xl:text-5xl text-center mt-4 font-medium">
        Where
      </h1>
      <h1 className="lg:text-2xl xl:text-5xl text-center mt-2 font-medium">
        "Every picture tells a story"
      </h1>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-3 gap-y-20">
        <div className="flex relative w-[250px] h-[200px] xl:w-[400px] xl:h-[350px] border ">
          <img
            src="assets/gallery/sports.jpg"
            className=" w-full h-full object-cover"
          />
          <h1 className=" absolute self-center left-1/4  xl:left-24  text-cyan-500 text-2xl">
            Sports Meet
          </h1>
        </div>
        <div className="relative w-[250px] h-[200px] xl:w-[400px] xl:h-[350px] border">
          <img
            src="assets/gallery/sports.jpg"
            className=" w-full h-full object-cover"
          />
          <h1 className=" absolute top-1/2 lg:left-8 xl:left-24  text-white text-2xl">
            Sports Meet
          </h1>
        </div>
        <div className="relative w-[250px] h-[200px] xl:w-[400px] xl:h-[350px] border">
          <img
            src="assets/gallery/festival.jpg"
            className=" w-full h-full object-cover"
          />
          <h1 className=" absolute top-1/2 lg:left-8 xl:left-24  text-white text-2xl">
            Dashain Celebration
          </h1>
        </div>
        <div className="relative w-[250px] h-[200px] xl:w-[400px] xl:h-[350px] border">
          <img src="assets/btc1.jpg" className=" w-full h-full object-cover" />
          <h1 className=" absolute top-1/2 lg:left-8 xl:left-24  text-white text-2xl">
            Distributing Dustbin
          </h1>
        </div>
        <div className="relative w-[250px] h-[200px] xl:w-[400px] xl:h-[350px] border">
          <img
            src="assets/gallery/enviro.jpg"
            className=" w-full h-full object-cover"
          />
          <h1 className=" absolute top-1/2 lg:left-8 xl:left-24  text-white text-2xl">
            Sports Meet
          </h1>
        </div>
        <div className="relative w-[250px] h-[200px] xl:w-[400px] xl:h-[350px] border">
          <img
            src="assets/gallery/sports.jpg"
            className=" w-full h-full object-cover"
          />
          <h1 className=" absolute top-1/2 lg:left-8 xl:left-24  text-white text-2xl">
            Sports Meet
          </h1>
        </div>
        <div className="relative w-[250px] h-[200px] xl:w-[400px] xl:h-[350px] border">
          <img
            src="assets/gallery/rangoli.jpg"
            className=" w-full h-full object-cover"
          />
          <h1 className=" absolute top-1/2 lg:left-8 xl:left-24  text-white text-2xl">
            Rangoli Competition
          </h1>
        </div>
        <div className="relative w-[250px] h-[200px] xl:w-[400px] xl:h-[350px] border">
          <img
            src="assets/gallery/puja.jpg"
            className=" w-full h-full object-cover"
          />
          <h1 className=" absolute top-1/2 lg:left-8 xl:left-24  text-white text-2xl">
            Saraswoti Puja
          </h1>
        </div>
        <div className="relative w-[250px] h-[200px] xl:w-[400px] xl:h-[350px] border">
          <img
            src="assets/gallery/sports.jpg"
            className=" w-full h-full object-cover"
          />
          <h1 className=" absolute top-1/2 lg:left-8 xl:left-24  text-white text-2xl">
            Sports Meet
          </h1>
        </div>
      </div>
    </>
  );
}
