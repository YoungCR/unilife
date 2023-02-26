import React from 'react';
import './Contact.css';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact">
      <div className="keepInTouch">
        <h3>Keep in touch</h3>
        <p>
          Curious about new offerings? Sign up for our weekly newsletter and
          stay informed.
        </p>
        <form action="">
          <input type="email" placeholder="Your email" />
        </form>
      </div>
      <div className="social">
        <h3>Let's Socialize</h3>
        <div className="social-link">
          <FaFacebook />
          <p>Facebook</p>
        </div>
        <div className="social-link">
          <AiFillTwitterCircle />
          <p>Twitter</p>
        </div>
        <div className="social-link">
          <AiFillInstagram />
          <p>Instagram</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
