import Image from "next/image";
import React from "react";

type Props = {};

const data ={
    img :[ "/assets/events/a.jpg", "/assets/events/b.jpg","/assets/events/c.jpg","/assets/events/d.jpg" ]
}

export default function page({}: Props) {
  return (
    <>
      <div className="w-[1440px] mx-auto">
        <div className="flex justify-center items-center gap-3 text-3xl mt-8 ">
          "Sharing Smiles"
        </div>
        <p className="xl:text-lg 2xl:text-xl  mt-5 font-sans">
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
      <div className="flex flex-wrap gap-x-6 gap-y-10 place-content-center w-[80%] mx-auto mt-8">
        {data.img.map((url) =>(<Image width={800} height={500} src={url} alt="events" key={url} className="w-[449px] h-[349px]"/>) )}
        </div>
        <div className="flex justify-center items-center gap-3 text-2xl mt-10">
        <hr className=" border-black w-20" />
        27th Flagun, 2079
        <hr className="border-black w-20" />
      </div>
    </>
  );
}
