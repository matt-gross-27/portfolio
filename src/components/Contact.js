import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ nom: '', email: '', message: '' });
  const { nom, email, message } = formState;

  const [errMsgs, setErrMsgs] = useState([]);

  const nomErr = 'enter your name'
  const emailErr = 'enter a valid email address'
  const messageErr = 'include a message'

  function removeErrMsgs(array, searchTerm) {
    const index = array.indexOf(searchTerm);
    if (index > -1) {
      array.splice(index, 1);
      setErrMsgs(array);
    }
  }

  function addErrMsgs(array, searchTerm) {
    const index = array.indexOf(searchTerm);
    if (index === -1) {
      array.push(searchTerm);
      setErrMsgs(array);
    }
  }

  function handleBlur(e) {
    if (e.target.name === 'email') {
      const isValidEmail = validateEmail(e.target.value);
      isValidEmail ? removeErrMsgs([...errMsgs], emailErr) : addErrMsgs([...errMsgs], emailErr);
    }

    if (e.target.name === 'nom') {
      e.target.value.length ? removeErrMsgs([...errMsgs], nomErr) : addErrMsgs([...errMsgs], nomErr);
    }

    if (e.target.name === 'message') {
      e.target.value.length ? removeErrMsgs([...errMsgs], messageErr) : addErrMsgs([...errMsgs], messageErr);
    }

    !errMsgs.length && (setFormState({ ...formState, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (errMsgs.length === 0) {
      // send me an email

      // reset form state
      setFormState({ nom: '', email: '', message: '' });

      // clear form
      e.target.reset()
    }
  }

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} id="contact-form">
        <div className="form-group">
          <label htmlFor="nom">Name</label>
          <input name="nom" type="text" defaultValue={nom} onBlur={handleBlur} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" defaultValue={email} onBlur={handleBlur} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" rows="6" type="text" defaultValue={message} onBlur={handleBlur} />
        </div>

        {errMsgs.length === 1 && <div className="form-group err-msg">{`Please ${errMsgs[0]}`}</div>}
        {errMsgs.length === 2 && <div className="form-group err-msg">{`Please ${errMsgs[0]} and ${errMsgs[1]}`}</div>}
        {errMsgs.length === 3 && <div className="form-group err-msg">{`Please fill out the form`}</div>}

        <div className="form-group">
          <button className="btn" type="submit">Send</button>
        </div>

      </form>
    </section>
  )
}

export default Contact;