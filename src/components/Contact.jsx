// Contact.jsx
import emailjs from "emailjs-com";
import React from "react";
import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fyoi8hq",
        "template_qqeeilm",
        e.target,
        "23cC6xqy4YwEV7PV3"
      )
      .then(
        (result) => {
          alert("Message sent!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-page" id="contact">
      <h2>Contact Me</h2>
      <p>
        I'd love to hear from you! Feel free to reach out through the form below
        or connect with me on social media.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
