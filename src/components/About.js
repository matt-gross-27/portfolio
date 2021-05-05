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
            I'm Matt and I've been learning how to code for the last <Timer />.
            Three hours of which, were figuring out how to implement that clock in my first React application, this portfolio.
            Please take a look at some of the stuff I've built over on the portfolio tab, and feel free to get in touch with the contact form or checkout my resume.
              <br />
              <br />
            Cheers
          </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default About;;