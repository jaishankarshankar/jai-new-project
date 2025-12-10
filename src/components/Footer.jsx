import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>JJ Tech</h3>
            <p className="muted">Practical learning in electronics, robotics, software and communication for school students.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p className="muted">
              Phone: +91-98765-43210
              <br />
              Email: hello@jjtech.example
            </p>
          </div>
          <div>
            <h4>Follow</h4>
            <p className="muted">Facebook • Instagram • YouTube</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
