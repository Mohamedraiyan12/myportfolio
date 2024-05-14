
import React from 'react'
import { Element } from 'react-scroll'
import skillimg from '../../myportfolio/src/images/skillsetimage.jpg'; 
import './Skillscontainer.css';
import { LinearProgress } from '@material-ui/core';
const Skillscontainer = () => {
  
  return (
    <Element name='skill' className='skill_container'>
      <div className='skill_containerimage'>
        <img src={skillimg} alt="software developer images"/>
      </div>
      <div className='skill_containertext'>
        <h2>Skillset</h2>
        <div className='skillscontainer_skillset'>
          <h3>React js</h3>
        <div className='skillslider1'>
            <LinearProgress variant='determinate' value={95}></LinearProgress>
        </div>
        </div>
        <div className='skillscontainer_skillset'>
          <h3>Javascript</h3>
        <div className='skillslider1'>
            <LinearProgress variant='determinate' value={99}></LinearProgress>
        </div>
        </div>
        <div className='skillscontainer_skillset'>
          <h3>HTML</h3>
        <div className='skillslider1'>
            <LinearProgress variant='determinate' value={95}></LinearProgress>
        </div>
        </div>
        <div className='skillscontainer_skillset'>
          <h3>CSS</h3>
        <div className='skillslider1'>
            <LinearProgress variant='determinate' value={90}></LinearProgress>
        </div>
        </div>
        <div className='skillscontainer_skillset'>
          <h3>Bootstrap</h3>
        <div className='skillslider1'>
            <LinearProgress variant='determinate' value={80}></LinearProgress>
        </div>
        </div>
        <div className='skillscontainer_skillset'>
          <h3>MYSQL</h3>
        <div className='skillslider1'>
            <LinearProgress variant= "determinate" value={75}></LinearProgress>
        </div>
        </div>
        <div className='skillscontainer_skillset'>
          <h3>Github</h3>
        <div className='skillslider1'>
            <LinearProgress variant="determinate" value={90}></LinearProgress>
        </div>
        </div>
      </div>
    </Element>
  )
}
export default Skillscontainer;
