import React from 'react';
// import './styles/Services.css';

const services = [
  {
    icon: '📊', // Replace with actual icons or SVGs
    title: 'Audit & Account',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    icon: '💰', // Replace with actual icons or SVGs
    title: 'Budget & Projections',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    icon: '📑', // Replace with actual icons or SVGs
    title: 'Payroll & Bookkeeping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    icon: '💻', // Replace with actual icons or SVGs
    title: 'Software Training & IT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
  },
  {
    icon: '💼', // Replace with actual icons or SVGs
    title: 'Tax planning & Returns',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    icon: '📊', // Replace with actual icons or SVGs
    title: 'Management Information',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn. Ut enim ad minim veniam',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className='text-start fw-bold'>Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
