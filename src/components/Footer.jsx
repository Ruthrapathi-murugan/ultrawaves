// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Optional if you need custom styles

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4">
            <h5>Ultrawaves NDT Services</h5>
            <p>
              We specialize in providing Non-Destructive Testing services to ensure the safety and reliability of your assets.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-map-marker-alt"></i> Coimbatore, Tamil Nadu</li>
              <li><i className="fas fa-phone"></i> +91-9500996626</li>
              <li><i className="fas fa-envelope"></i> info@ultrawaves.com</li>
            </ul>
          </div>

          {/* Proprietor Info */}
          <div className="col-md-4">
            <h5>Proprietor</h5>
            <ul className="list-unstyled">
              <li><strong>Mr. Dheenadhayalan</strong></li>
              <li>No. 6/1, Thatcham Thottam, Edayarpalayam</li>
              <li>Coimbatore, Tamil Nadu, 641025, India</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-3">
          <h5>Follow Us</h5>
          <div>
            <a href="https://facebook.com" className="text-white mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-white mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-white mx-2">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <p>&copy; {new Date().getFullYear()} Ultrawaves NDT Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
