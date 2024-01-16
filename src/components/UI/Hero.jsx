import React from "react";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ========== hero left content ========== */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[700] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Natalie Gillam, a <br /> JavaScript Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line"></i>Contact Me
                </button>
              </a>
              <a
                href="#projects"
                className="text-smallTextColor font-[700] text-[16px] border-b border-solid border-smallTextColor"
              >
                See projects
              </a>
             
            </div>
            <p
                data-aos="fade-left"
                data-aos-duration="1500"
                className="flex gap-2 text-headingColor mt-12 font-[500] text-[16px] leading-7 sm:pl-14 sm:pr-10"
              ><span><i class="ri-apps-2-line"></i></span>I am a frontend web developer based near London, UK and have been building websites with React and JavaScript since 2022. I love creating sites and apps that solve real-world problems, and engage and delight users.</p>
          </div>
          {/* ========== hero left end ========== */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
