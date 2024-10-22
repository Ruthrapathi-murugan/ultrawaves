// src/components/Home.js
import React from 'react';
import './Home.css';  // Optional, if you want to add custom CSS

const Home = () => {
  return (
    <div className="home-container">
      <div className="container-fluid text-center my-5">
        <h1 className="display-4">Welcome to Ultrawave NDT Services</h1>
        <p className="lead">We specialize in providing Non-Destructive Testing (NDT) services to ensure the safety and reliability of your assets.</p>
        
        {/* Image will fill the width of the screen */}
        <img src="/assets/ndt-services.jpg" alt="NDT Services" className="img-fluid mt-4" />
        
        <p className="mt-3">With over a decade of experience, we are committed to delivering accurate and efficient testing services.</p>
        <button className="btn btn-primary mt-3">Learn More</button>
      </div>
    </div>
  );
}

export default Home;
