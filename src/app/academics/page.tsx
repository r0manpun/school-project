import React from "react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";

const sans = Open_Sans({
  weight: ["600"],
  subsets: ["latin"],
});
type Props = {};

export default function page({}: Props) {
  return (
    <div className=" w-full h-full">
      <div className="mt-14 border-2 border-red-500 w-[93%] mx-auto h-[40%]">
        <Image width={1200} height={800} 
          src="/assets/academics/h.jpg"
          className="object-cover min-h-full w-full"
          alt="academics1"
        />
      </div>
      <h1 className="text-center mt-8 text-3xl font-extrabold">
        "Our Dedicated Teaching Staff "
      </h1>
      <p className="w-[88%] mx-auto mt-4 text-2xl">
        Our dedicated teachers go above and beyond to help students thrive. They
        provide personalized attention, create a supportive classroom
        environment, and offer guidance and mentorship. With their expertise and
        commitment, our teachers empower students to reach their full potential
        and cultivate a love for learning. Beyond delivering curriculum content,
        our teachers act as mentors, guiding students on their educational
        journey. They offer guidance, encouragement, and constructive feedback,
        empowering students to develop critical thinking skills and become
        lifelong learners. They inspire curiosity, ignite a passion for
        knowledge, and instill confidence in their students' abilities.
      </p>
      <h1 className="text-center mt-8 xl:text-3xl font-extrabold">
        Courses Offered in RAH
      </h1>
      <hr className="w-[220px] lg:w-[9%] border-[#ea9443] mx-auto mt-2" />
      <div className="grid grid-cols-2 mx-auto w-[89%] border-2 border-yellow-300 gap-5">
        <div className="border-2 border-green-500 h-[700px] ">
          <h1 className="text-center xl:text-3xl font-extrabold">
            10+2 Program (Management)
          </h1>
          <div className="border-2 border-red-500 h-[500px] "></div>
        </div>
        <div className="border-2 border-green-500 my-auto h-[500px] ">
          <h1 className="xl:text-3xl font-extrabold">Courses</h1>
          <div className="border-2 border-red-500 h-[400px] "></div>
          <h1 className="mt-4 xl:text-3xl font-extrabold">Schedule</h1>
          <p className="xl:text-2xl">The classes run in the morning shift.</p>
        </div>
      </div>
      <h1 className="text-center mt-8 xl:text-3xl font-extrabold">
        School Uniforms
      </h1>
      <hr className="w-[220px] lg:w-[9%] border-[#ea9443] mx-auto mt-2" />
      <div className="flex w-[96%] mx-auto mt-4 h-[530px]">
        <p className="w-1/2 mt-[130px] h-full xl:text-2xl">
          Note:
          <br />
          1. We have distinctive colored sports dress for different four houses.
          <br />
          2. Coat to be used from class 6 <br />
          3. A set of track suit and T-shirt, color and design prescribed by
          school, should be used from Nursery to Ten.
        </p>
        <div className="border-2 border-cyan-400 w-1/2 h-[500px]"></div>
      </div>
      <div className="border-2 border-red-400 w-[60%] h-[530px] mx-auto">
        <Image width={1400} height={900} src="/assets/academics/p.png" className="object-cover w-full h-full" alt="academics"/>
      </div> 
      <div className={sans.className}>
        <h1 className="text-center my-10 xl:text-3xl font-extrabold">
          "Voices of Success: Reflections from Our Accomplished Alumni"
        </h1>
        <div className="flex justify-between w-[94%] mt-4 mx-auto h-[400px]">
          <div className="w-[48%] h-full relative bg-sky-100">
            <div className="absolute w-[25%] h-[60%] top-10 left-10 bg-black"></div>
            <h1 className="absolute bottom-20 left-11 text-xl">Name</h1>
            <h1 className="absolute bottom-12 left-11 text-xl">Profession</h1>
            <p className="absolute w-[55%] h-[75%] bg-[#D9D9D9] right-8 top-10 "></p>
          </div>
          <div className="w-[48%] h-full relative bg-sky-100">
            <div className="absolute w-[25%] h-[60%] top-10 left-10 bg-black"></div>
            <h1 className="absolute bottom-20 left-11 text-xl">Name</h1>
            <h1 className="absolute bottom-12 left-11 text-xl">Profession</h1>
            <p className="absolute w-[55%] h-[75%] bg-[#D9D9D9] right-8 top-10 "></p>
          </div>
        </div>
      </div>
    </div>
  );
}
