// src/components/Clients.js
import React, { useState } from 'react';
import './Clients.css'; 

const Clients = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const clients = [
    { 
      name: 'L G Balakrishanan & Bros Pvt Ltd', 
      icon: '🏭',
      image: '/assets/clients/lgbalakrishnan.jpeg',
      website: 'https://lgbalakrishnan.com',
      description: 'Leading industrial manufacturing company serving automotive & machinery sectors'
    },
    { 
      name: 'Bosch Project', 
      icon: '⚙️',
      image: '/assets/clients/bosch.jpeg',
      website: 'https://bosch.in',
      description: 'Global industrial solutions and advanced engineering'
    },
    { 
      name: 'Unicast Alloys Pvt Ltd', 
      icon: '🏢',
      image: '/assets/clients/unicast.jpeg',
      website: 'https://unicastalloys.com',
      description: 'Premium alloy manufacturing and precision casting services'
    },
    { 
      name: 'Unicast Alloys Machining Division', 
      icon: '🔧',
      image: '/assets/clients/unicast-machining.jpeg',
      website: 'https://unicastalloys.com',
      description: 'Advanced CNC machining and precision manufacturing'
    },
    { 
      name: 'Saravana Engineering', 
      icon: '⚡',
      image: '/assets/clients/saravana.jpeg',
      website: 'https://saravanaengineering.in',
      description: 'Precision engineering excellence in automotive components'
    },
    { 
      name: 'Tooling India Pvt Ltd', 
      icon: '🛠️',
      image: '/assets/clients/tooling-india.jpeg',
      website: 'https://toolingindia.com',
      description: 'Specialized tooling solutions and manufacturing'
    },
    { 
      name: 'Putzmeister Concrete Machines', 
      icon: '🏗️',
      image: '/assets/clients/putzmeister.jpeg',
      website: 'https://putzmeister.com',
      description: 'Construction equipment and concrete machinery leader'
    },
    { 
      name: 'Shine Engineering Works', 
      icon: '✨',
      image: '/assets/clients/shine-engineering.jpeg',
      website: 'https://shineengineering.in',
      description: 'Quality engineering services with certified expertise'
    },
    { 
      name: 'Sivaramakrishnan Forgings Pvt Ltd', 
      icon: '🔨',
      image: '/assets/clients/sivaramakrishnan.jpeg',
      website: 'https://srsem.com',
      description: 'Precision forgings specialist in heavy industrial applications'
    },
    { 
      name: 'NK Engineering', 
      icon: '🎯',
      image: '/assets/clients/nk-engineering.jpeg',
      website: 'https://nkengineering.in',
      description: 'Industrial engineering solutions with quality assurance'
    },
  ];

  const handleClientClick = (website) => {
    window.open(website, '_blank');
  };

  return (
    <div className="clients-page">
      <div className="container my-5">
        <div className="clients-header">
          <h1 className="clients-title">Our Trusted Clients</h1>
          <p className="clients-subtitle">Serving industry leaders with precision and excellence</p>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="client-card"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                cursor: 'pointer'
              }}
            >
              <div className="client-card-inner">
                <div className="client-badge">{client.icon}</div>
                <img src={client.image} alt={client.name} className="client-logo" />
                <h5 className="client-name">{client.name}</h5>
                
                {/* Overlay that slides up on hover */}
                <div className="client-overlay">
                  <p className="client-description">{client.description}</p>
                  <button 
                    className="visit-button"
                    onClick={() => handleClientClick(client.website)}
                  >
                    Visit Website →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Excellence Section */}
        <div className="performance-excellence">
          <div className="excellence-content">
            <h2>Performance Excellence</h2>
            <div className="excellence-points">
              <div className="point-item">
                <div className="point-icon">🎯</div>
                <div className="point-text">
                  <h4>High Standards</h4>
                  <p>We hold ourselves to very high standards of performance</p>
                </div>
              </div>
              <div className="point-item">
                <div className="point-icon">💡</div>
                <div className="point-text">
                  <h4>Innovation</h4>
                  <p>We prize innovative ideas and teamwork that brings them to life</p>
                </div>
              </div>
              <div className="point-item">
                <div className="point-icon">🚀</div>
                <div className="point-text">
                  <h4>Continuous Improvement</h4>
                  <p>We constantly find ways to make the customer experience better every day</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NDT Services Text */}
        <div className="ndt-services-text">
          <p>
            In addition to quality NDT testing, we provide skilled and certified NDT manpower supply services 
            to meet your project requirements. Our team is dedicated to delivering excellence in every engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
