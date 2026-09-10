import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import Button from '../components/Button';
import './RequestDemo.css';

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    fleetSize: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // In a real application, you would send formData to your backend here
      console.log('Demo request submitted:', formData);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="demo-page success-state">
        <div className="container">
          <div className="demo-card glass-panel text-center animate-fade-in">
            <div className="success-icon-wrapper">
              <FaCheckCircle className="success-icon text-green" />
            </div>
            <h2>Request Received!</h2>
            <p>Thank you for your interest in BestTracking, {formData.name}.</p>
            <p>One of our fleet management experts will contact you shortly at <strong>{formData.email}</strong> to schedule your personalized demo.</p>
            <div className="mt-4">
              <Link to="/">
                <Button variant="primary">Return to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-page">
      <div className="container">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Back to Home
        </Link>
        
        <div className="demo-grid">
          <div className="demo-info animate-fade-in">
            <h1>See <span className="text-gradient">BestTracking</span> in Action</h1>
            <p className="demo-subtitle">
              Schedule a free, personalized walkthrough of our fleet management software and tracking devices.
            </p>
            
            <div className="demo-benefits">
              <h3>What to expect:</h3>
              <ul className="benefit-list">
                <li>A live tour of our real-time tracking dashboard.</li>
                <li>Demonstration of fuel monitoring and anti-theft features.</li>
                <li>Customized reporting tailored to your business needs.</li>
                <li>Q&A with our local Tanzania-based fleet experts.</li>
              </ul>
            </div>
          </div>
          
          <div className="demo-form-container glass-panel animate-fade-in animate-delay-1">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group half">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="form-control" 
                    required 
                  />
                </div>
                <div className="form-group half">
                  <label>Work Email *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="form-control" 
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="form-control" 
                    required 
                  />
                </div>
                <div className="form-group half">
                  <label>Company Name</label>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    className="form-control" 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Fleet Size *</label>
                <select 
                  name="fleetSize" 
                  value={formData.fleetSize} 
                  onChange={handleChange} 
                  className="form-control" 
                  required
                >
                  <option value="" disabled>Select your fleet size</option>
                  <option value="1-5">1 - 5 Vehicles</option>
                  <option value="6-20">6 - 20 Vehicles</option>
                  <option value="21-50">21 - 50 Vehicles</option>
                  <option value="51-100">51 - 100 Vehicles</option>
                  <option value="100+">More than 100 Vehicles</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>What are your main challenges? (Optional)</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="form-control" 
                  rows="4"
                ></textarea>
              </div>
              
              <Button 
                variant="primary" 
                type="submit" 
                className="w-100" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting Request...' : 'Request Demo'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
