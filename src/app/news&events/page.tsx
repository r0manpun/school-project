import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const data= [
  {
    title :"Victory in Nepali Poem Program",
     desc :" We are thrilled to announce that Ms. Januka Shress, emerged as thewinner in the renowned ......",
     img : "/assets/home/home3.jpg"
  },
  {
    title :"MoU Signed",
     desc :"Nanjing University of Aeronautics and Astronautics (NUAA) and Rainbow Academic Homes .....",
     img : "/assets/home/home2.jpg"
  },
  {
    title :"MoU Signed",
     desc :"Nanjing University of Aeronautics and Astronautics (NUAA) and Rainbow Academic Homes .....",
     img : "/assets/home/home1.jpg"
  }
]

export default function News({}: Props) {
  return (
    <>
      <div className="flex justify-center items-center gap-3 text-3xl ">
        <hr className=" border-black w-20" />
        News And Events
        <hr className="border-black w-20" />
      </div>
      <div className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-x-20 gap-y-16  xl:w-[87%] mx-auto mt-6">
        {data.map((events,index)=>(
          <div className="border relative xl:h-[540px] 2xl:h-[620px] bg-white drop-shadow-lg" key={index}>
          <div className="bg-green-400 w-full h-[70%]" > <Image src={events.img} width={900} height={600} alt="events" className="w-full h-full object-cover"/></div>
          <div className="p-5">
            <h1 className="text-center text-[22px]">
              "{events.title}"
            </h1>
            <p className="text-lg mt-2">
             {events.desc}
            </p>
            <Link href="/news&events/id" className="absolute border rounded-[30px] self-center text-base w-[121px] h-14 mt-2 xl:ml-56 2xl:ml-40 hover:bg-[#19E3E3] hover:text-white">Read More</Link>
          </div>
        </div>
        ))}
      </div>
    </>
  );
}
