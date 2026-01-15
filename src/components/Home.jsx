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

  const ndt_methods = [
    {
      icon: '📡',
      title: 'Ultrasonic Testing (UT)',
      description: 'High-frequency sound waves for material thickness & flaw detection. Ideal for metals, composites & ceramics.',
      features: ['Thickness Measurement', 'Flaw Detection', 'Bond Testing', 'Long Range Inspection']
    },
    {
      icon: '🔍',
      title: 'Visual Inspection (VI)',
      description: 'Professional visual & optical inspection with precision measurements. Surface condition & dimensional analysis.',
      features: ['Surface Defect Detection', 'Dimensional Checking', 'Optical Analysis', 'Documentation']
    },
    {
      icon: '🧲',
      title: 'Magnetic Particle Testing (MPT)',
      description: 'Ferromagnetic material inspection for surface & near-surface defects. Fast & effective quality control.',
      features: ['Surface Flaw Detection', 'Subsurface Defects', 'Rapid Screening', 'Cost Effective']
    },
    {
      icon: '💧',
      title: 'Liquid Penetrant Testing (LPT)',
      description: 'Non-ferrous material testing with high sensitivity to surface defects. Reliable for aluminum, titanium & brass.',
      features: ['Micro Flaw Detection', 'Non-Destructive', 'High Sensitivity', 'Precise Results']
    },
    {
      icon: '🟣',
      title: 'Fluorescent Penetrant Testing (FPT)',
      description: 'UV light-based penetrant testing for maximum sensitivity. Enhanced visibility under ultraviolet illumination.',
      features: ['UV Light Detection', 'Enhanced Visibility', 'Micro Defects', 'High Accuracy']
    },
    {
      icon: '⚡',
      title: 'Eddy Current Testing (ECT)',
      description: 'Electrical conductivity analysis for metal defect detection. Non-contact electromagnetic inspection method.',
      features: ['Conductivity Analysis', 'Non-Contact', 'Coating Thickness', 'Material Sorting']
    }
  ];

  const quality_checks = [
    {
      icon: '✅',
      title: 'Defect Classification',
      description: 'Precise categorization of defects - cracks, inclusions, porosity, and surface irregularities according to international standards (ASTM, ISO).'
    },
    {
      icon: '📊',
      title: 'Detailed Reporting',
      description: 'Comprehensive inspection reports with photographs, measurements, and recommendations. Digital & hardcopy documentation available.'
    },
    {
      icon: '🎯',
      title: 'Dimensional Verification',
      description: 'Precision measurement of critical dimensions. Ensures compliance with design specifications & tolerance requirements.'
    },
    {
      icon: '🔬',
      title: 'Surface Quality Analysis',
      description: 'Professional surface finish evaluation, roughness measurement, and corrosion assessment using advanced equipment.'
    },
    {
      icon: '📋',
      title: 'Compliance Certification',
      description: 'Full compliance with ISO 9001, ASNT standards & customer specifications. Certificate of conformance provided.'
    },
    {
      icon: '🏆',
      title: 'Zero Defect Goal',
      description: 'Commitment to continuous improvement & elimination of defects. Preventive quality assurance approach.'
    }
  ];

  const industries = [
    { name: 'Automotive', emoji: '🚗', desc: 'Component integrity & safety validation' },
    { name: 'Aerospace', emoji: '✈️', desc: 'Critical aircraft & engine parts testing' },
    { name: 'Power Generation', emoji: '⚡', desc: 'Turbine & pressure vessel inspection' },
    { name: 'Oil & Gas', emoji: '🛢️', desc: 'Pipeline & equipment reliability testing' },
    { name: 'Manufacturing', emoji: '🏭', desc: 'Production quality assurance & control' },
    { name: 'Construction', emoji: '🏗️', desc: 'Structural integrity & weld verification' }
  ];

  return (
    <div className="home-container">
      <div className="container-fluid text-center my-5">

        {/* Logo and Header Section */}
        <div className="logo-header-container">
          <h1 className="home-h1">
            <b>
              <img src="/assets/logo.jpeg" alt="Ultrawave Logo" className="logo" />
              Welcome to ULTRA WAVES NDT SERVICES
            </b>
          </h1>
        </div>

        <p className="lead">Excellence in Non-Destructive Testing for Critical Applications</p>
        
        {/* Hero Image Section */}
        <div className="hero-image-section" style={{ marginBottom: '40px', marginTop: '30px' }}>
          <img 
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=400&fit=crop" 
            alt="Industrial NDT Testing" 
            className="img-fluid hero-image"
            style={{ borderRadius: '12px', boxShadow: '0 10px 40px rgba(0, 212, 255, 0.2)', maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
        
        <p className="mt-3" style={{ fontSize: '1.1rem', fontWeight: '500', color: '#00d4ff', marginBottom: '30px' }}>
          With over a decade of experience, we are committed to delivering accurate and efficient testing services across industries. Our team of certified NDT professionals ensures the safety, reliability, and compliance of your critical assets.
        </p>
        
        {/* Stats Section */}
        <div className="stats-section" style={{ marginBottom: '50px' }}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="features-section" style={{ marginBottom: '50px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.2rem', color: '#00d4ff' }}>Why Choose ULTRA WAVES?</h2>
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

        {/* NDT Methods Section */}
        <div className="ndt-methods-section" style={{ marginBottom: '50px', backgroundColor: 'rgba(0, 212, 255, 0.05)', padding: '40px 20px', borderRadius: '15px', border: '2px solid #00d4ff' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.2rem', color: '#00d4ff' }}>Our NDT Testing Methods</h2>
          <div className="feature-grid">
            {ndt_methods.map((method, index) => (
              <div key={index} className="feature-item" style={{ backgroundColor: 'rgba(15, 52, 96, 0.8)', border: '2px solid #0099ff', borderRadius: '10px', padding: '20px', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(15, 52, 96, 1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(15, 52, 96, 0.8)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div className="feature-icon" style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{method.icon}</div>
                <div className="feature-title" style={{ color: '#00d4ff', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '10px' }}>{method.title}</div>
                <div className="feature-desc" style={{ color: '#a0d4ff', fontSize: '0.95rem', marginBottom: '12px', lineHeight: '1.5' }}>{method.description}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                  {method.features && method.features.map((feature, fIdx) => (
                    <span key={fIdx} style={{ fontSize: '0.75rem', backgroundColor: 'rgba(0, 212, 255, 0.15)', color: '#0099ff', padding: '4px 8px', borderRadius: '4px', border: '1px solid #0099ff' }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Checking Section */}
        <div className="quality-section" style={{ marginBottom: '50px', backgroundColor: 'rgba(0, 212, 255, 0.03)', padding: '40px 20px', borderRadius: '15px', border: '3px solid #00d4ff' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '15px', fontSize: '2.2rem', color: '#00d4ff' }}>Quality Assurance & Checking</h2>
          <p style={{ textAlign: 'center', color: '#a0d4ff', fontSize: '1rem', marginBottom: '35px', maxWidth: '900px', margin: '0 auto 35px' }}>
            Every test is performed with precision. Our multi-level quality control ensures accurate results, comprehensive documentation, and 100% compliance with international standards.
          </p>
          <div className="quality-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {quality_checks.map((check, index) => (
              <div key={index} style={{ 
                backgroundColor: 'rgba(26, 26, 46, 0.8)',
                border: '2px solid #00d4ff',
                borderRadius: '10px',
                padding: '25px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(26, 26, 46, 1)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 212, 255, 0.35)';
                e.currentTarget.style.borderColor = '#00ffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(26, 26, 46, 0.8)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#00d4ff';
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px', textAlign: 'center' }}>{check.icon}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#00d4ff', marginBottom: '12px', textAlign: 'center' }}>{check.title}</div>
                <div style={{ fontSize: '0.95rem', color: '#a0d4ff', lineHeight: '1.6', textAlign: 'center' }}>{check.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve Section */}
        <div className="industries-section" style={{ marginBottom: '50px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.2rem', color: '#00d4ff' }}>Industries We Serve</h2>
          <div className="industries-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {industries.map((industry, index) => (
              <div key={index} className="industry-card" style={{ 
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                border: '2px solid #00d4ff',
                borderRadius: '10px',
                padding: '20px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 212, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{industry.emoji}</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#00d4ff', marginBottom: '8px' }}>{industry.name}</div>
                <div style={{ fontSize: '0.95rem', color: '#a0d4ff' }}>{industry.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Highlights Image Section */}
        <div style={{ 
          marginBottom: '50px',
          padding: '25px',
          backgroundColor: 'rgba(15, 52, 96, 0.7)',
          borderRadius: '15px',
          border: '3px solid #00d4ff',
          boxShadow: '0 15px 50px rgba(0, 212, 255, 0.2)'
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '25px', 
            fontSize: '2rem', 
            color: '#00d4ff',
            fontWeight: 'bold'
          }}>Our Testing Facilities</h2>
          <div style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '2px solid #0099ff'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1578926078328-123d11269f5b?w=1200&h=450&fit=crop" 
              alt="Quality Testing Facilities" 
              className="img-fluid"
              style={{ 
                borderRadius: '10px', 
                maxHeight: '450px', 
                objectFit: 'cover',
                width: '100%',
                display: 'block',
                transition: 'transform 0.3s ease',
                filter: 'brightness(0.95)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.filter = 'brightness(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'brightness(0.95)';
              }}
            />
          </div>
          <p style={{
            marginTop: '20px',
            textAlign: 'center',
            color: '#a0d4ff',
            fontSize: '1rem',
            fontStyle: 'italic'
          }}>Advanced testing equipment & professional facilities ensuring precision & accuracy in every inspection</p>
        </div>

        {/* Trust & Quality Section */}
        <div style={{ 
          marginBottom: '50px', 
          padding: '40px', 
          backgroundColor: 'rgba(15, 52, 96, 0.9)',
          borderRadius: '15px', 
          border: '3px solid #00d4ff',
          boxShadow: '0 15px 50px rgba(0, 212, 255, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative background */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '300px',
            height: '300px',
            backgroundColor: 'rgba(0, 212, 255, 0.05)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            pointerEvents: 'none'
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              color: '#00d4ff', 
              marginBottom: '25px',
              fontWeight: 'bold',
              textShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
            }}>🏆 Trusted by Industry Leaders</h2>
            
            <p style={{ 
              fontSize: '1.15rem', 
              color: '#a0d4ff', 
              lineHeight: '1.9', 
              marginBottom: '25px',
              fontWeight: '500'
            }}>
              ULTRA WAVES NDT SERVICES is the preferred partner for companies that demand precision, reliability, and compliance. Our proven track record spans automotive, aerospace, oil & gas, power generation, and manufacturing sectors.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px',
              marginTop: '25px'
            }}>
              <div style={{
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                border: '2px solid #00d4ff',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)';
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 212, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>✓</div>
                <div style={{ fontSize: '0.95rem', color: '#00d4ff', fontWeight: 'bold' }}>ISO 9001:2015 Certified</div>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                border: '2px solid #00d4ff',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)';
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 212, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>✓</div>
                <div style={{ fontSize: '0.95rem', color: '#00d4ff', fontWeight: 'bold' }}>ASNT Level 3 Certified</div>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                border: '2px solid #00d4ff',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)';
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 212, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>✓</div>
                <div style={{ fontSize: '0.95rem', color: '#00d4ff', fontWeight: 'bold' }}>PCN Accredited</div>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                border: '2px solid #00d4ff',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)';
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 212, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>✓</div>
                <div style={{ fontSize: '0.95rem', color: '#00d4ff', fontWeight: 'bold' }}>100% Compliance</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="cta-section" style={{ marginTop: '40px', marginBottom: '30px' }}>
          <button onClick={handleLearnMoreClick} className="btn btn-primary mt-3" style={{ fontSize: '1.1rem', padding: '12px 30px', marginRight: '15px' }}>
            Learn More About Us
          </button>
          <button onClick={() => navigate('/contact')} className="btn -primary mt-3" style={{ marginLeft: '0px', background: 'linear-gradient(135deg, #FF0000 0%, #cc0000 100%)', fontSize: '1.1rem', padding: '12px 30px' }}>
            Get Free Quote Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
