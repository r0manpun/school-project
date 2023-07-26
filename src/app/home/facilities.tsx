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
} from "react-icons/md";

import { Noto_Serif_SC, Playfair_Display, Open_Sans } from "next/font/google";
import Slider from "../../components/Slider";
import Link from "next/link";

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
    url:"/assets/btc2.jpg"
  },
  {
    url:"/assets/btc6.jpg"
  },
  {
    url:"/assets/gallery/environment/1.jpg"
  },
  {
    url:"/assets/gallery/environment/5.jpg"
  }
];

const newsItem =[{
  title:"Parents oreientation program from class Nursery to UKG by Kabita Aryal madam",
  date:"Jestha 12",
  img:"/assets/home/home1.jpg",
},
{
  title:"Parents oreientation program from class Nursery to UKG by Kabita Aryal madam",
  date:"Jestha 12",
  img:"/assets/home/home1.jpg",
},
{
  title:"Parents oreientation program from class Nursery to UKG by Kabita Aryal madam",
  date:"Jestha 12",
  img:"/assets/home/home1.jpg",
},
{
  title:"Parents oreientation program from class Nursery to UKG by Kabita Aryal madam",
  date:"Jestha 12",
  img:"/assets/home/home1.jpg",
},]

export default function Facilities() {
  return (
    <>
      <div className={playfair.className}>
        <div className="text-center text-[#FD7900] mt-10 lg:-mt-20 font-normal md:text-4xl text-lg">
          The Facilities we provide
        </div>
        <hr className=" mt-6 md:mt-6 border-orange-300 mx-auto w-36 md:w-[208px]" />
        <div className="lg:flex w-full">
          <div className=" self-center mx-auto w-[90%] h-[220px] lg:h-[500px] mt-[5%] xl:mt-14 lg:mt-10 lg:w-[60%] lg:ml-16 2xl:w-[1200px] 2xl:h-[620px] ">
            <Slider slides={slides} />
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
            <div className=" grid grid-cols-4 place-items-center text-[#FD7900] mt-4 lg:gap-4 lg:mt-8 lg:-ml-12 2xl:mt-18 2xl:-ml-4 2xl:gap-6">
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
        <h1 className="text-center text-[#FD7900] mt-10 lg:mt-12 lg:text-4xl 2xl:mt-20">
          Browse through our Photo Gallery
        </h1>
        <hr className="w-[220px] 2xl:w-[280px] border-[#ea9443] mx-auto mt-5 lg:mt-8" />
        <div className="relative h-[150px] xl:h-[220px] mt-[5%] ">
          <Image
            width={1000}
            height={850}
            alt="gallery"
            src="/assets/gallery.jpg"
            className="relative border-2 h-full w-full object-cover xl:mt-12"
          />
          <h1 className="text-white xl:w-[550px] xl:h-24 absolute top-3 xl:top-1/3 left-2">
            <span className="text-lg xl:text-[38px] font-semibold">
              Our Gallery
            </span>
            <span className="text-sm xl:text-[25px] font-semibold ml-3">
              preserves the essence of
              <br />
              our school dynamic journey.
            </span>
          </h1>
          <div className="text-white text-base lg:text-[22px] font-normal absolute bottom-2 lg:top-[45%] lg:right-2 lg:text-2xl lg:w-[157px] lg:h-[47px] p-2.5 g-2.5 lg:-mr-21 hover:text-black hover:[box-shadow-width:1px] hover:[box-shadow:0px_0px_0px_1px_black_inset]">
            <Link href="/gallery"> View Gallery </Link>
          </div>
        </div>
        {/* About Us */}
        <h1 className="text-center text-[#FD7900] mt-[5%] lg:mt-12 lg:text-4xl 2xl:mt-20">
          About Us
        </h1>
        <hr className="w-[12%] 2xl:w-[220px] lg:w-36 border-[#ea9443] mx-auto mt-[3%] lg:mt-8" />
        <div className={noto.className}>
          <div className="relative w-full h-[110px] lg:h-[240px]">
            <Image
              width={1200}
              height={800}
              alt="gallery"
              src="/assets/about.jpg"
              className=" bg-black w-full object-cover mt-[5%] lg:mt-12 h-full "
            />
            <ul className="grid absolute grid-cols-4 w-full max-w-full top-1/4">
              <li className="flex items-center text-white border-r-[1px]">
                <Image
                  width={1000}
                  height={800}
                  alt="years"
                  src="/assets/icons/time.png"
                  className="w-7 h-6 lg:w-28 lg:h-24 lg:ml-6"
                />
                <span className="text-[11px] lg:text-2xl lg:ml-6">
                  27 Years <br />
                  of Journey
                </span>
              </li>
              <li className="flex gap-[5%] items-center text-white border-r-[1px]">
                <Image
                  width={1000}
                  height={800}
                  alt="students"
                  src="/assets/icons/students.png"
                  className="w-7 h-7 lg:w-32 lg:h-32 lg:ml-6"
                />
                <span className="text-[11px] lg:text-2xl lg:ml-6">
                  1400
                  <br />
                  Students
                </span>
              </li>
              <li className="flex items-center text-white border-r-[1px]">
                <Image
                  width={1000}
                  height={800}
                  alt="staffs"
                  src="/assets/icons/group.png"
                  className=" w-8 h-7 lg:w-32 lg:h-32 lg:ml-6"
                />
                <span className="text-[11px] lg:text-2xl lg:ml-6">
                  93
                  <br />
                  Employees
                </span>
              </li>
              <li className="flex items-center text-white lg:w-40">
                <Image
                  width={1000}
                  height={800}
                  alt="awards"
                  src="/assets/icons/award.png"
                  className=" w-8 h-7 lg:w-32 lg:h-32 lg:ml-6"
                />
                <span className="text-center text-[11px] -ml-2 lg:text-2xl lg:ml-6">
                  International
                  <br />
                  School
                  <br />
                  Award
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Beyond the Classroom */}
        <h1 className="text-center text-[#FD7900] mt-[5%] lg:mt-12 text-lg lg:text-4xl 2xl:mt-20">
          Beyond the Classroom: Explore, Excel, and Embrace Activities
        </h1>
        <hr className="w-[220px] lg:w-[55%] border-[#ea9443] border-[1.5px] mx-auto mt-[5%] lg:mt-8" />
        {/* Container for Images design */}
        <div className="relative w-[345px] h-[273px] xl:h-[900px] xl:mt-10 xl:w-full 2xl:w-[87%] mx-auto mt-[5%]">
          <div className="relative grid grid-cols-2 gap-y-4 mx-auto w-[90%] 2xl:w-[85%] lg:gap-x-14">
            <div className=" mx-auto w-[100px] h-[75px] lg:max-w-[420px] lg:h-[290px] 2xl:w-[80%] 2xl:h-[300px] self-center">
              <Image
                src="/assets/btc1.jpg"
                className="rounded-lg lg:rounded-3xl object-cover w-full h-full"
                width={850}
                height={500}
                alt="beyond-classroom"
              />
            </div>

            <div className=" mx-auto w-[100px] h-[75px]  lg:max-w-[420px] lg:h-[290px] 2xl:w-[600px] 2xl:h-[300px] self-center">
              <Image
                width={1000}
                height={800}
                alt="beyond-classroom"
                src="/assets/btc2.jpg"
                className="rounded-lg lg:rounded-3xl object-cover w-full h-full"
              />
            </div>
            <div className=" mx-auto w-[100px] h-[75px]  lg:max-w-[420px] lg:h-[290px] 2xl:w-[600px] 2xl:h-[300px] self-center">
              <Image
                width={1000}
                height={800}
                alt="beyond-classroom"
                src="/assets/btc3.jpg"
                className="rounded-lg lg:rounded-3xl object-cover w-full h-full"
              />
            </div>
            <div className=" mx-auto w-[100px] h-[75px]  lg:max-w-[420px] lg:h-[290px]  2xl:w-[600px] 2xl:h-[300px] self-center">
              <Image
                width={1000}
                height={800}
                alt="beyond-classroom"
                src="/assets/btc4.jpg"
                className="rounded-lg lg:rounded-3xl object-cover w-full h-full"
              />
            </div>
            <div className=" mx-auto w-[100px] h-[75px]  lg:max-w-[420px] lg:h-[290px]  2xl:w-[600px] 2xl:h-[300px] self-center">
              <Image
                width={1000}
                height={800}
                alt="beyond-classroom"
                src="/assets/btc5.jpeg"
                className="rounded-lg lg:rounded-3xl object-cover w-full h-full"
              />
            </div>
            <div className=" mx-auto w-[100px] h-[75px]  lg:max-w-[500px] lg:h-[290px]  2xl:w-[430px]  self-center">
              <Image
                width={1000}
                height={800}
                alt="beyond-classroom"
                src="/assets/btc6.jpg"
                className="rounded-lg lg:rounded-3xl object-cover w-full h-full "
              />
            </div>
          </div>
          {/* Vertical Lines */}
          <div className=" absolute -top-1 lg:top-1 lg:left-12 border lg:border-2 border-[#FD7900] h-full" />
          <div className=" absolute -top-1 lg:top-1 right-0 lg:right-12 border lg:border-2 border-[#FD7900] h-full" />
          {/* Horizontal Lines Left*/}
          <div className="absolute top-10 xl:top-40 xl:left-12 w-[13%] xl:w-40 2xl:w-[10.5%] border border-[#FD7900] "></div>
          <div className="absolute top-32 xl:top-1/2 xl:left-12 w-[13%] xl:w-36 2xl:w-[10.5%] border border-[#FD7900]"></div>
          <div className="absolute bottom-12 xl:bottom-36 xl:left-12 w-[13%] xl:w-36 2xl:w-[10.5%] border border-[#FD7900]"></div>
          {/* Horizontal Lines Right*/}
          <div className="absolute top-10 xl:top-40 right-0 xl:right-12 w-[13%] xl:w-40 border border-[#FD7900] "></div>
          <div className="absolute top-32 xl:top-1/2 right-0 xl:right-12 w-[13%] xl:w-36 2xl:w-[10.5%] border border-[#FD7900] "></div>
          <div className="absolute bottom-12 xl:bottom-36 right-0 xl:right-12 w-[13%] xl:w-40 border border-[#FD7900] "></div>
        </div>

        {/* Core Values */}
        <div className="flex relative text-white mt-10 xl:mt-16 w-[350px] 2xl:w-[85%] h-auto mx-auto">
          <div className="w-[220px] lg:ml-40 xl:max-w-3xl 2xl:w-[768px]">
            <Image
              src="/assets/values.jpg"
              className="rounded-tl-[25px] rounded-br-[25px] xl:rounded-tl-[50px] xl:rounded-br-[50px]"
              width={1000}
              height={800}
              alt="core values"
            />
          </div>
          <div className="absolute -top-6 right-0 xl:top-[10%] xl:right-[12%] bg-[#FD7900] rounded-tl-[25px] rounded-br-[25px] xl:rounded-tl-[50px] xl:rounded-br-[50px] xl:w-1/3 w-[180px] h-32 lg:h-96 ">
            <div
              className={sans.className}
            >
              <div className="p-2 xl:p-8">
              <h1 className="text-base xl:text-[32px] xl:mt-4">Core Values</h1>
              <p className="text-[10px] xl:text-2xl xl:mt-5">Academic Excellence</p>
              <p className="text-[10px] xl:text-2xl xl:mt-3 ">Individual Growth</p>
              <p className="text-[10px] xl:text-2xl xl:mt-3">Diversity and Inclusivity</p>
              <p className="text-[10px] xl:text-2xl xl:mt-3">Integrity and Ethics</p>
              <p className="text-[10px] xl:text-2xl xl:mt-3">Collaboration and Community</p>
            </div>
            </div>
          </div>
        </div>

        {/* Latest Events & News */}
        <h1 className="text-center text-[#FD7900] lg:mt-12 lg:text-4xl">
          Latest Events & News
        </h1>
        <hr className="w-[220px] lg:w-[16%] border-[#ea9443] border-[1.5px] mx-auto mt-8" />
        <div className="grid lg:h-[550px] mt-10 lg:grid-cols-4 gap-6 w-[93%] 2xl:w-[90%] mx-auto">
          {newsItem.map(({title,img,date},index)=>(<div className={`${index === 1 || index===3 ? 'self-end': '' }`}>
            <img src={img} className="w-full h-[250px]" />
            <p className="flex mt-8 justify-center">
              {title}
            </p>
            <hr className="lg:w-[60%] border-[#C6BDBD] border-[1.5px] mx-auto mt-8" />
            <p className="flex mt-8 justify-center">{date}</p>
          </div>))}
        </div>
      </div>
      <div className="w-full mt-14 text-sm xl:text-3xl text-center text-[#FD7900]">
        <button className="border-2 border-black p-3">News & Events</button>
      </div>
    </>
  );
}
