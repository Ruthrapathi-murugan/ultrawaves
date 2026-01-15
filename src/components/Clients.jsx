// src/components/Clients.js
import React, { useState } from 'react';
import './Clients.css'; 

const Clients = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const clients = [
    { 
      name: 'L G Balakrishanan & Bros Pvt Ltd', 
      icon: '🏭',
      image: 'https://www.lgb.co.in/wp-content/uploads/2021/08/LGB-Logo.png',
      website: 'https://www.lgb.co.in/',
      description: 'Leading industrial manufacturing company serving automotive & machinery sectors'
    },
    { 
      name: 'Bosch Project', 
      icon: '⚙️',
      image: 'data:image/png;base64,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',
      website: 'https://bosch.in',
      description: 'Global industrial solutions and advanced engineering'
    },
    { 
      name: 'Unicast Alloys Pvt Ltd', 
      icon: '🏢',
      image: 'http://www.unitedgroupcompanies.com/wp-content/themes/unitedgroup/images/uc_01.jpg',
      website: 'https://www.unitedgroupcompanies.com/unicast-alloys-private-limited/',
      description: 'Premium alloy manufacturing and precision casting services'
    },
    { 
      name: 'Unicast Alloys Machining Division', 
      icon: '🔧',
      image: 'http://www.unitedgroupcompanies.com/wp-content/themes/unitedgroup/images/uc_02.jpg',
      website: 'https://www.unitedgroupcompanies.com/unicast-alloys-machining-division/',
      description: 'Advanced CNC machining and precision manufacturing'
    },
    { 
      name: 'Saravana Engineering', 
      icon: '⚡',
      image: 'https://5.imimg.com/data5/SELLER/Logo/2022/4/JU/SQ/QZ/115792031/se-logo-modified-120x120.png',
      website: 'https://www.saravanaengineering.com/',
      description: 'Precision engineering excellence in automotive components'
    },
    { 
      name: 'Tooling India Pvt Ltd', 
      icon: '🛠️',
      image: 'https://www.toolingindiaenterprises.com/img/logo-dark.png',
      website: 'https://www.toolingindiaenterprises.com/',
      description: 'Specialized tooling solutions and manufacturing'
    },
    { 
      name: 'Putzmeister Concrete Machines', 
      icon: '🏗️',
      image: 'https://putzmeister.com/documents/d/global/logo-pm_300x150',
      website: 'https://putzmeister.com/web/india',
      description: 'Construction equipment and concrete machinery leader'
    },
    { 
      name: 'Shine Engineering Works', 
      icon: '✨',
      image: 'https://shineengg.com/wp-content/uploads/2025/10/shine-logo.png',
      website: 'https://shineengg.com/',
      description: 'Quality engineering services with certified expertise'
    },
    { 
      name: 'Sivaramakrishnan Forgings Pvt Ltd', 
      icon: '🔨',
      image: 'https://srsem.com/images/logo.png',
      website: 'https://srsem.com',
      description: 'Precision forgings specialist in heavy industrial applications'
    },
    { 
      name: 'NK Engineering', 
      icon: '🎯',
      image: 'https://nkengineering.in/img/logo.png',
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
