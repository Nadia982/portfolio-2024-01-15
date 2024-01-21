import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container lg:pt-5">
        <div className="text-center flex gap-5 flex-col">
          <h2 className="text-headingColor font-[700] text-[2.4rem]">About</h2>
          <p className=" lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[1rem] leading-7">
            I have worked in the tech industry for the past 12 years, most
            recently as a Senior Paralegal at a global IT services company
            headquartered in London, where I work with a global remotely
            distributed team, and have helped the business to expand its
            operations into 24 new countries.
          </p>
          <p className=" lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[1rem] leading-7">
            My real passion and new professional focus is frontend web
            development.
          </p>
          <p className=" lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[1rem] leading-7">
            I am looking for a role as a JavaScript Developer that will enable
            me to learn as much as possible about new and existing technologies
            while building apps and sites to help your business flourish. I
            enjoy collaborating with and learning from others while sharing my
            knowledge and contributing to a team.
          </p>
        </div>
      </div>
      {/* ============= Work/education history section =============*/}

      <div className="flex flex-col justify-center sm:py12">
        <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0 ">
          <div className="relative text-gray-700 antialiased text-sm text-semibold">
            {/* ====== vertical line running through the middle ====== */}
            <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
            {/* ====== left card ====== */}
            <div className="mt-12 sm:mt-12 sm:mb-0 ">
              <div className="flex items-center flex-col sm:flex-row ">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8 ">
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-50"
                    >
                      <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                        Frontend Development
                      </h3>
                      <p className="text-[1rem] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ex, error.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ====== right card ====== */}
            <div className="mt-0 sm:mt-0 sm:mb-0 ">
              <div className="flex items-center flex-col sm:flex-row ">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8 ">
                    <div
                      data-aos="fade-left"
                      data-aos-duration="1000"
                      className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-50"
                    >
                      <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                        Computer Science Tutor
                      </h3>
                      <p className="text-[1rem] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ex, error.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ====== bottom left card ====== */}
            <div className="mt-6 sm:mt-0 sm:mb-0 ">
              <div className="flex items-center flex-col sm:flex-row ">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8 ">
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-50"
                    >
                      <p className="text-[1rem] text-smallTextColor font-[700] group-hover:text-white leading-7 ">2021</p>
                      <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                        Mimo Bootcamp
                      </h3>
                      <p className="text-[1rem] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ex, error.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ====== bottom right card ====== */}
            <div className="mt-0 sm:mt-0 sm:mb-0 ">
              <div className="flex items-center flex-col sm:flex-row ">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8 ">
                    <div
                      data-aos="fade-left"
                      data-aos-duration="1200"
                      className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-50"
                    >
<p className="text-[1rem] text-smallTextColor font-[700] group-hover:text-white leading-7 ">
                      2012-present
                      </p>
                      <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                        Senior Paralegal - tech company (SME)
                      </h3>
                      <p className="text-[1rem] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ex, error.
                      </p>


                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
