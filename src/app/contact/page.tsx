import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone, FiMail } from "react-icons/fi";
import {AiOutlineSend} from "react-icons/ai"

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div className="flex mt-20 bg-[url('/assets/background/b1.png')] w-full h-full">
        <div className="text-2xl ml-20">
          <div className="flex items-center gap-2">
            <SlLocationPin className="w-10 h-10" />
            <label>Kolpatan-15, Pokhara,Kaski,Nepal</label>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="w-10 h-10" />
            <label>+977-061-430577, 061-430191</label>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className=" w-10 h-10" />
            <label>rainbowacademic52@gmail.com</label>
          </div>
        
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.438775576853!2d83.99334847517551!3d28.19397877590701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595c07bd41ff7%3A0x8b52b2ec810f8467!2sRainbow%20Academic%20Homes%20Secondary%20School!5e0!3m2!1sen!2snp!4v1688371164116!5m2!1sen!2snp"
        width="800"
        height="550"
        style={{ border: "0" }}
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
        className="mt-8 2xl:ml-12 xl:ml-6 xl:w-[740px] xl:h-[558px]"
      ></iframe>
      </div>
       <div className="w-[590px] h-[480px] xl:h-[560px] opacity-70 bg-white rounded-xl xl:mt-32 2xl:mt-40 mx-auto">
        <h1 className="lg:text-2xl xl:text-3xl text-center mt-6 font-medium">Reach Out to Us</h1>
        <hr className=" lg:w-[30%] border-[#CAC6C6] mx-auto mt-2" />
        <input type="text" placeholder="Full Name" className="w-[75%] lg:h-14 ml-12 mt-8 xl:h-16 border-b-[1px] border-black" required/>
        <input type="email" placeholder="Email" className="w-[75%] lg:h-14 ml-12 xl:h-16 border-b-[1px] border-black" required/>
        <input type="text" placeholder="Phone number" className="w-[75%] lg:h-14 ml-12 xl:h-16 border-b-[1px] border-black" required/>
        <input type="text" placeholder="Subject" className="w-[75%] lg:h-14 ml-12 xl:h-16 border-b-[1px] border-black" required/>
        <input type="text" placeholder="Message" className="w-[75%] lg:h-14 ml-12 xl:h-16 border-b-[1px] border-black" required/>
        <button className="flex justify-center items-center border-2 border-black xl:h-16 w-32 h-14 rounded-3xl text-base font-semibold lg:mt-5 xl:mt-8 mx-auto">Submit<img src="/assets/icons/s.png"/></button>
       </div>
      </div>
     
    </>
  );
}
