import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkedAlt, FaTruckMoving, FaGasPump, FaBell, FaShieldAlt, FaChartLine, FaShareAlt } from 'react-icons/fa';
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
            <h1 className="hero-title animate-slide-up">
              TRACK YOUR VEHICLES.<br/>
              <span className="text-gradient">IMPROVE PRODUCTIVITY.</span><br/>
              REDUCE COSTS.
            </h1>
            <p className="hero-subtitle animate-slide-up animate-delay-1">
              With BestTracking you get it done.
            </p>
            <div className="hero-actions animate-fade-in animate-delay-2">
              <Link to="/request-demo">
                 <Button variant="primary" size="lg">Request a free trial &gt;</Button>
              </Link>
              <Link to="/request-demo">
                 <Button variant="glass" size="lg">Get a Quote</Button>
              </Link>
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
            
            <div className="hero-visual animate-fade-in animate-delay-1">
              <img src="/assets/hero_dashboard.jpg" alt="Fleet Management Dashboard" className="hero-image glass-panel" />
            </div>
        </div>
      </section>


      {/* Contact / CTA Section */}
      <section id="features" className="features section">
        <div className="container">
          <div className="section-header text-center animate-fade-in">
            <h2>The No. 1 Fleet Management Solution</h2>
            <p>Everything you need to secure, monitor, and manage your vehicles efficiently.</p>
          </div>
          
          <div className="features-grid">
            <Card 
              title="24/7 Vehicle Tracking" 
              icon={<FaMapMarkedAlt />}
              className="animate-fade-in"
            >
              <p>Know the exact location of your vehicles at all times. Improve dispatching and customer service with accurate ETAs.</p>
            </Card>
            
            <Card 
              title="Fuel & Maintenance" 
              icon={<FaGasPump />}
              className="animate-fade-in animate-delay-1"
            >
              <p>Save up to 20% on fuel and maintenance. Monitor consumption rates and optimize routes to reduce operational costs.</p>
            </Card>
            
            <Card 
              title="Business Integration" 
              icon={<FaChartLine />}
              className="animate-fade-in animate-delay-2"
            >
              <p>Connect your fleet data seamlessly with your existing software and business processes for maximum efficiency.</p>
            </Card>
            
            <Card 
              title="Professional Navigation" 
              icon={<FaTruckMoving />}
              className="animate-fade-in"
            >
              <p>Keep your drivers on the best routes considering vehicle size, weight, and live traffic data.</p>
            </Card>
            
            <Card 
              title="Workflow Management" 
              icon={<FaBell />}
              className="animate-fade-in animate-delay-1"
            >
              <p>Streamline communication between the office and drivers. Send jobs, messages, and updates directly to the cabin.</p>
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

      {/* Advanced Capabilities Section */}
      <section className="advanced-features section glass-section">
        <div className="container">
          <div className="section-header text-center animate-fade-in">
            <h2>Track Anything and Everything</h2>
            <p>Comprehensive tools designed for scale, efficiency, and deep analytics.</p>
          </div>

          <div className="feature-row">
            <div className="feature-row-text animate-fade-in">
              <h3>Smart Route Planning & Dispatch</h3>
              <p>Plan routes along with their TATs, stoppage times, halt times & no-entry timezones. Analyse data route-wise to identify deviations and use trends to coach drivers.</p>
              <ul className="about-list">
                <li><strong>Live Traffic Routing:</strong> Increase fuel efficiency and reduce ETAs.</li>
                <li><strong>Deviation Alerts:</strong> Know instantly when a driver goes off course.</li>
                <li><strong>Multi-Asset Support:</strong> Track cars, trailers, and construction machinery.</li>
              </ul>
            </div>
            <div className="feature-row-visual animate-fade-in animate-delay-1">
              <img src="/assets/tracking_ui.jpg" alt="Tracking Map Interface" className="feature-image glass-panel" />
            </div>
          </div>

          <div className="feature-row reverse mt-5">
            <div className="feature-row-text animate-fade-in">
              <h3>Custom Reporting & Analytics</h3>
              <p>Get the hawk-eye view of stoppage time across known and unknown sites to identify areas where drivers are spending more time, leading to unwanted thefts or delays.</p>
              <ul className="about-list">
                <li><strong>Stoppage Analytics:</strong> Monitor exact halt durations and locations.</li>
                <li><strong>Trip Playbacks:</strong> Replay any past trip visually on the map.</li>
                <li><strong>Time On Site:</strong> Measure precise load and unload times.</li>
              </ul>
            </div>
            <div className="feature-row-visual animate-fade-in animate-delay-1">
              <img src="/assets/analytics_ui.jpg" alt="Analytics Dashboard" className="feature-image glass-panel" />
            </div>
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
              <img src="/assets/security_ui.jpg" alt="Security Dashboard" className="feature-image glass-panel" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-header text-center animate-fade-in">
            <h2>Trusted by businesses everywhere</h2>
            <p>See how we're helping companies improve efficiency and cut costs.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card glass-panel animate-fade-in">
              <p className="quote">"When time is money, BestTracking helps us maximize efficiency. We've seen a 15% reduction in fuel costs within the first quarter."</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{background: 'var(--accent-primary)'}}></div>
                <div>
                  <h4>John M.</h4>
                  <span>Logistics Director</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card glass-panel animate-fade-in animate-delay-1">
              <p className="quote">"The 24/7 visibility has completely transformed how we dispatch our drivers. Customer satisfaction is at an all-time high."</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{background: 'var(--accent-secondary)'}}></div>
                <div>
                  <h4>Sarah K.</h4>
                  <span>Operations Manager</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card glass-panel animate-fade-in animate-delay-2">
              <p className="quote">"Security was our main concern. The remote cut-off and geofencing alerts give us the peace of mind we needed."</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{background: 'var(--accent-tertiary)'}}></div>
                <div>
                  <h4>David T.</h4>
                  <span>Fleet Owner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner Section */}
      <section className="conversion-banner">
        <div className="container">
          <div className="banner-content text-center animate-fade-in">
            <h2>RETURN ON INVESTMENT IN 6 TO 9 MONTHS ON AVERAGE</h2>
            <p>Find out how much you can save and how quickly you can get started.</p>
            <div className="banner-cta">
              <Link to="/request-demo">
                <Button variant="primary" size="lg">Get a demo</Button>
              </Link>
              <Link to="/request-demo">
                <Button variant="outline" size="lg" style={{borderColor: 'white', color: 'white'}}>Talk to sales</Button>
              </Link>
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
