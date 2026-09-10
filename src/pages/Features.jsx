import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkedAlt, FaTruckMoving, FaGasPump, FaBell, FaShieldAlt, FaChartLine, FaShareAlt, FaRoute, FaClipboardList, FaFileAlt } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';
import './Features.css';

const Features = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="features-page">
      {/* Features Hero */}
      <section className="features-hero">
        <div className="features-hero-overlay"></div>
        <div className="container text-center relative z-1">
          <h1 className="animate-slide-up">Comprehensive Fleet Management</h1>
          <p className="features-hero-subtitle animate-slide-up animate-delay-1">
            Discover the tools that power the most efficient fleets in Africa. From live tracking to advanced reporting, BestTracking gives you full control.
          </p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="section core-pillars">
        <div className="container">
          <div className="section-header text-center animate-fade-in">
            <h2>The 6 Pillars of BestTracking</h2>
            <p>Our platform is built on these foundational capabilities to secure and optimize your assets.</p>
          </div>
          
          <div className="features-grid">
            <Card title="24/7 Vehicle Tracking" icon={<FaMapMarkedAlt />}>
              <p>Know the exact location of your vehicles at all times. Improve dispatching and customer service with accurate ETAs.</p>
            </Card>
            <Card title="Fuel & Maintenance" icon={<FaGasPump />}>
              <p>Save up to 20% on fuel and maintenance. Monitor consumption rates and optimize routes to reduce operational costs.</p>
            </Card>
            <Card title="Business Integration" icon={<FaChartLine />}>
              <p>Connect your fleet data seamlessly with your existing software and business processes for maximum efficiency.</p>
            </Card>
            <Card title="Professional Navigation" icon={<FaTruckMoving />}>
              <p>Keep your drivers on the best routes considering vehicle size, weight, and live traffic data.</p>
            </Card>
            <Card title="Workflow Management" icon={<FaBell />}>
              <p>Streamline communication between the office and drivers. Send jobs, messages, and updates directly to the cabin.</p>
            </Card>
            <Card title="Advanced Security" icon={<FaShieldAlt />}>
              <p>Remote engine cut-off functionality in case of theft. Secure your assets with industry-leading anti-tamper hardware.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Details: Tracking & Visibility */}
      <section className="section glass-section">
        <div className="container">
          <div className="feature-detail-row">
            <div className="feature-detail-text">
              <div className="feature-category">
                <FaMapMarkedAlt className="category-icon text-gradient" />
                <span>Tracking & Visibility</span>
              </div>
              <h2>Never lose sight of your fleet</h2>
              <p>Achieve unparalleled visibility with our high-frequency polling hardware. Your map updates constantly, ensuring you see the truth on the ground.</p>
              <ul className="feature-detail-list">
                <li><FaShareAlt /> <strong>Live ETA Sharing:</strong> Send secure links to your customers so they can track their delivery in real-time.</li>
                <li><FaRoute /> <strong>Trip History Playback:</strong> Review exactly where a vehicle went, the speed it traveled, and where it stopped up to 12 months in the past.</li>
                <li><FaMapMarkedAlt /> <strong>Bird Eye View:</strong> See all your assets clustered cleanly on one screen, color-coded by current status (moving, idle, stopped).</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="dashboard-mockup glass-panel" style={{ height: '350px' }}>
                <div className="mockup-header"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div>
                <div className="mockup-body" style={{padding: '0'}}>
                  <div style={{width: '100%', height: '100%', background: 'rgba(0, 242, 254, 0.1)', position: 'relative'}}>
                     <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(0, 242, 254, 0.5)'}}>
                       <div style={{width: '10px', height: '10px', background: 'white', borderRadius: '50%'}}></div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details: Safety & Security */}
      <section className="section">
        <div className="container">
          <div className="feature-detail-row reverse">
            <div className="feature-detail-text">
              <div className="feature-category">
                <FaShieldAlt className="category-icon text-gradient" />
                <span>Safety & Security</span>
              </div>
              <h2>Protect your assets and drivers</h2>
              <p>In Africa, security is paramount. We provide active and passive security measures to ensure your vehicles and cargo reach their destination safely.</p>
              <ul className="feature-detail-list">
                <li><FaShieldAlt /> <strong>Remote Immobilization:</strong> Disable the starter motor remotely via the app in the event of theft or unauthorized use.</li>
                <li><FaBell /> <strong>Smart Geofencing:</strong> Draw custom boundaries around depots or danger zones. Get SMS/Email alerts if a vehicle crosses the line.</li>
                <li><FaChartLine /> <strong>Driver Behavior:</strong> Automatically score drivers based on harsh braking, rapid acceleration, and cornering to reduce accidents.</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
               <div className="dashboard-mockup glass-panel" style={{ height: '350px' }}>
                <div className="mockup-header"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div>
                <div className="mockup-body" style={{flexDirection: 'column', padding: '2rem', gap: '1.5rem'}}>
                   <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255, 95, 86, 0.1)', border: '1px solid #ff5f56', borderRadius: '8px'}}>
                     <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <FaBell style={{color: '#ff5f56', fontSize: '1.5rem'}} />
                        <span style={{color: 'white', fontWeight: 'bold'}}>Geofence Exit Alert!</span>
                     </div>
                     <span style={{color: 'var(--text-secondary)'}}>10:42 AM</span>
                   </div>
                   <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255, 0.05)', borderRadius: '8px'}}>
                     <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <FaShieldAlt style={{color: 'var(--accent-primary)', fontSize: '1.5rem'}} />
                        <span style={{color: 'white'}}>Engine Cut-off Ready</span>
                     </div>
                     <div style={{width: '40px', height: '24px', background: 'var(--accent-primary)', borderRadius: '12px', position: 'relative'}}>
                        <div style={{position: 'absolute', right: '2px', top: '2px', width: '20px', height: '20px', background: 'white', borderRadius: '50%'}}></div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details: Operations & Analytics */}
      <section className="section glass-section">
        <div className="container">
          <div className="feature-detail-row">
            <div className="feature-detail-text">
              <div className="feature-category">
                <FaFileAlt className="category-icon text-gradient" />
                <span>Operations & Analytics</span>
              </div>
              <h2>Turn data into actionable insights</h2>
              <p>Move beyond simple tracking to intelligent fleet management. Our reporting tools help you spot inefficiencies and eliminate wasted costs.</p>
              <ul className="feature-detail-list">
                <li><FaGasPump /> <strong>Fuel Monitoring:</strong> Integrate with fuel level sensors to detect sudden drops (theft) and monitor fuel efficiency (KPL).</li>
                <li><FaClipboardList /> <strong>Custom Reporting:</strong> Generate automated daily, weekly, or monthly reports on mileage, stops, and utilization.</li>
                <li><FaTruckMoving /> <strong>Maintenance Scheduling:</strong> Set up reminders for oil changes and tire rotations based on actual odometer readings.</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
               <div className="dashboard-mockup glass-panel" style={{ height: '350px' }}>
                <div className="mockup-header"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div>
                <div className="mockup-body" style={{flexDirection: 'column', padding: '2rem', gap: '1.5rem', justifyContent: 'flex-end'}}>
                   <div style={{display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '150px', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                      <div style={{flex: 1, height: '40%', background: 'var(--accent-primary)', borderRadius: '4px 4px 0 0'}}></div>
                      <div style={{flex: 1, height: '70%', background: 'var(--accent-secondary)', borderRadius: '4px 4px 0 0'}}></div>
                      <div style={{flex: 1, height: '50%', background: 'var(--accent-tertiary)', borderRadius: '4px 4px 0 0'}}></div>
                      <div style={{flex: 1, height: '90%', background: 'var(--accent-primary)', borderRadius: '4px 4px 0 0'}}></div>
                      <div style={{flex: 1, height: '30%', background: 'var(--accent-secondary)', borderRadius: '4px 4px 0 0'}}></div>
                   </div>
                   <div style={{display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
                      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="conversion-banner">
        <div className="container">
          <div className="banner-content text-center animate-fade-in">
            <h2>READY TO UPGRADE YOUR FLEET MANAGEMENT?</h2>
            <p>Join hundreds of businesses utilizing BestTracking to optimize their operations and secure their vehicles.</p>
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
    </div>
  );
};

export default Features;
