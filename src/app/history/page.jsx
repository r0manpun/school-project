import Image from "next/image";
import React from "react";
import { Open_Sans, Playfair_Display } from "next/font/google";

const sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
});

const History = () => {
  const para = (
    <div className={playfair.className}>
      <p className=" text-[1.3vw] mx-auto mt-1 lg:mt-4 px-6 lg:px-10">
        Located in Kolpatan-15, Pokhara, Nepal, Rainbow Academic Homes has been
        a reputable educational institution since its establishment in 1995 AD.
        We pride ourselves on providing a nurturing and dynamic learning
        environment for our students. At RAH, we are committed to academic
        excellence, personal growth, and holistic development. Our dedicated
        faculty members are passionate educators who strive to inspire and
        empower every student. Through our rigorous curriculum and innovative
        teaching methods, we foster a love for learning and critical thinking
        skills that prepare our students for future success.<br/> Our students have
        achieved remarkable milestones, both nationally and internationally,
        bringing home numerous awards and recognition. We take immense pride in
        their accomplishments, which showcase their talent, hard work, and the
        quality of education provided. Beyond academics, we believe in nurturing
        well-rounded individuals. Our school offers a wide range of
        extracurricular activities, including sports, arts, cultural events, and
        community service initiatives. We encourage our students to explore
        their passions and develop important life skills, fostering their
        overall growth and character development.<br/> Rainbow Academic Homes is a
        vibrant and inclusive community that values diversity and promotes a
        safe and supportive learning environment. We embrace the rich cultural
        heritage of Nepal and encourage global perspectives, preparing our
        students to thrive in an interconnected world.<br/> Join us at Rainbow
        Academic Homes, where students discover their potential, achieve their
        dreams, and become lifelong learners. Should you have any inquiries or
        would like to visit our campus, please do not hesitate to contact us. We
        look forward to welcoming you to our educational family at Rainbow
        Academic Homes in beautiful Pokhara, Nepal.
      </p>
    </div>
  );

  return (
    <div className={sans.className}>
      <div className="bg-gradient-to-r from-gray-100 to-violet-100">
        <div className="max-w-[1290px] mx-auto">
          <h3 className="flex items-center uppercase ml-5 lg:ml-8 pt-8 lg:pt-16 text-[1.5vw] font-bold">
            about <hr className="w-[5vw] ml-1 lg:ml-3 border-black" />
          </h3>
          <h1 className="uppercase text-[2vw] font-semibold ml-5 lg:ml-8 lg:mt-2">
            our history
          </h1>
          {para}
          <h1 className="mt-10 text-xl font-semibold text-center">
            &quot;Reflecting on Our Roots&quot;
          </h1>
          <div className="flex flex-col w-11/12 sm:w-auto max-w-[1200px] mt-5 lg:mt-10 mx-auto gap-y-5 lg:gap-y-8 pb-10 px-3 sm:px-6">
            <div className="flex gap-4 sm:gap-6 lg:gap-10  h-24 sm:h-44 md:h-56 lg:h-72 xl:h-[369px]">
              <Image
                src="/assets/history/history1.png"
                width={640}
                height={480}
                className="w-[50%] h-full object-cover"
                alt="history"
              />
              <Image
                src="/assets/history/history2.png"
                width={640}
                height={480}
                className="h-full object-cover"
                alt="history"
              />
            </div>
            <div className="flex gap-4 sm:gap-6 lg:gap-10  h-24 sm:h-44 md:h-56 lg:h-72 xl:h-[369px]">
              <Image
                src="/assets/history/history3.jpg"
                width={640}
                height={480}
                className="h-full object-cover"
                alt="history"
              />
              <Image
                src="/assets/history/history4.png"
                width={640}
                height={480}
                className="w-[50%] h-full object-cover"
                alt="history"
              />
            </div>
            <div className="flex gap-4 sm:gap-6 lg:gap-10  h-24 sm:h-44 md:h-56 lg:h-72 xl:h-[369px]">
              <Image
                src="/assets/history/history5.png"
                width={640}
                height={480}
                className="w-[50%] h-full object-cover"
                alt="history"
              />
              <Image
                src="/assets/history/history6.png"
                width={640}
                height={480}
                className="h-full object-cover"
                alt="history"
              />
            </div>
            <div className="flex gap-4 sm:gap-6 lg:gap-10  h-24 sm:h-44 md:h-56 lg:h-72 xl:h-[369px]">
              <Image
                src="/assets/history/history7.png"
                width={640}
                height={480}
                className="h-full object-cover"
                alt="history"
              />
              <Image
                src="/assets/history/history8.png"
                width={640}
                height={480}
                className="w-[50%] h-full object-cover"
                alt="history"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
