import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  // You can replace this with your actual WhatsApp phone number (with country code)
  const phoneNumber = "919500996626"; 
  const message = "Hello! I'm interested in your services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fab fa-whatsapp whatsapp-icon"></i>
    </a>
  );
};

export default WhatsAppButton;
