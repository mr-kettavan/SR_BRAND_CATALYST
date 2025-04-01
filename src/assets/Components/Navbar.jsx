import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sass/Navbar.scss';
import SRLogo from './logo/sr.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const toggleSocialLinks = () => {
    setShowSocialLinks(!showSocialLinks);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white text-primary">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand " to="/">
          <img src={SRLogo} alt="Logo" width="40" height="40" />
          
        </Link>

        {/* Social Media Dropdown for Mobile */}
        <div className="d-lg-none follow-us" onClick={toggleSocialLinks}>
          Follow Us <i className={`bi ${showSocialLinks ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
        </div>
        {showSocialLinks && (
          <div className="social-media-dropdown">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter"></i> Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i> Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </div>
        )}

        {/* Social Media Links for Desktop */}
        <div className="d-none d-lg-flex social-media-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;