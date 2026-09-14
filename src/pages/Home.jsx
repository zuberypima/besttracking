import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkedAlt, FaTruckMoving, FaGasPump, FaBell, FaShieldAlt, FaChartLine, FaShareAlt, FaMobileAlt, FaCheckCircle } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';
import MapMockup from '../components/MapMockup';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-top-subtitle animate-slide-up">VEHICLE TRACKING SOLUTIONS</span>
            <h1 className="hero-title animate-slide-up">
              YOUR VEHICLE.<br/>
              <span className="text-green">YOUR VISIBILITY.</span><br/>
              YOUR CONTROL.
            </h1>
            <p className="hero-subtitle animate-slide-up animate-delay-1">
              Track, monitor and manage your vehicles in real time with reliable GPS tracking solutions.
            </p>
            <div className="hero-actions animate-fade-in animate-delay-2">
              <Link to="/request-demo">
                 <Button variant="primary" size="lg">Get Started &rarr;</Button>
              </Link>
              <Link to="/request-demo">
                 <Button variant="outline" size="lg" style={{ color: 'white', borderColor: 'white', backgroundColor: 'transparent' }}>Request a Demo</Button>
              </Link>
            </div>
            
            <div className="hero-features-row animate-delay-3">
              <div className="hero-feature">
                <FaMapMarkedAlt className="feature-icon" />
                <span>Real-Time Tracking</span>
              </div>
              <div className="hero-feature">
                <FaShieldAlt className="feature-icon" />
                <span>Anti-Theft Protection</span>
              </div>
              <div className="hero-feature">
                <FaChartLine className="feature-icon" />
                <span>Fleet Management</span>
              </div>
              <div className="hero-feature">
                <FaMobileAlt className="feature-icon" />
                <span>Mobile Access</span>
              </div>
            </div>
            
            <div className="hero-bottom-text animate-fade-in animate-delay-3">
              <div className="green-line"></div>
              <span>A SMARTER WAY TO MOVE FORWARD</span>
            </div>
          </div>
        </div>
      </section>


      {/* Intro / About Us */}
      <section id="about" className="about section">
        <div className="container">
          <div className="section-header text-center animate-fade-in">
            <h2 className="text-gradient" style={{ fontSize: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>MORE THAN GPS TRACKING</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem' }}>
              Your vehicle is an investment. Whether you own one car or manage an entire fleet, you need more than just a location on a map.
            </p>
          </div>
          
          <div className="about-content mt-5 pt-4">
            <div className="about-text animate-fade-in">
              <h3 className="text-gradient" style={{ fontSize: '1.2rem', letterSpacing: '1px' }}>ABOUT US</h3>
              <h2>Smart Vehicle Tracking. Better Control.</h2>
              <p>
                BestTracking is a vehicle tracking and fleet management company providing reliable GPS tracking solutions in Tanzania for individuals, businesses and organizations. We provide complete vehicle tracking systems, combining reliable GPS tracking devices, professional installation, powerful tracking software, mobile access and ongoing technical support.
              </p>
              <p>
                Our solutions help vehicle owners and fleet managers monitor their vehicles in real time, understand vehicle movement and improve overall visibility and control. From a single private car to a growing commercial fleet, BestTracking makes it easier to track, monitor and manage vehicles from anywhere.
              </p>
            </div>
            <div className="about-image animate-fade-in animate-delay-1">
              <img src="/assets/security_ui.jpg" alt="About BestTracking" className="feature-image glass-panel" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="features section glass-section">
        <div className="container">
          <div className="section-header text-center animate-fade-in">
            <h2>Our Solutions</h2>
            <p>Our GPS vehicle tracking solutions include:</p>
          </div>
          
          <div className="solutions-grid mt-4 animate-fade-in animate-delay-1">
             <ul className="solutions-list">
                <li><FaCheckCircle className="text-green" /> Real-time GPS vehicle tracking</li>
                <li><FaCheckCircle className="text-green" /> Fleet management</li>
                <li><FaCheckCircle className="text-green" /> Trip history and route monitoring</li>
                <li><FaCheckCircle className="text-green" /> Geofencing and vehicle alerts</li>
                <li><FaCheckCircle className="text-green" /> Vehicle security and anti-theft monitoring</li>
                <li><FaCheckCircle className="text-green" /> Driver and vehicle activity monitoring</li>
                <li><FaCheckCircle className="text-green" /> Fleet reports and analytics</li>
                <li><FaCheckCircle className="text-green" /> Mobile and web tracking</li>
                <li><FaCheckCircle className="text-green" /> GPS tracking device installation</li>
                <li><FaCheckCircle className="text-green" /> Technical support</li>
             </ul>
          </div>

          <div className="mt-5 text-center animate-fade-in animate-delay-2" style={{ maxWidth: '900px', margin: '3rem auto 0 auto' }}>
            <p style={{ fontSize: '1.1rem' }}>
              We serve individual vehicle owners, transport and logistics companies, delivery businesses, car rental companies, construction companies, corporate fleets and other businesses that depend on vehicles for their daily operations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="about section">
        <div className="container">
          <div className="about-content">
            <div className="about-image animate-fade-in">
              <img src="/assets/tracking_ui.jpg" alt="Our Approach" className="feature-image glass-panel" />
            </div>
            <div className="about-text animate-fade-in animate-delay-1">
              <h3 className="text-gradient" style={{ fontSize: '1.2rem', letterSpacing: '1px' }}>OUR APPROACH</h3>
              <h2>Track. Monitor. Protect. Manage.</h2>
              <p>
                We believe vehicle tracking should be simple, reliable and accessible. That's why we bring the device, installation, software, mobile access and support together as one complete solution — helping our customers gain better visibility, improve accountability and make better decisions about their vehicles.
              </p>
              <p className="mt-4" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                BestTracking — Your Vehicle. Your Visibility. Your Control.
              </p>
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
