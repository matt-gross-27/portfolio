import React from 'react';
var { SocialIcon } = require('react-social-icons');

function PortfolioList(props) {
  const { myProjects } = props
  // myProjects[i] = { name, img, isDeployed, url, repo, featured }

  const iconSize = {
    height: '35px',
    width: '35px'
  };

  return (
    <>
      <h2>My Projects</h2>
      <div className="portfolio-wrapper">
        {
          myProjects.map(({ name, img, isDeployed, url, repo, featured }) => (
            <div key={repo} className={`project-card ${featured && 'featured'}`}>
              <h3 className="project-name">{name}</h3>
              <img className="project-img" src={require(`../assets/${img}`).default} alt={name} />
              <div className="project-links">
                <SocialIcon style={iconSize} url={repo} target="_blank"/>
                {isDeployed && (<a className="deployed-link" href={url} target="_blank">🌐</a>)}
              </div>
            </div>

          ))
        }
      </div>
    </>
  )
}

export default PortfolioList;