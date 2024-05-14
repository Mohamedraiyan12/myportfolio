import React from 'react'
import './About.css';
import aboutimg from '../../myportfolio/src/images/aboutimage.png';
import { Element } from 'react-scroll';
const About = () => {
  return (
    <Element name='about' className="aboutcontent">
        <div className='aboutouter'>
            <div className='about-content'>
                <h2>ABOUT ME</h2>
                <p>Lorem, ipsum dolor sit amet consectetujj adipisicing elit. Numquam suscipit provident saepe quo officiis itaque harum voluptatibus in, expedita illo, voluptatum alias, possimus similique voluptas veniam ullam laudantium molestiae quibusdam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure minus placeat magni voluptates ipsa assumenda eaque eligendi, voluptatem architecto culpa consequuntur omnis veniam nostrum possimus esse magnam molestiae officia?</p>
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