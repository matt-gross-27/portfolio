import React from 'react';

function Nav(props) {
  const { navLinks = [], activeNav, setActiveNav } = props

  return (

    <header>
      <h1>Matt Gross</h1>
      <nav>
        <ul>
          {navLinks.map(linkText => (
            <li
              className={`${activeNav === linkText && 'isActiveNav'}`}
              onClick={() => setActiveNav(linkText)}
              key={linkText}
            >
              {linkText}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav;;