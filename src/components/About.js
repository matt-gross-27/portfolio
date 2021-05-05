import React from 'react';
import Timer from './Clock'

import profilePicture from '../assets/about-pic.png';

function About() {

  return (
    <>
      <h2>About Me</h2>
      <div className="about">
        <div className="about-img-wrapper">
          <img className="about-img" src={profilePicture} alt="Matt Gross" />
        </div>

        <div className="about-bio-wrapper">
          <div className="bio">
            <p>
              Hi,
              <br />
              <br />
            I'm Matt. I've been learning how to code for the last <Timer />;
            three hours of which were figuring out how to integrate that clock into my first React application (this portfolio).
            <br />
            <br />
            Take a look at some of the web apps I've built over on the Portfolio tab, and feel free to get in touch with me through the Contact Form. 
              <br />
              <br />
            Cheers!
          </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default About