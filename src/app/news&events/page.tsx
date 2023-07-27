import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const data = [
  {
    title: "Victory in Nepali Poem Program",
    desc: "We are thrilled to announce that Ms. Januka Shress, a talented Grade 10 student, emerged as the winner in the renowned Nepali Poem Recitation Program organized by the Nepali Bhasa Parishad Kaski. Her exceptional skills and captivating recitation of Nepali poems brought great honor to our school. We are immensely proud of Januka's accomplishment and would like to extend our heartfelt congratulations to her for this outstanding achievement.",
    img: "/assets/home/home3.jpg",
  },
  {
    title: "MoU Signed",
    desc: "Nanjing University of Aeronautics and Astronautics (NUAA) and Rainbow Academic Homes .....",
    img: "/assets/home/home2.jpg",
  },
  {
    title: "MoU Signed",
    desc: "Nanjing University of Aeronautics and Astronautics (NUAA) and Rainbow Academic Homes .....",
    img: "/assets/home/home1.jpg",
  },
];

export default function News({}: Props) {
  return (
    <>
      <div className="flex justify-center items-center gap-3 text-base xl:text-3xl ">
        <hr className=" border-black w-8 xl:w-20" />
        News And Events
        <hr className="border-black w-8 xl:w-20" />
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 w-full gap-x-4 justify-evenly gap-y-5 xl:gap-y-14 mx-auto mt-6 px-3 md:px-5 ">
        {data.map(({ img, title, desc }, index) => (
          <div
            className="border relative h-56 md:h-96 lg:h-[460px] lg:w-11/12 xl:h-[555px]  bg-white drop-shadow-lg mx-auto"
            key={index}
          >
            <div className=" w-full h-2/3 lg:h-[75%] xl:h-2/3">
              <Image
                src={img}
                width={1200}
                height={900}
                alt="events"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-1 xl:p-5">
              <h1 className="text-center lg:text-base text-[12px] xl:text-[22px] line-clamp-1">
                &quot;{title}&quot;
              </h1>
              <p className="text-[10px] md:text-base xl:text-lg xl:mt-3 line-clamp-2">{desc}</p>
              <div className="flex w-full justify-center md:mt-2 ">
                <Link
                  href="/news&events/id"
                  className="flex justify-center items-center absolute hover:border hover:rounded-[30px] text-[9px] md:text-base xl:w-32  h-6 xl:h-14 2xl:mx-auto hover:bg-[#19E3E3] hover:text-white"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
