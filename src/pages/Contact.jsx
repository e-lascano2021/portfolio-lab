import { useRef } from 'react';
import emailjs from 'emailjs-com';


function Contact() {
  const API_KEY = process.env.REACT_APP_API_KEY
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_z655uqs', 'template_jsgg41o', e.target, API_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <main id="contacts">
      <h1>Contact Me</h1>
      <h2>Number:</h2>
      <p>484-529-5229</p>
      <h2>Email:</h2>
      <p><a href="mailto:emilas5678@gmail.com">emilas5678@gmail.com</a></p>


      <form id="form" ref={form} onSubmit={sendEmail}>
        <div className="field">
          <label>name</label>
          <input type="text" name="name" id="name"/>
        </div>
        <div className="field">
          <label>message</label>
          <input type="text" name="message" id="message"/>
        </div>
        <div className="field">
          <label>contact</label>
          <input type="text" name="contact" id="contact"/>
        </div>
        <button type="submit">Send</button>
      </form>


    </main>
  )
}


export default Contact