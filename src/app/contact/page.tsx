import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone, FiMail } from "react-icons/fi";
import {AiOutlineSend} from "react-icons/ai"

type Props = {};

export default function page({}: Props) {
  return (
    <>
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-ful">
          <img className="absolute w-full h-full object-cover" src="/assets/background/b1.png"/>
        <div className="relative text-sm xl:text-2xl ml-3 xl:ml-20 mt-8">
          <div className="flex items-center gap-2">
            <SlLocationPin className="w-6 h-6 xl:w-10 xl:h-10" />
            <label>Kolpatan-15, Pokhara,Kaski,Nepal</label>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="w-6 h-6 xl:w-10 xl:h-10" />
            <label>+977-061-430577, 061-430191</label>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className=" w-6 h-6 xl:w-10 xl:h-10" />
            <label>rainbowacademic52@gmail.com</label>
          </div>
        </div>
        <div className="flex flex-col md:flex-row 2xl:p-12">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.438775576853!2d83.99334847517551!3d28.19397877590701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595c07bd41ff7%3A0x8b52b2ec810f8467!2sRainbow%20Academic%20Homes%20Secondary%20School!5e0!3m2!1sen!2snp!4v1688371164116!5m2!1sen!2snp"
        width="800"
        height="550"
        style={{ border: "0" }}
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
        className="relative mt-8 2xl:ml-12 xl:ml-6 w-72 h-60 mx-auto xl:w-[740px] xl:h-[558px]"
         ></iframe>
     
       <form className="relative top-6 w-[85%] xl:w-[590px] md:h-[480px] xl:h-[560px] opacity-70 bg-white rounded-2xl xl:rounded-xl  mx-auto">
        <h1 className="lg:text-2xl xl:text-3xl text-center mt-2 xl:mt-6 font-medium">Reach Out to Us</h1>
        <hr className="w-[30%] border-[#CAC6C6] mx-auto mt-2" />
        <input type="text" placeholder="Full Name" className="w-[75%] h-8 lg:h-14 ml-12 mt-4 xl:mt-8 xl:h-16 border-b-[1px] border-black" required/>
        <input type="email" placeholder="Email" className="w-[75%] h-8 lg:h-14 ml-12 xl:h-16 border-b-[1px] border-black" required/>
        <input type="text" placeholder="Phone number" className="w-[75%] h-8 lg:h-14 ml-12 xl:h-16 border-b-[1px] border-black" required/>
        <input type="text" placeholder="Subject" className="w-[75%] h-8 lg:h-14 ml-12 xl:h-16 border-b-[1px] border-black" required/>
        <input type="text" placeholder="Message" className="w-[75%] h-8 lg:h-14 ml-12 xl:h-16 border-b-[1px] border-black" required/>
        <button className="flex justify-center items-center border xl:border-2 border-black w-20 h-8 xl:w-32 xl:h-14 rounded-3xl text-[12px] lg:text-base font-semibold my-5 xl:mt-8 mx-auto">Submit<img src="/assets/icons/s.png" className="w-5 h-4 xl:w-[34px] xl:h-[34px]"/></button>
       </form>
      </div>
      </div>
      </div>
    </>
  );
}
