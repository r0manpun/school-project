
import React from "react";

type Props = {};


export default function page({}: Props) {
  return (
    <div>
      <div className="flex justify-center items-center text-4xl mt-8 ">
        Environment Day
      </div>
      <hr className="w-[220px] lg:w-[13%] border-black mx-auto mt-2" />
      <div className="flex max-w-full w-[90%] mt-6 gap-2 lg:gap-5 xl:gap-8 place-content-center mx-auto">
        <div className="flex flex-col gap-2 xl:gap-6 ">
          <div className="h-32 xl:w-[423px] xl:h-[434px] group">
            <img
              src="/assets/gallery/environment/1.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="h-28 2xl:w-[423px] 2xl:h-[358px] group">
            <img
              src="/assets/gallery/environment/4.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="h-36 2xl:w-[423px] xl:h-[564px] group">
            <img
              src="/assets/gallery/environment/7.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="2xl:w-[423px] xl:h-[264px] group " >
            <img
              src="/assets/gallery/environment/10.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 xl:gap-6 ">
          <div className="w-32 xl:w-[423px] 2xl:h-[358px] group">
            <img
              src="/assets/gallery/environment/2.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="h-24 2xl:w-[423px] 2xl:h-[358px] group">
            <img
              src="/assets/gallery/environment/5.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="2xl:w-[423px] xl:h-[546px] group">
            <img
              src="/assets/gallery/environment/8.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="h-28 2xl:w-[423px] 2xl:h-[358px] group ">
            <img
              src="/assets/gallery/environment/11.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 xl:gap-6 ">
          <div className="w-28 2xl:w-[423px] 2xl:h-[358px] group">
            <img
              src="/assets/gallery/environment/3.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="h-40 2xl:w-[423px] xl:h-[568px] group">
            <img
              src="/assets/gallery/environment/6.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="2xl:w-[423px] xl:h-[334px] group">
            <img
              src="/assets/gallery/environment/9.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="h-28 2xl:w-[423px] 2xl:h-[358px] group">
            <img
              src="/assets/gallery/environment/12.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
