import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/assets/logo.png" alt="BestTracking Logo" className="logo-image" />
            </Link>
            <p className="footer-description">
              The premier car tracking and fleet management solution for businesses across Tanzania and Africa. Secure your assets with real-time visibility.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><FaFacebookF /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaLinkedinIn /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-list">
                <li><a href="#">Real-Time Tracking</a></li>
                <li><a href="#">Fleet Management</a></li>
                <li><a href="#">Fuel Monitoring</a></li>
                <li><a href="#">Geofencing Alerts</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Partners</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="footer-list">
                <li>Lumumba Tower, Second Floor<br/>Dar-es-salaam, Tanzania</li>
                <li>info@besttracking.co.tz</li>
                <li>+255 713 788 841</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BestTracking. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
