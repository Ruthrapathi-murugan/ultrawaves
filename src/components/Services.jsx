// src/components/Services.js
import React from 'react';
import './Services.css'; // Import the CSS file

const Services = () => {
  const services = [
    {
      title: 'Non Destructive Testing (NDT)',
      description: 'Ensure the safety and reliability of your assets with our comprehensive NDT services.',
      imageUrl: '/assets/NDTServices.jpg'
    },
    {
      title: 'Ultrasonic Testing',
      description: 'High-frequency sound waves to detect internal flaws in materials and structures.',
      imageUrl: '/assets/ultrasonic.jpeg'
    },
    {
      title: 'Radiographic Testing',
      description: 'X-rays and gamma rays to examine the internal structure of materials.',
      imageUrl: '/assets/radiographic.jpeg'
    },
    {
      title: 'Liquid Penetrant Testing',
      description: 'Detect surface-breaking defects in non-porous materials using liquid dye.',
      imageUrl: '/assets/penetrant.jpeg'
    },
  ];

  return (
    <div className="services-page container my-5">
      <h2 className="text-center">Our Services</h2>
      <div className="row mt-4">
        {services.map((service, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <img src={service.imageUrl} alt={service.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
