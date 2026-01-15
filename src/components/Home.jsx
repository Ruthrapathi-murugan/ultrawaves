// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/about');
  };

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Successful Projects' },
    { number: '50+', label: 'Expert Technicians' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const features = [
    {
      icon: '🔧',
      title: 'Advanced Equipment',
      description: 'State-of-the-art testing equipment and digital systems for accurate results.'
    },
    {
      icon: '👨‍🔬',
      title: 'Certified Experts',
      description: 'ASNT & PCN certified NDT technicians with extensive industry experience.'
    },
    {
      icon: '✓',
      title: 'Quality Assured',
      description: 'ISO compliant procedures and continuous improvement towards zero defects.'
    },
    {
      icon: '⏱️',
      title: 'Fast Turnaround',
      description: 'Quick and efficient testing services without compromising quality.'
    },
    {
      icon: '🤝',
      title: 'Custom Solutions',
      description: 'Tailored testing solutions for your specific industry requirements.'
    },
    {
      icon: '📊',
      title: 'Detailed Reports',
      description: 'Comprehensive inspection reports with clear findings and recommendations.'
    }
  ];

  return (
    <div className="home-container">
      <div className="container-fluid text-center my-5">

        {/* Logo and Header Section */}
        <div className="logo-header-container">
          <h1 className="home-h1">
            <b>
              <img src="/assets/logo.jpeg" alt="Ultrawave Logo" className="logo" />
              Welcome to Ultrawave NDT Services
            </b>
          </h1>
        </div>

        <p className="lead">We specialize in providing Non-Destructive Testing (NDT) services to ensure the safety and reliability of your assets.</p>
        
        {/* Main Image */}
        <img src="/assets/ndt-services.jpg" alt="NDT Services" className="img-fluid mt-4" />
        
        <p className="mt-3">With over a decade of experience, we are committed to delivering accurate and efficient testing services across industries.</p>
        
        {/* Stats Section */}
        <div className="stats-section">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Why Choose Us?</h2>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-title">{feature.title}</div>
                <div className="feature-desc">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="cta-section">
          <button onClick={handleLearnMoreClick} className="btn btn-primary mt-3">
            Learn More About Us
          </button>
          <button onClick={() => navigate('/contact')} className="btn -primary mt-3" style={{ marginLeft: '0px', background: 'linear-gradient(135deg, #FF0000 0%, #cc0000 100%)' }}>
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
