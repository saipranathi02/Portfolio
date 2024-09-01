import React from 'react';
import './projects.css';
import pythonIcon from '../../assets/diabeticreti.jpg';
import aiMlIcon from '../../assets/Facerecog.png';
import sqlIcon from '../../assets/mapTranslation.jpg';


const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <p>Here is a compilation of projects I've undertaken both as part of my academic coursework and during my personal time.</p>
      <div className="projects-grid">
        <div className="project-card">
        <a href="https://github.com/saipranathi02/DiabeticRetinopathy" target="_blank" rel="noopener noreferrer">
          <img src={pythonIcon} alt="Diabetic Retinopathy Detection" />
          <p>Diabetic Retinopathy Detection </p>
        </a>
        </div>
        <div className="project-card">
        <a href="https://github.com/saipranathi02/maptranslation" target="_blank" rel="noopener noreferrer">
          <img src={sqlIcon} alt="Map Translation" style={{height:"78%"}}/>
          <p>Map Translation</p>
        </a>
        </div>
        <div className="project-card">
          <a href="https://github.com/saipranathi02/attendance" target="_blank" rel="noopener noreferrer">
          <img src={aiMlIcon} alt="Attendance using Face Recognition" />
          <p>Attendance using Face Recognition</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;


