import React from "react";

function Resume(props) {

  const { pdf } = props;

  return (
    <>
      <h2>My Resume</h2>
      <iframe className='pdf' src={pdf} title="my-resume"></iframe>
    </>
  );
}

export default Resume;