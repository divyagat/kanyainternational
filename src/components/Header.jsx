import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#f8c8dc', height: '15vh' }}>
      <div className="container px-4 d-flex align-items-center justify-content-between h-100">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/" style={{ flexGrow: 1, maxWidth: '150px' }}>
          <img
            src="/KANYA-LOGO-1-300x85.png"
            alt="Kanya Logo"
            style={{ height: '60%', maxHeight: '60px', objectFit: 'contain' }}
          />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler order-lg-last"
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

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-3">

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold fs-5" to="/">HOME</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold fs-5" to="/about">ABOUT</Link>
            </li>

            {/* SERVICES Dropdown */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setHoveredDropdown('services')}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <span className="nav-link dropdown-toggle text-dark fw-bold fs-5" role="button">
                SERVICES
              </span>
              <ul className={`dropdown-menu ${hoveredDropdown === 'services' ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="/ClassifiedAds">Classified Ads</Link></li>
                <li><Link className="dropdown-item" to="/DisplayAds">Display Ads</Link></li>
                <li><Link className="dropdown-item" to="/AdprintArea">Ad Print Area</Link></li>
                <li><Link className="dropdown-item" to="/SocialMedia">Social Media</Link></li>
                <li><Link className="dropdown-item" to="/DigitalMedia">Digital Media</Link></li>
              </ul>
            </li>

            {/* PROMOTION Dropdown */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setHoveredDropdown('promotion')}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <span className="nav-link dropdown-toggle text-dark fw-bold fs-5" role="button">
                PROMOTION
              </span>
              <ul className={`dropdown-menu ${hoveredDropdown === 'promotion' ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="/FlyersLeaflets">Flyers Leaflets</Link></li>
                <li><Link className="dropdown-item" to="/LogoDesigns">Logo Designs</Link></li>
                <li><Link className="dropdown-item" to="/TableBooks">Table Books</Link></li>
                <li><Link className="dropdown-item" to="/Calendars">Calendars</Link></li>
                <li><Link className="dropdown-item" to="/Catalogues">Catalogues</Link></li>
                <li><Link className="dropdown-item" to="/AdShortFilm">Ad & Short Films</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold fs-5" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        {/* Phone Button */}
        <div className="d-none d-lg-flex gap-2">
          <button className="btn btn-outline-dark fw-semibold">+91 9921177816 / 9422086762</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
