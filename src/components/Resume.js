import React from "react";

function Resume(props) {

  const { pdf } = props;

  return (
    <>
      <h2>Resume</h2>
      {/* <iframe className='pdf' src={pdf} title="my-resume"></iframe> */}
      <br />
      <a href={pdf} target="_blank" rel="noreferrer">View full resume</a>
      <br />
      <div className="skills">
        <ul>
          <li>Git</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Web APIs</li>
          <li>REST APIs</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Node</li>
          <li>Express</li>
          <li>Object Oriented Programing</li>
          <li>SQL</li>
          <li>Sequelize</li>
          <li>MVC architecture</li>
          <li>Big O notation</li>
          <li>Progressive Web Apis</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>React</li>
          <li>GraphQL</li>
          <li>Excel</li>
          <li>Google Sheets</li>
          <li>Accounting</li>
          <li>{'FP&A'}A</li>
        </ul>
      </div>
    </>
  );
}

export default Resume;