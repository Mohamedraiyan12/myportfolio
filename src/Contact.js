import React from 'react';
import './Contact.css';
import { Element } from 'react-scroll';
// import { Input } from '@material-ui/core';
const Contact = () => {
  return (
    <Element name ='contact' className='conatctcontent'>
        <div className='contacttop'>
                <h3>Contact</h3>
                <p>Feel free to reach out to me for any questions or opportunities!</p>
        </div>
    <div className="formcontact">
    <form>
      <div className="email">
      <input type="email" 
          placeholder='enter  your Email'
          id='email'
      />
      </div>
      <div className="name">
      <input type="text" 
          placeholder='Enter Your name'
          id='username'
      />
      </div>
      <div className="msg">
        <textarea cols={41} rows={30}  placeholder='Enter Your Message'></textarea>
      </div>
      <div className="btn">
        <button type='submit'>Submit Now</button>
      </div>
   </form>
   </div>
    </Element>

  )
}

export default Contact;