import React from 'react';
import { FaMapMarkedAlt, FaTruckMoving, FaGasPump, FaBell, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in">
          <h1 className="hero-title">
            Next-Gen Fleet Management & <span className="text-gradient">Car Tracking</span> in Africa
          </h1>
          <p className="hero-subtitle animate-delay-1">
            Empowering businesses in Tanzania and across the continent with real-time visibility, security, and advanced analytics for optimal fleet performance.
          </p>
          <div className="hero-actions animate-delay-2">
            <Button variant="primary" size="lg">Get Started Today</Button>
            <Button variant="glass" size="lg">Request a Demo</Button>
          </div>
          
          <div className="hero-stats animate-delay-3">
            <div className="stat-item">
              <span className="stat-value text-gradient">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value text-gradient">24/7</span>
              <span className="stat-label">Local Support</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value text-gradient">5000+</span>
              <span className="stat-label">Vehicles Tracked</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features section">
        <div className="container">
          <div className="section-header text-center animate-fade-in">
            <h2>Powerful Features for Your Fleet</h2>
            <p>Everything you need to secure, monitor, and manage your vehicles efficiently.</p>
          </div>
          
          <div className="features-grid">
            <Card 
              title="Real-Time GPS Tracking" 
              icon={<FaMapMarkedAlt />}
              className="animate-fade-in"
            >
              <p>Monitor your vehicles' exact location 24/7 with pinpoint accuracy. Know exactly where your assets are at any given moment.</p>
            </Card>
            
            <Card 
              title="Fuel Monitoring" 
              icon={<FaGasPump />}
              className="animate-fade-in animate-delay-1"
            >
              <p>Crucial for the African market. Prevent fuel theft, monitor consumption rates, and optimize routes to reduce operational costs.</p>
            </Card>
            
            <Card 
              title="Geofencing Alerts" 
              icon={<FaBell />}
              className="animate-fade-in animate-delay-2"
            >
              <p>Create virtual boundaries and receive instant notifications via SMS or email when a vehicle enters or exits designated zones.</p>
            </Card>
            
            <Card 
              title="Driver Behavior Analytics" 
              icon={<FaChartLine />}
              className="animate-fade-in"
            >
              <p>Improve safety and reduce wear and tear by monitoring speeding, harsh braking, and rapid acceleration.</p>
            </Card>
            
            <Card 
              title="Fleet Maintenance" 
              icon={<FaTruckMoving />}
              className="animate-fade-in animate-delay-1"
            >
              <p>Automate maintenance schedules based on mileage or engine hours to prevent costly breakdowns and extend vehicle lifespan.</p>
            </Card>
            
            <Card 
              title="Advanced Security" 
              icon={<FaShieldAlt />}
              className="animate-fade-in animate-delay-2"
            >
              <p>Remote engine cut-off functionality in case of theft. Secure your assets with industry-leading anti-tamper hardware.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="about section glass-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text animate-fade-in">
              <h2>Why Choose <span className="text-gradient">BestTracking?</span></h2>
              <p>
                Operating a fleet in Africa comes with unique challenges. We understand the local terrain, the connectivity hurdles, and the security concerns.
              </p>
              <ul className="about-list">
                <li><strong>Local Expertise:</strong> Based in Tanzania, we provide localized support that understands your specific needs.</li>
                <li><strong>Robust Hardware:</strong> Our tracking devices are built to withstand harsh environments and poor road conditions.</li>
                <li><strong>Offline Buffering:</strong> No network? No problem. Our devices store data and upload it once connectivity is restored.</li>
                <li><strong>Custom Solutions:</strong> Whether you manage boda-bodas, taxis, or heavy-duty logistics trucks, we tailor our platform for you.</li>
              </ul>
              <Button variant="primary" className="mt-4">Learn More About Us</Button>
            </div>
            <div className="about-image animate-fade-in animate-delay-1">
              {/* Using a placeholder for a dashboard mockup or map */}
              <div className="dashboard-mockup glass-panel">
                <div className="mockup-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-sidebar"></div>
                  <div className="mockup-main">
                    <div className="mockup-map"></div>
                    <div className="mockup-stats">
                      <div className="mockup-stat-card"></div>
                      <div className="mockup-stat-card"></div>
                      <div className="mockup-stat-card"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <div className="cta-container glass-panel animate-fade-in">
            <div className="cta-content">
              <h2>Ready to Secure Your Fleet?</h2>
              <p>Join hundreds of businesses in Tanzania utilizing BestTracking to optimize their operations and secure their vehicles.</p>
            </div>
            <div className="cta-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-control" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" className="form-control" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" className="form-control" required />
                </div>
                <div className="form-group">
                  <select className="form-control" required>
                    <option value="" disabled selected>Select Fleet Size</option>
                    <option value="1-5">1 - 5 Vehicles</option>
                    <option value="6-20">6 - 20 Vehicles</option>
                    <option value="21-50">21 - 50 Vehicles</option>
                    <option value="50+">50+ Vehicles</option>
                  </select>
                </div>
                <Button variant="primary" type="submit" className="w-100">Get My Free Quote</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
