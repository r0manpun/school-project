import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <h1 className="lg:text-2xl xl:text-3xl text-center mt-16 font-medium">
        Our Mission and Vision
      </h1>
      <div className="flex w-[96%] h-[400px] mx-auto mt-6 gap-12">
        <div className=" w-1/2 h-full bg-black" />
        <div className="w-[40%] h-[45%] mt-10">
          <h1 className="xl:text-3xl font-bold">Mission</h1>
          <p className="xl:text-[22px] mt-3">
            Our mission is to empower students through a transformative
            educational experience that ignites their intellectual curiosity,
            nurtures their personal growth, and prepares them to become
            influential global citizens. Guided by our motto, &quot;Enlighten
            Yourself to Enlighten Your Future,&quot; we are dedicated to fostering a
            love for learning, cultivating critical thinking skills, and
            instilling values of integrity, empathy, and resilience.
          </p>
        </div>
      </div>
      <div className="flex w-[96%] h-[450px] mx-auto mt-6 gap-12">
        <div className="w-[40%] h-[45%] mt-10 ml-auto">
          <h1 className="xl:text-3xl font-bold ">Vision</h1>
          <p className="xl:text-[22px] mt-3">
            Our vision is to empower students to reach their full potential
            academically, socially, and emotionally. We create a supportive and
            inclusive learning community that nurtures a passion for knowledge,
            cultivates critical thinking skills, and prepares students to thrive
            in an ever-changing global society. Join us as we shape the leaders
            of tomorrow.
          </p>
        </div>
        <div className=" w-1/2 h-full bg-black" />
      </div>
      <h1 className="lg:text-2xl xl:text-3xl text-center mt-8 font-medium">
        Welcome To Rainbow Academic Homes
      </h1>
      <div className="flex w-[96%] h-[580px] 2xl:h-[630px] mx-auto mt-6 gap-12">
        <div className=" w-[70%] h-[90%] 2xl:w-[65%] my-auto bg-black" />
        <div className="relative w-[45%] border-2 border-black rounded-2xl">
          <p className="xl:text-[22px] mt-4 2xl:mt-5">
            Located in Kolpatan-15, Pokhara, Nepal, Rainbow Academic Homes has
            been a reputable educational institution since its establishment in
            1995 AD. We pride ourselves on providing a nurturing and dynamic
            learning environment for our students. At RAH, we are committed to
            academic excellence, personal growth, and holistic development. Our
            dedicated faculty members are passionate educators who strive to
            {/* inspire and empower every student. Through our rigorous curriculum
            and innovative teaching methods, we foster a love for learning and
            critical thinking skills that prepare our students for future
            success. Our students have achieved remarkable milestones, both
            nationally and internationally, bringing home numerous awards and
            recognition. We take immense pride in their accomplishments, which
            showcase their talent, hard work, and the quality of education
            provided. */}
          </p>
          <button className="absolute border-[1px] border-black w-28 h-10 bottom-10 2xl:left-72">
            View More
          </button>
        </div>
      </div>
      <div className="relative w-[80%] 2xl:h-[530px] mx-auto mt-14 gap-12">
        <div className="absolute w-[65%] h-[85%] bottom-2 bg-[#FD7900F0] ml-12">
          <div className="w-[80%] h-[90%] ml-2 text-white  p-6">
            <h1 className="xl:text-2xl font-bold ml-4 ">
              Message from The Founder, Chairman
            </h1>
            <p className="xl:text-xl mt-3 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              accumsan leo non neque hendrerit, sed pulvinar odio sollicitudin.
              Sed mollis, nisl eu egestas scelerisque, velit ex aliquam massa,
              in consectetur eros erat et magna. Vivamus sit amet pharetra
              ligula. Suspendisse potenti. Integer laoreet leo sit amet eleifend
              fringilla. Nam fringilla, felis nec lacinia dictum, ipsum diam
              condimentum lacus, et tincidunt purus est ac purus. Nulla at erat
              in tortor suscipit hendrerit eget ac arcu. Ut tempus quam vel
              tellus consequat, id posuere nisi feugiat. Integer eu congue
              justo. Aenean ullamcorper tincidunt augue, vel interdum diam
              mollis eu. Sed at mi dui. Donec nec elit hendrerit, dignissim
              felis sed, laoreet lacus. Aliquam non nunc vitae velit euismod
              semper. Vivamus commodo scelerisque ex vitae malesuada.
            </p>
          </div>
        </div>
        <div className="absolute rounded-2xl top-0 right-2 w-[35%] h-[421px] bg-black" />
      </div>
      <div className="relative w-[80%] 2xl:h-[530px] mx-auto mt-10 gap-12">
        <div className="absolute w-[65%] h-[85%] top-0 right-0 bg-[#FD7900F0] ml-12">
          <div className="w-[80%] h-[90%] mx-auto text-white  p-6">
            <h1 className="xl:text-2xl font-bold ml-4 ">
              Message from The Founder, Chairman
            </h1>
            <p className="xl:text-xl mt-3 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              accumsan leo non neque hendrerit, sed pulvinar odio sollicitudin.
              Sed mollis, nisl eu egestas scelerisque, velit ex aliquam massa,
              in consectetur eros erat et magna. Vivamus sit amet pharetra
              ligula. Suspendisse potenti. Integer laoreet leo sit amet eleifend
              fringilla. Nam fringilla, felis nec lacinia dictum, ipsum diam
              condimentum lacus, et tincidunt purus est ac purus. Nulla at erat
              in tortor suscipit hendrerit eget ac arcu. Ut tempus quam vel
              tellus consequat, id posuere nisi feugiat. Integer eu congue
              justo. Aenean ullamcorper tincidunt augue, vel interdum diam
              mollis eu. Sed at mi dui. Donec nec elit hendrerit, dignissim
              felis sed, laoreet lacus. Aliquam non nunc vitae velit euismod
              semper. Vivamus commodo scelerisque ex vitae malesuada.
            </p>
          </div>
        </div>
        <div className="absolute rounded-2xl  bottom-2 left-14  w-[35%] h-[421px] bg-black" />
      </div>
      {/* Meet Our Team */}
      <h1 className="xl:text-3xl font-bold text-center mt-10 ">
              Meet Our Team
            </h1>
            <div className="grid grid-cols-3 mt-10 border w-[43%] h-[500px] gap-6  mx-auto">
                <div className=" bg-amber-300 "></div>
                <div className=" bg-amber-300 "></div>
                <div className=" bg-amber-300 "></div>
                <div className=" bg-amber-300 "></div>
                <div className=" bg-amber-300 "></div>
                <div className=" bg-amber-300 "></div>
            </div>
    </>
  );
}
