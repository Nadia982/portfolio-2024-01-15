import React from 'react'

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ========== logo start ========== */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h[-35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              N
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Natalie Gillam</h2>
              <p className="textsmallTextColor text-[14px] font-[500]">
                JS Developer
              </p>
            </div>
          </div>
          {/* ========== logo end ========== */}
          {/* ========== menu start ========== */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li><a className="text-smallTextColor font-[600]" href="#home">Home</a></li>
              <li><a className="text-smallTextColor font-[600]" href="#projects">Projects</a></li>
              <li><a className="text-smallTextColor font-[600]" href="#about">About</a></li>
              <li><a className="text-smallTextColor font-[600]" href="#contact">Contact</a></li>
            </ul>
          </div>
          {/* ========== menu end ========== */}

          {/* ========== menu right ========== */}
          {/* <div className="flex items-center gap-4"> */}
          <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 h-12 px-4 rounded-[8px]">
                  <i class="ri-mail-line"></i>Contact Me
                </button>
              </a>
            {/* <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in duration-300">
              <i class="ri-send-plane-line"></i>Contact Me
            </button> */}
            {/* <span className="text-3xl text-smallTextColor md:hidden cursor-pointer"><i class="ri-menu-line"></i></span> */}
          {/* </div> */}
          {/* ========== menu right end ========== */}

        </div>
      </div>
    </header>
  )
}

export default Header