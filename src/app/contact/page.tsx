import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone, FiMail } from "react-icons/fi";
import Image from "next/image";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="bg-gradient-to-r from-teal-100 to-rose-200 relative -z-10">
    <div className="w-full h-full max-w-[1540px] mx-auto ">
      <div className="flex flex-col w-full h-full">
        <div className=" text-sm md:text-xl xl:text-2xl font-semibold ml-3 md:ml-20 2xl:pl-16 mt-8 gap-y-3">
          <div className="flex items-center gap-2">
            <SlLocationPin className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
            <label>Kolpatan-15, Pokhara,Kaski,Nepal</label>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
            <label>+977-061-430577, 061-430191</label>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className=" w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
            <label>rainbowacademic52@gmail.com</label>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row xl:p-12 mb-10 sm:mb-auto">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.438775576853!2d83.99334847517551!3d28.19397877590701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595c07bd41ff7%3A0x8b52b2ec810f8467!2sRainbow%20Academic%20Homes%20Secondary%20School!5e0!3m2!1sen!2snp!4v1688371164116!5m2!1sen!2snp"
        width="800"
        height="550"
        style={{ border: "0" }}
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
        className=" my-8 2xl:ml-12 xl:ml-6 mx-auto w-80 h-80 sm:w-[47vw] sm:h-[] md:h-[370px] lg:w-[48vw] lg:h-[460px] 2xl:w-[740px]  xl:h-[558px] lg:p-4"
         ></iframe>
       <form className=" w-80 h-72 sm:h-80 2xl:w-[590px] md:w-[44vw] md:h-[362px] lg:h-[425px] xl:h-[540px]  2xl:h-[560px] opacity-70 bg-white rounded-2xl xl:rounded-xl mx-auto pt-4">
        <h1 className="lg:text-2xl xl:text-3xl text-center mt-2 xl:mt-6 font-medium">Reach Out to Us</h1>
        <hr className="w-[30%] border-[#CAC6C6] mx-auto mt-2" />
        <input type="text" placeholder="Full Name" className="w-[75%] h-8 md:h-11 lg:h-12 ml-12 mt-2 xl:mt-8 xl:h-16 border-b-[1px] border-black" required/>
        <input type="email" placeholder="Email" className="w-[75%] h-8 md:h-11  lg:h-12 ml-12 xl:h-16 border-b-[1px] border-black" required/>
        <input type="text" placeholder="Phone number" className="w-[75%] h-8 md:h-11 lg:h-14 ml-12 xl:h-16 border-b-[1px] border-black" required/>
        <input type="text" placeholder="Subject" className="w-[75%] h-8 md:h-11 lg:h-12 ml-12 xl:h-16 border-b-[1px] border-black" required/>
        <input type="text" placeholder="Message" className="w-[75%] h-8 md:h-11 lg:h-12 ml-12 xl:h-16 border-b-[1px] border-black" required/>
        <button className="flex justify-center items-center border xl:border-2 border-black w-20 h-8 md:w-28 md:h-12 xl:w-32 xl:h-14 rounded-3xl text-[12px] lg:text-base font-semibold mt-5 lg:mt-8 mx-auto">Submit<Image width={1000} height={800} src="/assets/icons/s.png" className="w-5 h-4 xl:w-[34px] xl:h-[34px]" alt="submit"/></button>
       </form>
      </div>
      </div>
      </div>
    </div>
  );
}
