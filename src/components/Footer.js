import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Marwyvi</h3>
          <p>Premium Online Store</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/">Support</a></li>
            <li><a href="/">Returns</a></li>
            <li><a href="/">Shipping</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Marwyvi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;