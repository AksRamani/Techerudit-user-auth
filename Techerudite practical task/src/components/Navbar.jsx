import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Bitmaplogo.png"

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light py-3 mb-4">
      <div className="container-fluid">
        <a href="/" className="navbar-brand mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src={Logo} alt="Logo" height={80} width={180} loading="lazy" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Services </Link>
            </li>
            <li className="nav-item">
              <Link to="/features" className="nav-link">About us</Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link to="/faqs" className="nav-link">Case Studies</Link>
            </li>
            <li className="nav-item ">
              <button type="button" className="contact-button rounded-pill">Contact us</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
