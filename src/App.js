import React, { useState } from 'react';
import Nav from './components/Nav'
import Footer from './components/Footer'
import PortfolioList from './components/PortfolioList'
import myProjects from './utils/myProjects'
import './App.css'

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
      </main>

      <Footer />
    </>
  );
}

export default App;
