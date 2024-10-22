// src/components/Clients.js
import React from 'react';
import './Clients.css'; 

const Clients = () => {
  const clients = [
    { name: 'L G Balakrishanan & Bros Pvt Ltd', icon: 'fas fa-building' },
    { name: 'Bosch Project', icon: 'fas fa-cogs' },
    { name: 'Unicast Alloys Pvt Ltd', icon: 'fas fa-industry' },
    { name: 'Unicast Alloys Machining Division', icon: 'fas fa-tools' },
    { name: 'Saravana Engineering', icon: 'fas fa-wrench' },
    { name: 'Tooling India Pvt Ltd', icon: 'fas fa-screwdriver' },
    { name: 'Putzmeister Concrete Machines', icon: 'fas fa-truck' },
    { name: 'Shine Engineering Works', icon: 'fas fa-cog' },
    { name: 'Sivaramakrishnan Forgings Pvt Ltd', icon: 'fas fa-hammer' },
    { name: 'NK Engineering', icon: 'fas fa-cogs' },
  ];

  return (
    <div className="clients-container">
      <div className="container text-center my-5">
        <h1 className="display-4">Our Clients</h1>
        <ul className="list-unstyled">
          {clients.map((client, index) => (
            <li key={index} className="my-2 d-flex align-items-center justify-content-center">
              <i className={`${client.icon} me-2`}></i> {/* Font Awesome icon */}
              <h5>{client.name}</h5>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          In addition, we provide skilled NDT manpower supply and services.
        </p>
      </div>
    </div>
  );
};

export default Clients;
