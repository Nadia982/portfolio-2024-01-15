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
                className="flex gap-2 text-headingColor mt-12 font-[500] text-[1rem] leading-7"
              >I am a frontend web developer based near London, UK and have been building websites with React and JavaScript since 2022. I love creating sites and apps that solve real-world problems, and engage and delight users.</p>
              <div className="flex items-center gap-5 mt-5">
                <span className="text-smallTextColor text-[1rem] font-[500]">Let's connect:</span>
                <span>
                    <a aria-label="link to Natalie Gillam's LinkedIn profile" href="#linkedin" className="text-smallTextColor text-[3rem] font[-700]"><i class="ri-linkedin-box-fill"></i></a>
                </span>
                <span className="mb-1">
                    <a aria-label="link to Natalie Gillam's GitHub profile" href="#linkedin" className="text-smallTextColor text-[3rem] font[-700]"><i class="ri-github-fill"></i></a>
                </span>
              </div>
          </div>
          {/* ========== hero left end ========== */}
          {/* ========== hero right start ========== */}
          <div className="md:basis-1/3 flex justify-between text-center mt-10 flex-wrap gap-1 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[2rem]">
                    <CountUp start={0} end={12} duration={2} suffix="+"/> years
                </h2>
                <h4 className="text-headingColor font-[600] text-[1.2rem]">
                working in the tech industry
                </h4>
            </div>

            <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[2rem]">
                    <CountUp start={0} end={2} duration={2} suffix="+"/> years
                </h2>
                <h4 className="text-headingColor font-[600] text-[1.2rem]">
                building sites with React and JavaScript
                </h4>
            </div>

            <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[2rem]">
                    <CountUp start={0} end={3} duration={2} suffix="+"/> months
                </h2>
                <h4 className="text-headingColor font-[600] text-[1.2rem]">
                teaching Computer Science
                </h4>
            </div>

          </div>
          {/* ========== hero right end ========== */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
