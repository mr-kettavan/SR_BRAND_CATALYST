import React from 'react';
import './sass/Wel_scr.scss';
import backdrop from './assets/website_images/backdrop.jpg'; // Import the backdrop image
import SRLogo from './logo/sr.svg';

function Wel_scr() {
  return (
    <div
      className="welcome-container"
      style={{
        backgroundImage: `url(${backdrop})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="welcome-co2">
        {/* SR Logo */}
        <img src={SRLogo} alt="SR Brand Catalyst Logo" className="sr-logo" />

        {/* Welcome Text */}
        <h1>Welcome to SR Brand Catalyst</h1>
        <h3>Catalysing Success Through Creative Strategy</h3>
        <p>
          At SR Brand Catalyst, we bring your brand to life through innovative design,
          cutting-edge technology, and tailored marketing strategies. Whether you need
          stunning signage, eye-catching graphic design, or a complete brand overhaul,
          we’re here to fuel your success. Our diverse team of experts specializes in
          delivering high-quality solutions across multiple creative and digital platforms.
        </p>

        {/* Contact Buttons */}
        <div className="contact-buttons">
          <a href="tel:+91 7358499564" className="contact-button call-button">
            <i className="bi bi-telephone-fill"></i> Call Us
          </a>
          <a
            href="https://wa.me/7358499564?text=Hello%20SR%20Brand%20Catalyst!"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button whatsapp-button"
          >
            <i className="bi bi-whatsapp"></i> WhatsApp
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=srbrandcatalyst@gmail.com&su=Inquiry&body=Hello%20SR%20Brand%20Catalyst!"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button gmail-button"
          >
            <i className="bi bi-envelope-fill"></i> Email Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Wel_scr;