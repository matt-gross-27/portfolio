import React from 'react';
import Timer from './Clock'

import profilePicture from '../assets/about-pic.png';

function About() {

  return (
    <>
      <h2>Hi There</h2>
      <div className="about">
        <div className="about-img-wrapper">
          <img className="about-img" src={profilePicture} alt="Matt Gross"/>
        </div>
        <div className="about-bio-wrapper">
          <div className="bio">
          <blockquote>
            To whom it may concern,
            <br />
            <br />
            I've been learning how to code for the last <Timer/>. 
            Three hours of which, were figuring out how to implement this state changing counter in my first React application, this portfolio.
            I've really enjoyed every little coding challenge that takes way longer than it should.
            Getting stuck in the weeds on how to do some little thing that doesn't even improve the application that much. Just to be able to do it. 
            Anyway take a look at some of the stuff I've built over on the portfolio tab, get in touch with the contact form, or checkout my resume.
            <br />
            <br />
            Cheers


          </blockquote>
          </div>
        </div>
          
      </div>
    </>
  );
}

export default About;;