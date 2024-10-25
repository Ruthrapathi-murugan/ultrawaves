// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';  // Ensure this CSS contains the logo and header styles

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/about'); // Navigate to the About page
  };

  return (
    <div className="home-container">
      <div className="container-fluid text-center my-5">

        {/* Logo and Header Section */}
        <div className="logo-header-container">
         
          <h1  className="home-h1"><b> <img src="/assets/logo.jpeg" alt="Ultrawave Logo" className="logo" />Welcome to Ultrawave NDT Services</b></h1>
        </div>

        <p className="lead">We specialize in providing Non-Destructive Testing (NDT) services to ensure the safety and reliability of your assets.</p>
        
        {/* Image will fill the width of the screen */}
        <img src="/assets/ndt-services.jpg" alt="NDT Services" className="img-fluid mt-4" />
        
        <p className="mt-3">With over a decade of experience, we are committed to delivering accurate and efficient testing services.</p>
        
        {/* Button with onClick event to navigate to the About page */}
        <button onClick={handleLearnMoreClick} className="btn btn-primary mt-3">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Home;
