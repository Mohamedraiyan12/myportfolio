import React from 'react'
import Projectcard from './Projectcard';
import './Project.css'
import img1 from '../../myportfolio/src/projectimages/calculator images.png';
import img2 from '../../myportfolio/src/projectimages/landingpage(shopping).png';
import img3 from '../../myportfolio/src/projectimages/construction.png';
import img4 from '../../myportfolio/src/projectimages/medical.png';
import img5 from '../../myportfolio/src/projectimages/notepad.png';
import img6 from '../../myportfolio/src/projectimages/todolistimg.png';
const Project = () => {
    const projects  = [
        {
            tittle:"Calculator",
            desc:"lorem",
            imgurl: img1,
      },
        {
            tittle:"E-commerce",
            desc:"lorem",
            imgurl: img2,
        },
        {
            tittle:"construction-site",
            imgurl: img3,
        },
        {
            tittle:"Medical",
            imgurl: img4
        },
        {
            tittle:"web design",
            desc: "lorem",
            imgurl: img5,
        },
        {
            tittle:"To-do List",
            desc:"lorem",
            imgurl: img6,
        },
    ]
    return (
    <div className="container">
       <div className="heading">
            <h3>Projects</h3>
            <p><p>I have worked on a wide range of projects. Here are some of my projects.</p></p>
       </div>
        <div className="projectcontainer">
               {
                    projects.map((project, index) =>{
                        return(
                            <Projectcard
                            key = {index}
                            {...project}
                            />
                        )
                    })
                }
        </div>
    </div>
  )
}
export default Project;





