import React, { useState } from 'react';
import './Contact.css'; // Optional: Add custom styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // FormSubmit AJAX API
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      _subject: `New Contact Form Inquiry from ${formData.name}`,
      _captcha: "false"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/ultrawavendt@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      
      if (response.ok || result.success === "true") {
        setStatus("Success");
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus("Error");
        console.error("FormSubmit Error:", result);
      }
    } catch (error) {
      setStatus("Error");
      console.error(error);
    }
  };

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
            <i className="fas fa-phone"></i>{' '}
            <a href="tel:+919500996626" className="text-decoration-none text-dark">+91-95009-96626</a>
          </p>
          <p>
            <i className="fas fa-envelope"></i>{' '}
            <a href="mailto:ultrawavendt@gmail.com" className="text-decoration-none text-dark">ultrawavendt@gmail.com</a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="col-lg-6">
          {status === 'Success' && (
            <div className="alert alert-success">Your message was sent successfully!</div>
          )}
          {status === 'Error' && (
            <div className="alert alert-danger">There was an error sending your message.</div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="Enter your email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Contact Number</label>
              <input 
                type="tel" 
                className="form-control" 
                id="phone" 
                placeholder="Enter your contact number" 
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                className="form-control" 
                id="message" 
                rows="4" 
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === 'Sending...'}>
              {status === 'Sending...' ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

