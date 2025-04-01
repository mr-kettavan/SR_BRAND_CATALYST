import React from 'react';
import './sass/Footer.scss';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              SR Brand Catalyst is your one-stop solution for all your branding and e-commerce needs. We aim to provide the best services to help your business grow.
            </p>
          </div>

          {/* Quick Links */}
          

          {/* Contact Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: srbrandcatalyst@gmail.com</p>
            <p>Phone: +91 7358499564 | 7639699564</p>
            <p>Address: 171, 4TH Salligrammam Street, Chennai, India</p>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2025 SR Brand Catalyst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;