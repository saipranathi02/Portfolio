import React from 'react';
import './contact.css';
import linkedinIcon from '../../assets/linkedin.jpg'; // Replace with actual path to your LinkedIn icon
import githubIcon from '../../assets/github.jpg'; // Replace with actual path to your GitHub icon

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>Feel free to contact me about exciting opportunities or any questions regarding my projects!</p>
      <div className="contact-details">
        <div className="contact-item">
          <h2>Email</h2>
          <p>kakarlamudy.saipranathi9@gmail.com</p>
        </div>
        <div className="contact-item">
          <h2>Location</h2>
          <p>New York, USA</p>
        </div>
        <div className="contact-item">
          <h2>Phone</h2>
          <p>+1(838)433-7376</p>
        </div>
        <div className="contact-item">
          <h2>Socials</h2>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/sai-pranathi-kakarlamudy-33b255232/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/saipranathi02" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
