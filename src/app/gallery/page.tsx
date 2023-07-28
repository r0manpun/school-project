
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const galleryData = [
  {
    title: "All SLC Batch",
    img:"",
    url:"/gallery/all-slc-batch"
  },
  {
    title: "Children's Day",
    img:"",
    url:"/gallery/childrens-day"
  },
  {
    title: "Dashain Celebration",
    img:"/assets/gallery/festival.jpg",
    url:"/gallery/dashain-celebration"
  },
  {
    title: "Distributing Dustbins",
    img:"/assets/btc1.jpg",
    url:"/gallery/distributing-dustbins"
  },
  {
    title: "Environment Day",
    img:"/assets/gallery/enviro.jpg",
    url:"/gallery/environment-day"
  },
  {
    title: "Parent's Day",
    img:"",
    url:"/gallery/parents-day"
  },
  {
    title: "Rangoli Competition",
    img:"/assets/gallery/rangoli.jpg",
    url:"/gallery/rangoli-competition"
  },
  {
    title: "Swarswoti Puja",
    img:"",
    url:"/gallery/swarswoti-puja"
  },
  {
    title: "Sports Meet",
    img:"/assets/gallery/sports.jpg",
    url:"/gallery/sports-meet"
  },
]

export default function page({}: Props) {
  return (
    <>
      <div className="flex justify-center items-center gap-2 xl:gap-3 md:text-xl lg:text-2xl xl:text-5xl ">
        <hr className=" border-black w-8 xl:w-20" />
        Everlasting Memories:<br className="xl:hidden" /> Explore Our School Gallery
        <hr className="border-black w-8 xl:w-20" />
      </div>
      <h1 className="lg:text-base xl:text-2xl 2xl:text-5xl text-center mt-2 xl:mt-4 font-medium">
          Where
      </h1>
      <h1 className="lg:text-base xl:text-2xl 2xl:text-5xl text-center xl:mt-2 font-medium">
        &quot;Every picture tells a story&quot;
      </h1>

      {/* GALLERY */}

      <div className="w-full md:p-10 lg:p-14 2xl:w-[80%] mx-auto mt-3 xl:mt-20 flex flex-wrap lg:grid lg:grid-cols-3 gap-4 xl:gap-10 2xl:gap-y-16 place-content-center">
        {galleryData.map((item,index)=> (
        <Link href={item.url} key={index}><div  className="flex place-content-center items-center relative w-36 h-24 sm:w-[160px] sm:h-[120px] md:w-[250px] md:h-[200px] xl:w-96 xl:h-80 2xl:w-[400px] 2xl:h-[350px] transition duration-300 hover:scale-105 bg-gray-500">
          <Image width={1440} height={1400} alt="rangoli-competition"
            src={item.img}
            className=" w-full h-full object-cover "
          />
          <h1 className="absolute text-white text-base xl:text-2xl">
            {item.title}
          </h1>
        </div>
        </Link>))}
      </div>
    </>
  );
}
