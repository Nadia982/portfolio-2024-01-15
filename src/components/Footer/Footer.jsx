import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#12141e] pt-12">
    <div className="container">
      <div className="sm:flex items-center justify-between md:gap-8">
        <div className="w-full">
          <h2 className="text-[2rem] leading-10 text-center text-white font-[600] md:text-[2rem]">
            Get in touch
          </h2>
          <div className="flex h-20 items-center justify-center gap-4 mt-0">
          <span>
                    <a aria-label="link to Natalie Gillam's LinkedIn profile" href="#linkedin" className="text-white text-[3rem] font[-700]"><i class="ri-linkedin-box-fill"></i></a>
                </span>
                <span className="mb-1">
                    <a aria-label="link to Natalie Gillam's GitHub profile" href="#linkedin" className="text-white text-[3rem] font[-700]"><i class="ri-github-fill"></i></a>
                </span>
                <span>
                    <a aria-label="email Natalie Gillam" href="#mail" className="text-white text-[3rem] font[-700]"><i class="ri-mail-line"></i></a>
                </span>
                
                </div>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer