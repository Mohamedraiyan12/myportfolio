import React from 'react'
import { Link } from 'react-scroll';
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
        <h3>
        Portfol<span>io</span>
        </h3>
        </div>
        <div className='header_right'>
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
  )
}

export default Header