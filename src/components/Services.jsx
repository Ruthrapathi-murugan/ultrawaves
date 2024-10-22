// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <div className="services-page container my-5">
      <h2 className="text-center">Our Services</h2>
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Non Destructive Testing (NDT)</h5>
              <p className="card-text">Ensure the safety and reliability of your assets with our comprehensive NDT services.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Ultrasonic Testing</h5>
              <p className="card-text">High-frequency sound waves to detect internal flaws in materials and structures.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Radiographic Testing</h5>
              <p className="card-text">X-rays and gamma rays to examine the internal structure of materials.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Liquid Penetrant Testing</h5>
              <p className="card-text">Detect surface-breaking defects in non-porous materials using liquid dye.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
