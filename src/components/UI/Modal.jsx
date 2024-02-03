import React from "react"
import projects from "../../assets/data/portfolioData";

const Modal = ({activeID, setShowModal}) => {
  const project = projects.find(project => project.id ==activeID);
  return (
    <div className ="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className = "mt-14 flex-column m-auto items-end justify-end border-gray-500 border-4 h-[80vh] w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div className ="w-1/2 m-auto border-4 border-gray-300 rounded-[8px]">
          <figure>
            <img className="rounded-[8px]" src={project.imgUrl} alt={project.imgUrl}/>
          </figure>
        </div>
        <div className="m-auto">
          <h2 className="text-2xl text-headingColor font-[700] my-5">{project.title}
          </h2>
          <p className = "text-[1rem] leading-7 text-smallTextColor">{project.description}</p>
          <div className = "mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[1.2rem] text-[700] ">Technologies:</h4>
            {project.technologies.map((item, index) => (
              <span key={index}
              className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0">
                {item}
              </span>))}
          </div>
          <a href={project.siteUrl}>
            <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">Live Site</button>
          </a>
        </div>
        <button onClick={()=>setShowModal(false)} className="w-[2.1rem] h-[2.1rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[3rem] flex items-center pb-1 justify-center rounded-[3px] leading-0 cursor-pointer">&times;</button>
      </div>
    </div>
  )

}
export default Modal;