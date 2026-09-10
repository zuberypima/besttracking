import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';
import { FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <FaMapMarkerAlt className="logo-icon" />
          <span className="logo-text">Best<span className="text-gradient">Tracking</span></span>
        </Link>

        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/features" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Features</Link>
          <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <div className="mobile-only">
            <Link to="/request-demo" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-100">Get a Quote</Button>
            </Link>
          </div>
        </div>

        <div className="navbar-actions desktop-only">
          <Button variant="outline" className="mr-2">Login</Button>
          <Link to="/request-demo">
            <Button variant="primary">Get a Quote</Button>
          </Link>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
