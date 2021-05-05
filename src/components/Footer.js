import React from 'react';
var { SocialIcon } = require('react-social-icons');

function Footer() {
  return (

    // --color1: hsl(122, 100%, 12%);
    // --color2: hsl(153, 70%, 75%);

    <footer>
        <SocialIcon url="mailto:mbgross111@gmail.com" bgColor="hsl(122, 100%, 12%)" fgColor="hsl(153, 70%, 75%)"/>
        <SocialIcon url="https://github.com/matt-gross-27" target="_blank" rel="noreferrer"/>
        <SocialIcon url="https://www.linkedin.com/in/matthew-gross-108025201/" target="_blank" rel="noreferrer"/>
    </footer>
  )
}

export default Footer;