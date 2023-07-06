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
      <div className="flex justify-center items-center gap-3 text-3xl ">
        <hr className=" border-black w-20" />
        News And Events
        <hr className="border-black w-20" />
      </div>
      <div className="grid grid-cols-2 2xl:grid-cols-3 gap-x-20 gap-y-16 w-[87%] mx-auto mt-6">
        {data.map(({ img, title, desc }, index) => (
          <div
            className="border relative h-[400px] xl:h-[555px] 2xl:h-[620px] bg-white drop-shadow-lg"
            key={index}
          >
            <div className=" w-full h-[65%] 2xl:h-[70%]">
              {" "}
              <Image
                src={img}
                width={900}
                height={600}
                alt="events"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h1 className="text-center lg:text-base xl:text-[22px]">
                "{title}"
              </h1>
              <p className="md:text-base xl:text-lg mt-2 line-clamp-2">{desc}</p>
              <div className="">
                <Link
                  href="/news&events/id"
                  className="flex absolute hover:border hover:rounded-[30px] place-items-center justify-center text-base w-[121px] h-14 mt-2 xl:ml-56 2xl:ml-40 hover:bg-[#19E3E3] hover:text-white"
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
