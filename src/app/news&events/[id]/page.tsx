import Image from "next/image";
import React from "react";

type Props = {};

const data ={
    img :[ "/assets/events/a.jpg", "/assets/events/b.jpg","/assets/events/c.jpg","/assets/events/d.jpg" ]
}

export default function page({}: Props) {
  return (
    <>
      <div className="xl:w-[1440px] mx-auto">
        <div className="flex justify-center items-center gap-3 text-lg xl:text-3xl mt-2 xl:mt-8 font-semibold ">
          "Sharing Smiles"
        </div>
        <p className="w-[96%] mx-auto text-[10px] xl:text-lg 2xl:text-xl mt-2 xl:mt-5 font-sans">
          Our school team recently had the privilege of visiting the nearby old
          age home. Through our collective efforts, we aimed to bring smiles,
          comfort, and nourishment to these esteemed members of our community.
          It was a heartwarming experience to witness their faces light up with
          gratitude and delight as they received these thoughtful provisions. We
          made sure to engage in meaningful conversations, lending an empathetic
          ear and offering companionship to brighten their day. Through our
          small acts of kindness and generosity, we aimed to spread joy,
          nourishment, and companionship among the elderly residents. It is our
          hope that this initiative serves as an inspiration for others to make
          a difference in the lives of those who have enriched our community
          with their wisdom and experiences.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 xl:gap-x-6 xl:gap-y-10 place-content-center xl:w-[80%] mx-auto mt-8">
        {data.img.map((url) =>(<Image width={1500} height={1000} src={url} alt="events" key={url} className="object-cover w-[165px] h-[130px] xl:w-[449px] xl:h-[349px]"/>) )}
        </div>
        <div className="flex justify-center items-center gap-2 xl:gap-3 text-[10px] xl:text-2xl mt-5 xl:mt-10">
        <hr className=" border-black w-10 xl:w-20" />
        27th Flagun, 2079
        <hr className="border-black w-10 xl:w-20" />
      </div>
    </>
  );
}
