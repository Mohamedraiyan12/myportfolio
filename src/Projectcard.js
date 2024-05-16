import React from 'react';
import './Projectcard.css';
export const Projectcard = ({ tittle, imgurl, view })=> {
    return(
        <div className='projectcard'>
        <div className="project">
            <img src = {imgurl} alt='images'/>
            <h4>{tittle}</h4>
            <a href={view}>view project</a>
        </div>
    </div>
    )
}
export default Projectcard;