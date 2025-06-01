import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#f8c8dc', height: '15vh' }}>
      <div className="container px-4 d-flex align-items-center justify-content-between h-100">

        {/* Left side: Logo */}
        <Link className="navbar-brand" to="/" style={{ flexGrow: 1, maxWidth: '150px' }}>
          <img
            src="/KANYA-LOGO-1-300x85.png"
            alt="Kanya Logo"
            style={{ height: '60%', maxHeight: '60px', objectFit: 'contain' }}
          />
        </Link>

        {/* Right side: Toggler */}
        <button
          className="navbar-toggler order-lg-last" // make toggler order last on large screens
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: 'black' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation - centered on large screens */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold fs-5" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold fs-5" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold fs-5" to="/work">WORK</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold fs-5" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        {/* Contact Buttons - only visible on large screens */}
        <div className="d-none d-lg-flex gap-2">
          <button className="btn btn-outline-dark fw-semibold">9921177816</button>
          <button className="btn btn-outline-dark fw-semibold">9422086762</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
