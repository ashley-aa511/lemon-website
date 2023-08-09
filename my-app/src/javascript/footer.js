import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="path_to_footer_logo" alt="Footer Logo" />
        </div>
        <nav className="footer-navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>123 Main Street, City</p>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="#"><img src="path_to_facebook_icon" alt="Facebook" /></a>
          <a href="#"><img src="path_to_twitter_icon" alt="Twitter" /></a>
          <a href="#"><img src="path_to_instagram_icon" alt="Instagram" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;