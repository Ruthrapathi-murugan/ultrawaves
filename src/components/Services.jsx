// src/components/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Non Destructive Testing (NDT)',
      description: 'Ensure the safety and reliability of your assets with our comprehensive NDT services.',
      imageUrl: '/assets/NDTServices.jpg',
      details: ['Complete material evaluation', 'Surface and subsurface defect detection', 'Industry-specific procedures']
    },
    {
      title: 'Ultrasonic Testing (UT)',
      description: 'High-frequency sound waves to detect internal flaws in materials and structures.',
      imageUrl: '/assets/ultrasonic.jpeg',
      details: ['Thickness measurement', 'Flaw detection', 'Weld inspection']
    },
    {
      title: 'Radiographic Testing (RT)',
      description: 'X-rays and gamma rays to examine the internal structure of materials.',
      imageUrl: '/assets/radiographic.jpeg',
      details: ['Void detection', 'Porosity analysis', 'Component inspection']
    },
    {
      title: 'Liquid Penetrant Testing (PT)',
      description: 'Detect surface-breaking defects in non-porous materials using liquid dye.',
      imageUrl: '/assets/penetrant.jpeg',
      details: ['Surface crack detection', 'Non-magnetic material testing', 'Quick results']
    },
    {
      title: 'Magnetic Particle Testing (MPT)',
      description: 'Detect surface and near-surface defects in ferromagnetic materials.',
      imageUrl: '/assets/NDTServices.jpg',
      details: ['Ferrous material inspection', 'High sensitivity detection', 'Visible and fluorescent methods']
    },
    {
      title: 'Eddy Current Testing (ECT)',
      description: 'Electromagnetic method for detecting surface defects and material properties.',
      imageUrl: '/assets/ultrasonic.jpeg',
      details: ['Conductive material testing', 'Precise measurements', 'Coating thickness detection']
    }
  ];

  return (
    <div className="services-page container my-5">
      <h2 className="text-center">Our Comprehensive Services</h2>
      
      <div className="services-intro">
        <p>We offer a complete range of Non-Destructive Testing services using the latest equipment and certified technicians to ensure your assets are safe and reliable.</p>
      </div>

      <div className="row mt-4">
        {services.map((service, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-img-wrapper">
                <img src={service.imageUrl} alt={service.title} className="card-img-top" />
                <div className="card-badge">{index + 1}</div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                
                <div className="service-details">
                  <h6>Key Features:</h6>
                  <ul>
                    {service.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <button className="btn btn-sm btn-primary mt-3 read-more-btn">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="service-benefits">
        <h2 className="text-center">Service Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <i className="fas fa-check-circle"></i>
            <h5>Safety Certified</h5>
            <p>All procedures follow international standards and safety regulations.</p>
          </div>
          <div className="benefit-item">
            <i className="fas fa-cogs"></i>
            <h5>Advanced Technology</h5>
            <p>Latest equipment ensures precise and reliable testing results.</p>
          </div>
          <div className="benefit-item">
            <i className="fas fa-users"></i>
            <h5>Expert Team</h5>
            <p>Certified technicians with years of industry experience.</p>
          </div>
          <div className="benefit-item">
            <i className="fas fa-rocket"></i>
            <h5>Fast Service</h5>
            <p>Quick turnaround time without compromising quality.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
