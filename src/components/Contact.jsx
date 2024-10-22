// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Optional: Add custom styles

const Contact = () => {
  return (
    <div className="contact-page container my-5">
      <h2 className="text-center">Contact Us</h2>
      <div className="row justify-content-center mt-4">
        {/* Contact Details */}
        <div className="col-lg-6">
          <h4>Get in Touch</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i> No. 6/1, Thatcham Thottam, Edayarpalayam, Coimbatore, Tamil Nadu, 641025, India
          </p>
          <p>
            <i className="fas fa-phone"></i> +91-9500996626
          </p>
          <p>
            <i className="fas fa-envelope"></i>ultrawavendt@gmail.com
          </p>
        </div>

        {/* Contact Form */}
        <div className="col-lg-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
