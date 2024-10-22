// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="about-page container my-5">
      <h2 className="text-center">About Ultrawaves NDT Services</h2>
      <div className="row justify-content-center mt-4">
        <div className="col-lg-8">
          <div className="card p-4 shadow-sm">
            <p className="card-text">
              Registered in 2013, Ultrawaves NDT Services provides high-quality Non Destructive Testing (NDT) services in Coimbatore, Tamil Nadu. We are experts in Ultrasonic Testing, Magnetic Particle Inspection, and other NDT methods.
            </p>
            <img src="/assets/NDTServices.jpg" alt="About NDT" className="img-fluid mt-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
