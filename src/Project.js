import React from 'react'
import Projectcard from './Projectcard';
import './Project.css'
import img1 from './projectimages/calculator images.png';
import img2 from './projectimages/landingpageshoping.png';
import img3 from './projectimages/construction.png';
import img4 from './projectimages/medical.png';
import img5 from './projectimages/notepad.png';
import img6 from './projectimages/todolistimg.png';
const Project = () => {
    const projects  = [
        {
            tittle:"Calculator",
            desc:"lorem",
            imgurl: img1,
            view:"https://mohamedraiyan12.github.io/calculator/",
      },
        {
            tittle:"E-commerce",
            desc:"lorem",
            imgurl: img2,
            view:"https://mohamedraiyan12.github.io/e-commerce-ui-/",
        },
        {
            tittle:"construction-site",
            imgurl: img3,
            view:"https://mohamedraiyan12.github.io/Construction-site/",
        },
        {
            tittle:"Medicals",
            imgurl: img4,
            view:"https://mohamedraiyan12.github.io/medical/",
        },
        {
            tittle:"Notepad",
            desc: "lorem",
            imgurl: img5,
            view:"https://mohamedraiyan12.github.io/To-do-list/",
        },
        {
            tittle:"To-do List",
            desc:"lorem",
            imgurl: img6,
            view:"https://mohamedraiyan12.github.io/To-do-list/",
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





