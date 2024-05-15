import React from 'react';
import './Projectcard.css';
export const Projectcard = ({ tittle, imgurl })=> {
    return(
        <div className='projectcard'>
        <div className="project">
            <img src = {imgurl} />
            <h4>{tittle}</h4>
        </div>
    </div>
    )
}
export default Projectcard;