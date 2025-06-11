import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  const toggleDropdown = (name) => setOpenDropdown(prev => (prev === name ? null : name));
  const handleLinkClick = () => {
    setNavbarOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <style>{`
        .navbar-custom {
          background: linear-gradient(90deg, #FDC5D5, #f8c8dc);
          min-height: 15vh;
          z-index: 999;
        }

        .navbar-nav .nav-link,
        .dropdown-toggle {
          color: #5a2a50 !important;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: color 0.3s ease-in-out;
        }

        .nav-link:hover,
        .dropdown-toggle:hover {
          color: #fff !important;
        }

        .dropdown-menu {
          border-radius: 12px;
          background-color: #fff0f5;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .dropdown-item {
          color: #5a2a50;
          transition: background 0.3s ease;
        }

        .dropdown-item:hover {
          background-color: #f8c8dc;
          color: #000;
          border-radius: 8px;
        }

        .btn-outline-dark {
          border-color: #5a2a50;
          color: #5a2a50;
        }

        .btn-outline-dark:hover {
          background-color: #5a2a50;
          color: #fff;
        }

        .navbar-toggler {
          color: #5a2a50;
        }

        .phone-btn {
          background: #5a2a50;
          color: white;
          border-radius: 8px;
        }

        .phone-btn:hover {
          background: #803a78;
          color: white;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg sticky-top shadow-sm navbar-custom">
        <div className="container-fluid px-3 px-md-5 d-flex align-items-center justify-content-between w-100">

          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/" style={{ maxWidth: '160px', cursor: 'pointer' }}>
            <img
              src="/KANYA-LOGO-1-300x85.png"
              alt="Kanya Logo"
              className="img-fluid"
              style={{ maxHeight: '65px', objectFit: 'contain' }}
            />
          </Link>

          {/* Toggler Icon */}
          <button className="navbar-toggler border-0" type="button" onClick={toggleNavbar} style={{ cursor: 'pointer' }}>
            {navbarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Menu Items */}
          <div className={`collapse navbar-collapse justify-content-center ${navbarOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mb-2 mb-lg-0 gap-3 align-items-lg-center text-center text-lg-start">

              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleLinkClick}>HOME</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleLinkClick}>ABOUT</Link>
              </li>

              {/* SERVICES Dropdown */}
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown('services')}>
                  SERVICES
                </span>
                <ul className={`dropdown-menu ${openDropdown === 'services' ? 'show' : ''}`}>
                  <li><Link className="dropdown-item" to="/ClassifiedAds" onClick={handleLinkClick}>Classified Ads</Link></li>
                  <li><Link className="dropdown-item" to="/DisplayAds" onClick={handleLinkClick}>Display Ads</Link></li>
                  <li><Link className="dropdown-item" to="/AdprintArea" onClick={handleLinkClick}>Ad Print Area</Link></li>
                  <li><Link className="dropdown-item" to="/SocialMedia" onClick={handleLinkClick}>Social Media</Link></li>
                  <li><Link className="dropdown-item" to="/DigitalMedia" onClick={handleLinkClick}>Digital Media</Link></li>
                </ul>
              </li>

              {/* PROMOTION Dropdown */}
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown('promotion')}>
                  PROMOTION
                </span>
                <ul className={`dropdown-menu ${openDropdown === 'promotion' ? 'show' : ''}`}>
                  <li><Link className="dropdown-item" to="/FlyersLeaflets" onClick={handleLinkClick}>Flyers Leaflets</Link></li>
                  <li><Link className="dropdown-item" to="/LogoDesigns" onClick={handleLinkClick}>Logo Designs</Link></li>
                  <li><Link className="dropdown-item" to="/TableBooks" onClick={handleLinkClick}>Table Books</Link></li>
                  <li><Link className="dropdown-item" to="/Calendars" onClick={handleLinkClick}>Calendars</Link></li>
                  <li><Link className="dropdown-item" to="/Catalogues" onClick={handleLinkClick}>Catalogues</Link></li>
                  <li><Link className="dropdown-item" to="/AdShortFilm" onClick={handleLinkClick}>Ad & Short Films</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleLinkClick}>CONTACT</Link>
              </li>

              {/* Phone (Mobile View) */}
              <li className="d-lg-none nav-item mt-3">
                <a href="tel:+919921177816" className="btn phone-btn w-100">
                  <FaPhoneAlt className="me-2" />
                  +91 9921177816 / 9422086762
                </a>
              </li>
            </ul>
          </div>

          {/* Phone (Desktop Only) */}
          <div className="d-none d-lg-flex gap-2">
            <a href="tel:+919921177816" className="btn btn-outline-dark fw-semibold d-flex align-items-center">
              <FaPhoneAlt className="me-2" />
              +91 9921177816 / 9422086762
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
