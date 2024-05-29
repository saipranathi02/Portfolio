import React from 'react';
import './intro.css';
import bg from '../../assets/image.avif';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Sai Pranathi</span><br/>Software Developer</span>
            <p className='introPara'>
            I strongly aspire to have a career in AIML domain
            </p>
        </div>
        <img src={bg} alt='Profile' className='bg'/>

    </section>
  )
}

export default Intro