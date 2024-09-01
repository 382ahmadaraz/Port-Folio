import "./contact.css";
import Button from "../button/Button";

function Contact() {
  return (
    <div className="contact" id="Contact">
      <h1>
        Get<span id="me"> In Touch</span>
      </h1>
      <div className="contact-form">
        <div className="form">
          <p id="hding">Get in Touch</p>
          <form label="table">
            <input type="text" placeholder="Your Name"></input>
            <input type="email" placeholder="Your Email"></input>
            <input type="text" placeholder="Your Phone"></input>
            <textarea col="3" row="10" placeholder="Write a Message"></textarea>
          </form>
          <Button title="SEND MESSAGE"/>
        </div>
        <div className="detail">
          <p id="hding">My Contact Details</p>
          <p id="sub-heading">EMAIL</p>
          <p>Ahmad@gmail.com</p>
          <p id="sub-heading">PHONE</p>
          <p>+92 3020408062</p>
          <p id="sub-heading">FAX</p>
          <p>+92 3020408062</p>
          <p id="sub-heading">ADRESS</p>
          <p>
            Jaranwala Road, <br />
            bijli ghar stop Faisalabad,
            <br /> Pakistan.
          </p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Contact;
