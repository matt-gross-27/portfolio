import React from 'react';
var { SocialIcon } = require('react-social-icons');

function Footer() {
  return (
    <footer>
        <SocialIcon url="mailto:mbgross@gmail.com" bgColor="hsl(122, 100%, 12%)" fgColor="hsl(122, 100%, 40%)"/>
        <SocialIcon url="https://github.com/matt-gross-27" target="_blank"/>
        <SocialIcon url="https://www.linkedin.com/in/matthew-gross-108025201/" target="_blank"/>
    </footer>
  )
}

export default Footer;