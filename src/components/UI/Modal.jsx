import React from 'react';
import projects from '../../assets/data/portfolioData';

const Modal = ({activeID, setShowModal}) => {
    const project = projects.find(project =>  project.id === activeID);

  return (
    <div>
        <img src={project.imgUrl} alt={project.alt} />


    </div>
  )
}

export default Modal