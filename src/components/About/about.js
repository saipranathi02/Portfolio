import React from 'react';
import './about.css';
import profilePic from '../../assets/profilePhoto.jpg'; // Add a path to your profile picture

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <img src={profilePic} alt="Amit Manocha" className="profile-pic" />
        <div className="about-content">
          <h1>About</h1>
          <p className="description">
          I am an undergraduate in Artificial Intelligence and Machine Learning from Keshav Memorial Institute of Technology, Hyderabad.Curiosity in learning something new drives me always and keeps me going further. I strongly aspire to have a career in AIML domain but I don't restrict myself to this. I also wish to build my skills in the domain of Full Stack Development.When I am not at work, I volunteer at NGOs and also enjoy dancing.
          </p>
          <div className="experience">
            <h2>Experience</h2>
            <div className="experience-item">
              <h3><i>ADP - Global Product and Technology Intern</i></h3>
              <span className="date">July 2023 - Oct 2023</span>
              <ul>
                <li>Collaborated with cross-functional teams to enhance Accounts Mapping Import Tool’s efficiency in creating payroll journal entries and updating general ledger.</li>
                <li>Developed responsive and user-friendly UI components using Angular thereby improving accessibility & overall user experience.</li>
                <li>Implemented a robust delete feature allowing users to selectively remove records and orchestrated seamless communication between front-end and back-end systems by integrating Angular with SpringBoot APIs.</li>
                <li>Played a pivotal role in ensuring synchronization of deleted records through well-crafted API calls, optimizing data integrity.</li>
              </ul>
            </div>
            <div className="experience-item">
              <h3><i>Experian - Associate Product Engineer (Intern)</i></h3>
              <span className="date">Nov 2023 - July 2024</span>
              <ul>
                <li>Actively engaged in the Experian team as an intern, with a focus on developing skills in Java programming, Springboot.</li>
                <li>Spearheading React-based UI development to automate and optimize API call processes, enhancing team productivity and user experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
