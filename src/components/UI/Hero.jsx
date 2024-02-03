import React from "react";
import CountUp from "react-countup";
import LondonImg from '../../assets/images/london-6104682_640.png';
import Map from "../../assets/images/UK.png";

const Hero = () => {
  return (
    <section className="pt-0" id="hero">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ========== hero left content ========== */}
          <div className="w-full md:basis-1/2">
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[700] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Natalie Gillam,<br />a JavaScript Developer<br />based near London, UK
            </h1>
            
            {/* <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            > */}

              {/* <a
                href="#projects"
                className="text-smallTextColor font-[700] text-[16px] border-b border-solid border-smallTextColor"
              >
                See projects
              </a> */}
             
            {/* </div> */}
            <p
                data-aos="fade-left"
                data-aos-duration="1500"
                className=" text-headingColor mt-8 font-[500] text-[1rem] leading-7"
              >I have been building websites with React and JavaScript since 2022. I love creating sites and apps that solve real-world problems, and engage and delight users.</p>
              
              <h3 className="text-smallTextColor text-[1.3rem] mt-8 md:mb-0 sm:mb-4 mr-0 font-[700]">Let's Connect!</h3>
              <div className="flex h-20 items-center gap-4 mt-0">
                <span className="text-smallTextColor text-[1rem] font-[500]">Feel free to send me a <a aria-label="link to Natalie Gillam's LinkedIn profile" href="#linkedin" className="font-[700] underline underline-offset-2">LinkedIn connection request</a></span>
                <span>
                    <a aria-label="link to Natalie Gillam's LinkedIn profile" href="#linkedin" className="text-headingTextColor text-[3rem] font[-700]"><i class="ri-linkedin-box-fill"></i></a>
                </span>
                <span className="mb-1">
                    <a aria-label="link to Natalie Gillam's GitHub profile" href="#linkedin" className="text-headingTextColor text-[3rem] font[-700]"><i class="ri-github-fill"></i></a>
                </span>
                <img className="mb-6" src={LondonImg} alt="London skyline" width="120" />
                <img className="mb-10" src={Map} alt="outline of the UK" width="50" />
              </div>
              {/* <img className="mt-0" src={LondonImg} alt="London skyline" width="150" /> */}
          </div>
          {/* ========== hero left end ========== */}
          {/* ========== hero right start ========== */}
          <div className="md:basis-1/3 flex justify-between lg:text-right mt-10 flex-wrap gap-1 md:mt-0 md:flex-col md:text-left sm:text-left">
          {/* <div className="md:basis-1/3 flex justify-between text-center mt-10 flex-wrap gap-1 md:mt-0 md:flex-col md:justify-end md:text-end"> */}
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
