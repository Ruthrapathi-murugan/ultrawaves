// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  const achievements = [
    { label: 'Years Operating', value: '10+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Expert Technicians', value: '50+' },
    { label: 'Industries Served', value: '25+' }
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'ASNT Level III Certified',
    'PCN Certified',
    'ISO/IEC 17025 Accredited',
    'NABL Approved'
  ];

  return (
    <div className="about-page container my-5">
      <h2 className="text-center">About Ultrawaves NDT Services</h2>
      
      <div className="row justify-content-center mt-4">
        <div className="col-lg-8">
          
          {/* Achievement Stats */}
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-value">{achievement.value}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>

          <div className="card p-4 shadow-sm about-main-card">
            <p className="card-text">
              Registered in 2013, Ultrawaves NDT Services provides high-quality Non Destructive Testing (NDT) services in Coimbatore, Tamil Nadu. We are experts in Ultrasonic Testing, Magnetic Particle Inspection, and other NDT methods.
            </p>
            <img src="/assets/NDTServices.jpg" alt="About NDT" className="img-fluid mt-3" />
            
            <h3 className="mt-4">
              <i className="fas fa-info-circle me-2"></i> About Us
            </h3>
            <p>
              Ultrawaves NDT Services is a service-oriented company providing Non-Destructive Testing services that include calibrated testing equipment and certified NDT technicians. We use updated digital equipment and systems, in-house expertise, and reliable trained manpower for both short-term NDT inspection requirements and long-term service contracts.
            </p>
            <p>
              We provide customized solutions for our clients' testing requirements and have expertise in micro-level discontinuity check systems in NDT testing. Founded in 2012 and fully operational from 2013, Ultrawaves NDT Services is a privately held, equal opportunity employer based in Coimbatore.
            </p>

            <h3 className="mt-4">
              <i className="fas fa-lightbulb me-2"></i> Our Mission
            </h3>
            <p>
              To deliver superior Non-Destructive Testing services with unwavering commitment to quality, safety, and customer satisfaction. We aim to be the trusted partner for industries seeking reliable asset evaluation and risk mitigation.
            </p>

            <h3 className="mt-4">
              <i className="fas fa-binoculars me-2"></i> Our Vision
            </h3>
            <p>
              To become a leading NDT service provider recognized for technical excellence, innovation, and customer-centric solutions across India and beyond.
            </p>

            <h4 className="mt-4">
              <i className="fas fa-wrench me-2"></i> Our Services
            </h4>
            <ul>
              <li>NDT Service in Ultrasonic Testing, Dye Penetrant Testing, and Magnetic Particle Testing.</li>
              <li>Radiographic Testing for comprehensive internal structure analysis.</li>
              <li>Eddy Current Testing for advanced defect detection.</li>
              <li>NDT Level III Consultancy for setting up NDT procedures as per organizational processes and products.</li>
            </ul>

            <p>
              In addition to the NDT services, we provide knowledgeable and skilled NDT manpower service. Our scope of work focuses on continual improvement towards zero defect achievement through sincere feedback blended with meticulous NDT inspection.
            </p>

            <h4 className="mt-4">
              <i className="fas fa-clipboard-check me-2"></i> Deliverables
            </h4>
            <ul>
              <li>NDT UT Inspection service with calibrated UT digital equipment with suitable probes and accessories.</li>
              <li>NDT UT inspecting personnel duly qualified with the ASNT & PCN NDT Level-II certificate. The eye test certificate scan copy will be sent by mail, and a hard copy will be maintained at the inspection place.</li>
              <li>NDT LPT & MPT inspections in visible and fluorescent methods of inspection.</li>
              <li>Our laboratory facilities include a purpose-built radiography compound, capable of inspecting small or large components.</li>
              <li>An initial training based on the SOP and approved procedure (to be provided by the client) can be performed for Ultrawaves NDT Technicians by our authorized personnel.</li>
              <li>An in-house training refresher program will be conducted for our Ultrawaves NDT Technician at the client place once a year.</li>
              <li>Detailed comprehensive reports with findings, recommendations, and remedial measures.</li>
              <li>24/7 emergency support and rapid response capabilities.</li>
            </ul>

            <h4 className="mt-4">
              <i className="fas fa-award me-2"></i> Certifications & Accreditations
            </h4>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <i className="fas fa-certificate"></i> {cert}
                </div>
              ))}
            </div>

            <p className="mt-4">
              We look forward to beginning a fruitful and long-term association with your esteemed organization. Trust Ultrawaves NDT Services for accurate, reliable, and efficient non-destructive testing solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
