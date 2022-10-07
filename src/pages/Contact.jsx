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
    <main id="contact">
        <h1>Contact Me</h1>
      <div id="contact-me">
        <h6><bold>Number:</bold> 484-529-5229</h6>
        <h6><bold>Email:</bold> <a href="mailto:emilas5678@gmail.com">emilas5678@gmail.com</a></h6>
      </div>


      <form id="form" ref={form} onSubmit={sendEmail}>
        <h2>Send me an email!</h2>
        <table>
        <tr>
          <th>Your Name:</th>
          <th><input type="text" name="name" id="name"/></th>
        </tr>
        <tr>
          <th>Message:</th>
          <th><textarea type="text" name="message" id="message"/></th>
        </tr>
        <tr>
          <th>Your Email:</th>
          <th><input type="text" name="contact" id="contact"/></th>
        </tr>
        </table>
        <button type="submit">Send</button>
      </form>


    </main>
  )
}


export default Contact