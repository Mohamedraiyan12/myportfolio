import React from 'react'
import './About.css';
import aboutimg from '../src/images/aboutimage.png';
import { Element } from 'react-scroll';
const About = () => {
  return (
    <Element name='about' className="aboutcontent">
        <div className='aboutouter'>
            <div className='about-content'>
                <h2>ABOUT ME</h2>
                <p> I Am Mohamed Raiyan. i did my graduate in B.E computer Science and Engineering from AALIM MUHAMMAD SALEGH COLLEGE OF ENGINEERING. I pursing a MERN stack Developer at Innovate Technology.I have done many project using Javascript, CSS,HTML and React js.</p>
                <p></p>
                <button>Read More</button>
            </div>
            <div className='about-img'>
            <img src={aboutimg} alt='img' width={390} height={350}/>
            </div>
        </div>
    </Element>
  )
}
export default About;