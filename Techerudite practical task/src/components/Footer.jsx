import React from 'react';
import Logo from "../assets/Bitmaplogo.png"


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-tagline fw-bold">Tagline will go here. Lorem ipsum dolor sit amet...</p>
          <a href="mailto:user@email.com" className="footer-email">user@email.com</a>
        </div>

        <div className="footer-right">
          <div className="footer-address">
            <h4>Address</h4>
            <p>101 Office No.</p>
            <p>Road name,</p>
            <p>India</p>
          </div>

          <div className="footer-contacts">
            <h4>Contacts</h4>
            <p>user@email.com</p>
            <p>(276) 341-7690</p>
          </div>
        </div>
      </div>

      <div className="footer-nav">
        <img src={Logo} height={60} width={135}/>
        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/services">Services</a></li>
        </ul>
      <div className="footer-bottom">
        <p>&copy; 2022. All rights reserved.</p>
      </div>
      </div>

    </footer>
  );
};

export default Footer;
