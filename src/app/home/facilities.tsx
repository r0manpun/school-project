import Image from "next/image";

import {
  MdOutlineScience,
  MdRestaurant,
  MdOutlineDirectionsBusFilled as Bus,
  MdImportContacts,
  MdOutlineAccountBalance,
  MdOutlineDesktopWindows,
  MdOutlineSchool,
  MdSportsSoccer,
  MdOutlineGroups,
} from "react-icons/md";

import { Noto_Serif_SC, Playfair_Display, Open_Sans } from "next/font/google";
import Slider from "../components/Slider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const noto = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["900"],
});

const sans = Open_Sans({
  subsets: ["latin"],
  weight: ["600"],
});
const slides = [
  {
    url: "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1685788769454-e6fe5f7b4d55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1685788769454-e6fe5f7b4d55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80",
  },
];

export default function Facilities() {
  return ( <>
    <div className={playfair.className}>
      <div className="text-center text-[#FD7900] -mt-20 font-normal md:text-4xl text-lg">
        The Facilities we provide
      </div>
      <hr className=" mt-6 md:mt-6 border-orange-300 mx-auto w-36 md:w-[208px]" />
      <div className="flex w-full">
        <div className=" self-center h-[500px] mt-14 lg:mt-10 lg:w-[60%] lg:ml-16 2xl:w-[1200px] 2xl:h-[620px] ">
          <Slider slides={slides} />
          {/*
            "w-72 self-center md:w-[744px] md:h-[480px] md:ml-20 mt-10"
             <Image
              src="/assets/welcome.jpg"
              width={744}
              height={480}
              alt="slider"
              className="object-cover"
            /> */}
        </div>
        <div className="p-4 md:p-8 mt-2 md:mt-24 md:h-[424px] lg:w-[50%] lg:mt-12 lg:ml-12 2xl:w-[1070px] 2xl:h-full 2xl:ml-14">
          <p className="md:h-[113px] lg:w-full 2xl:w-full">
            <span className="text-orange-500  md:text-[30px] 2xl:text-3xl mr-2">
              WE OFFER
            </span>
            <span className="text-zinc-500 text-sm lg:text-lg 2xl:text-xl">
              wide range of facilities to enhance your <br />
              educational journey and to provide an enriching environment
              <br /> equipped with all the necessary amenities to support your
              growth
              <br /> and success.
            </span>
          </p>
          <div className="absolute grid lg:grid-cols-4 text-[#FD7900] lg:gap-4 lg:mt-8 lg:-ml-12 2xl:mt-18 2xl:-ml-4 2xl:gap-6">
            <div className="flex flex-col justiy-center items-center">
              <MdOutlineScience className="w-12 h-12 md:w-[83px] md:h-[83px] 2xl:w-28 2xl:h-36 " />
              <label className="text-black text-[12px] lg:text-base font-bold">
                Well equipped Lab
              </label>
            </div>
            <div className="flex flex-col justiy-center items-center">
              <MdRestaurant className="w-12 h-12 md:w-[83px] md:h-[83px] 2xl:w-28 2xl:h-36" />
              <label className="text-black text-[12px] lg:text-base font-bold">
                Hygnieic Cafeteria
              </label>
            </div>
            <div className="flex flex-col justiy-center items-center">
              <Bus className="w-12 h-12 md:w-[83px] md:h-[83px] 2xl:w-28 2xl:h-36" />
              <label className="text-black text-[12px] lg:text-base  font-bold">
                Transportation
              </label>
            </div>
            <div className="flex flex-col justiy-center items-center">
              <MdSportsSoccer className="w-12 h-12 md:w-[83px] md:h-[83px] 2xl:w-28 2xl:h-36" />
              <label className="text-black text-[12px] lg:text-base font-bold">
                Sports Activities
              </label>
            </div>
            <div className="flex flex-col justiy-center items-center">
              <MdImportContacts className="w-12 h-12 md:w-[83px] md:h-[83px] 2xl:w-28 2xl:h-36" />
              <label className="text-black text-[12px] lg:text-base font-bold">
                Well stocked Library
                <br />
                and Audio Visual lab
              </label>
            </div>
            <div className="flex flex-col justiy-center items-center">
              <MdOutlineAccountBalance className="w-12 h-12 md:w-[83px] md:h-[83px] 2xl:w-28 2xl:h-36" />
              <label className="text-black text-[12px] lg:text-base 2xl:text-[20px] font-bold">
                Spacious Auditorium Hall
              </label>
            </div>
            <div className="flex flex-col justify-center items-center">
              <MdOutlineDesktopWindows className="w-12 h-12 md:w-[83px] md:h-[83px] 2xl:w-28 2xl:h-36" />
              <label className="text-black text-[12px] lg:text-base 2xl:text-[20px] font-bold">
                Computer Lab
              </label>
            </div>
            <div className="flex flex-col justiy-center items-center">
              <MdOutlineSchool className="w-12 h-12 md:w-[83px] md:h-[83px] 2xl:w-28 2xl:h-36" />
              <label className="text-black text-[12px] lg:text-base 2xl:text-[20px] font-bold">
                Academic Excellence
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery */}
      <h1 className="text-center text-[#FD7900] lg:mt-12 lg:text-4xl 2xl:mt-20">
        Browse through our Photo Gallery
      </h1>
      <hr className="w-[220px] 2xl:w-[280px] border-[#ea9443] mx-auto mt-8" />
      <div className="relative h-[220px]">
        <Image
          width={400}
          height={250}
          alt="gallery"
          src="/assets/gallery.jpg"
          className="relative border-2 lg:h-full w-full object-cover mt-12"
        />
        <h1 className="text-white w-[550px] h-24 absolute top-1/3 left-2">
          <span className="text-[38px] font-semibold">Our Gallery</span>
          <span className="text-[25px] font-semibold ml-3">
            preserves the essence of
            <br />
            our school dynamic journey.
          </span>
        </h1>
        <div className="text-white text-[22px] font-normal absolute lg:top-[45%] right-2 lg:text-2xl lg:w-[157px] lg:h-[47px] p-2.5 g-2.5 -mr-21 hover:text-black hover:[box-shadow-width:1px] hover:[box-shadow:0px_0px_0px_1px_black_inset]">
          View Gallery
        </div>
      </div>
      <h1 className="text-center text-[#FD7900] lg:mt-12 lg:text-4xl 2xl:mt-20">
        About Us
      </h1>
      <hr className="w-[220px] lg:w-36 border-[#ea9443] mx-auto mt-8" />
      <div
        className={noto.className}
        style={{ position: "relative", height: "240px" }}
      >
        <Image
          width={400}
          height={250}
          alt="gallery"
          src="/assets/about.jpg"
          className=" bg-black w-full object-cover mt-12 lg:h-full "
        />
        <ul className="grid absolute grid-cols-4 w-full top-1/4">
          <li className="flex items-center text-white border-r-[1px]">
            <img
              src="/assets/icons/time.png"
              className="lg:w-28 lg:h-24 lg:ml-6"
              alt="students"
            />
            <span className="lg:text-2xl lg:ml-6">
              27 Years <br />
              of Journey
            </span>
          </li>
          <li className="flex items-center text-white border-r-[1px]">
            <img
              src="/assets/icons/students.png"
              className="lg:w-32 lg:h-32 lg:ml-6"
              alt="students"
            />
            <span className=" lg:text-2xl lg:ml-6">
              1400
              <br />
              Students
            </span>
          </li>
          <li className="flex items-center text-white border-r-[1px]">
            <img
              src="/assets/icons/group.png"
              className="lg:w-32 lg:h-32 lg:ml-6"
              alt="employees"
            />
            <span className=" lg:text-2xl lg:ml-6">
              93
              <br />
              Employees
            </span>
          </li>
          <li className="flex items-center text-white w-40">
            <img
              src="/assets/icons/award.png"
              className="lg:w-32 lg:h-32 lg:ml-6"
              alt="award"
            />
            <span className="text-center lg:text-2xl lg:ml-6">
              International
              <br />
              School
              <br />
              Award
            </span>
          </li>
        </ul>
      </div>

      {/* Beyond the Classroom */}
      <h1 className="text-center text-[#FD7900] lg:mt-12 lg:text-4xl 2xl:mt-20">
        Beyond the Classroom: Explore, Excel, and Embrace Activities
      </h1>
      <hr className="w-[220px] lg:w-[55%] border-[#ea9443] border-[1.5px] mx-auto mt-8" />
      <div className="relative h-[900px] lg:mt-10">
        <div className="relative grid grid-cols-2 gap-y-4 mx-auto lg:w-[90%] lg:gap-x-14">
          <div className=" mx-auto lg:max-w-[420px] lg:h-[290px] self-center">
            <Image
              src="/assets/btc1.jpg"
              className="rounded-3xl object-cover w-full h-full"
              width={450}
              height={300}
              alt="btc1"
            />
          </div>

          <div className=" mx-auto lg:max-w-[420px] lg:h-[290px] self-center">
            <img
              src="/assets/btc2.jpg"
              className="rounded-3xl object-cover w-full h-full"
            />
          </div>
          <div className=" mx-auto lg:max-w-[420px] lg:h-[290px] self-center">
            <img
              src="/assets/btc3.jpg"
              className="rounded-3xl object-cover w-full h-full"
            />
          </div>
          <div className=" mx-auto lg:max-w-[420px] lg:h-[290px] self-center">
            <img
              src="/assets/btc4.jpg"
              className="rounded-3xl object-cover w-full h-full"
            />
          </div>
          <div className=" mx-auto lg:max-w-[420px] lg:h-[290px] self-center">
            <img
              src="/assets/btc5.jpeg"
              className="rounded-3xl object-cover w-full h-full"
            />
          </div>
          <div className=" mx-auto lg:max-w-[500px] lg:h-[290px] self-center">
            <img
              src="/assets/btc6.jpg"
              className="rounded-3xl object-cover h-full "
            />
          </div>
        </div>
        {/* Vertical Lines */}
        <div className=" absolute top-1 left-12 border-2 border-[#FD7900] h-full" />
        <div className=" absolute top-1 right-12 border-2 border-[#FD7900] h-full" />
        {/* Horizontal Lines Left*/}
        <div className="absolute top-40 left-12 w-40 border-[1px] border-[#FD7900] "></div>
        <div className="absolute top-1/2 left-12 w-36 border-[1px] border-[#FD7900] "></div>
        <div className="absolute bottom-36 left-12 w-36 border-[1px] border-[#FD7900] "></div>
        {/* Horizontal Lines Right*/}
        <div className="absolute top-40 right-12 w-40 border-[1px] border-[#FD7900] "></div>
        <div className="absolute top-1/2 right-12 w-36 border-[1px] border-[#FD7900] "></div>
        <div className="absolute bottom-36 right-12 w-40 border-[1px] border-[#FD7900] "></div>
      </div>


      <div className="flex relative text-white mt-10 w-full h-auto ">
        <div className="lg:ml-40 lg:max-w-3xl">
          <img
            src="/assets/values.jpg"
            className="rounded-tl-[50px] rounded-br-[50px]"
            alt="core values"
          />
        </div>
        <div className="absolute top-[10%] right-[12%] bg-[#FD7900] rounded-tl-[50px] rounded-br-[50px] lg:w-1/3 lg:h-96 ">
          <div
            className={sans.className}
            style={{ display: "flex,flex-col", padding: "2rem" }}
          >
            <h1 className="text-[32px] mt-4">Core Values</h1>
            <p className="text-2xl mt-5">Academic Excellence</p>
            <p className="text-2xl mt-3 ">Individual Growth</p>
            <p className="text-2xl mt-3">Diversity and Inclusivity</p>
            <p className="text-2xl mt-3">Integrity and Ethics</p>
            <p className="text-2xl mt-3">
              Collaboration and Community
            </p>
          </div>
        </div>
      </div>

      {/* Latest Events & News */}
      <h1 className="text-center text-[#FD7900] lg:mt-12 lg:text-4xl">
       Latest Events & News
      </h1>
      <hr className="w-[220px] lg:w-[16%] border-[#ea9443] border-[1.5px] mx-auto mt-8" />
      <div className="grid lg:h-[550px] mt-10 lg:grid-cols-4 gap-6 w-[93%] mx-auto">
        <div className="">
         <img src="/assets/home/home1.jpg" className="w-full h-[250px]" />
         <p className="flex mt-8 justify-center">Parents oreientation program from class <br/> Nursery to UKG by Kabita Aryal madam</p>
         <hr className="lg:w-[60%] border-[#C6BDBD] border-[1.5px] mx-auto mt-8" />
         <p className="flex mt-8 justify-center">14th-15th Jestha, 2080</p>
        </div>
        <div className=" self-end">
        <img src="/assets/home/home2.jpg" className="object-cover w-full h-[260px]" />
         <p className="flex mt-8 justify-center">Lower Secondary English Spelling Contest</p>
         <hr className="lg:w-[60%] border-[#C6BDBD] border-[1.5px] mx-auto mt-8" />
         <p className="flex mt-8 justify-center">5th Jestha, 2080</p>
         </div>
         <div className=" ">
         <img src="/assets/home/home3.jpg" className="" />
         <p className="flex mt-8 justify-center">Selection of all-School's Captains, Vice Captains, each house Captains, Vice-Captains, house teachers</p>
         <hr className="lg:w-[60%] border-[#C6BDBD] border-[1.5px] mx-auto mt-8" />
         <p className="flex mt-8 justify-center">1st Jestha, 2080</p>
         </div>
         <div className=" self-end ">
         <img src="/assets/home/home4.jpg" className="object-cover w-full h-[250px]" />
         <p className="flex mt-8 place-items-center">Entrance exam for admission of academic year 2080</p>
         <hr className="lg:w-[60%] border-[#C6BDBD] border-[1.5px] mx-auto mt-8"/>
         <p className="flex mt-8 justify-center">29th Chaitra, 2079</p>
         </div>
      </div>
    </div>
    <div className="w-full mt-14 text-3xl text-center text-[#FD7900]">
    <button className="border-2 border-black p-3">News & Events</button>
    </div> </>
  );
}
