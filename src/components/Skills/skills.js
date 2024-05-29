import React from 'react';
import './skills.css';
import pythonIcon from '../../assets/pythonLogo.png';
import sqlIcon from '../../assets/sqlLogo.png';
import aiMlIcon from '../../assets/aimlLogo.png';
import programmingIcon from '../../assets/programmingLogo.png';

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-description">
        Proficient in programming with expertise in Python and Java. Skilled in creating front-end applications using React, Django, Flutter and integrating it with the backend. Excels in building advanced models using machine learning and developing web applications.
      </p>
      <div className="skills-container">
        <div className="skill-category">
          <img src={pythonIcon} alt="Python" className="skill-icon" />
          <h3>Python</h3>
          <p>Pandas, NumPy, Scikit-Learn, Seaborn, Plotly, NLTK, SpaCy, SciPy, TensorFlow</p>
        </div>
        <div className="skill-category">
          <img src={sqlIcon} alt="SQL" className="skill-icon" />
          <h3>SQL</h3>
          <p>Oracle, MySQL, PostgreSQL</p>
        </div>
        <div className="skill-category">
          <img src={aiMlIcon} alt="AI/ML" className="skill-icon" />
          <h3>AI/ML</h3>
          <p>Classification, Deep Learning, Time-Series, Regression</p>
        </div>
        <div className="skill-category">
          <img src={programmingIcon} alt="Programming Languages" className="skill-icon" />
          <h3>Programming Languages</h3>
          <p>Java, C, C++, React, Angular</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;