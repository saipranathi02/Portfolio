import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpg';
import contact from '../../assets/contact.jpg'
import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
        <Link to="home" className='desktopMenuListItem' smooth={true} duration={500} offset={-60}>Home</Link>
        <Link to="about" className='desktopMenuListItem' smooth={true} duration={500} offset={-60}>About</Link>
        <Link to="skills" className='desktopMenuListItem' smooth={true} duration={500} offset={-60}>Skills</Link>
        <Link to="portfolio" className='desktopMenuListItem' smooth={true} duration={500} offset={-60}>Portfolio</Link>
        </div>
        <Link to="contact" smooth={true} duration={500} offset={-60}>
        <button className='desktopBtn'>
          <img src={contact} alt='contact me' className='desktopMenuImg'/>
          Contact Me
        </button>
      </Link>

    </nav>
  )
}
export default Navbar
