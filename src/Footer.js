import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footercontent">
        <div className='footer-heading'>
            <h3>Mohamed Raiyan M</h3>
        </div>
        <div className="footer-header">
        <div className="footer-content">
        <Link to = "home" smooth={true} duration={500}>
        <h3>Home</h3>
        </Link>
        <Link to = "about" smooth={true} duration={500}>
        <h3>About</h3>
        </Link>
        <Link to = "skill" smooth={true} duration={500}>
        <h3>Skills</h3>
        </Link>
        <Link to = "project" smooth={true} duration={500}>
        <h3>Projects</h3>
        </Link>
        <Link to = "contact" smooth={true} duration={500}>
        <h3>Contact</h3>
        </Link>
        </div>
        </div>
        <div className="footer-copyrights">
        <p>© 2024 All rights reserved.</p>
        </div>
    </div>
  )
}
export default Footer;

