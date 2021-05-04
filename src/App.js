import React, { useState } from 'react';

import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

import About from './components/About';
import Contact from './components/Contact';
import PortfolioList from './components/PortfolioList';
import Resume from './components/Resume';

import myProjects from './utils/myProjects';
import myResume from './assets/Matthew_Gross_Resume.pdf';


function App() {
  const [navLinks] = useState(["About Me", "Portfolio", "Contact", "Resume"]);
  const [activeNav, setActiveNav] = useState("About Me");

  return (
    <>
      <Nav
        navLinks={navLinks}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      <main>
        { activeNav === "Portfolio" && <PortfolioList myProjects={myProjects} /> }
        { activeNav === "Contact" && <Contact /> }
        { activeNav === "Resume" && <Resume pdf={myResume} /> }
        { activeNav === "About Me" && <About /> }
      </main>

      <Footer />
    </>
  );
}

export default App;
