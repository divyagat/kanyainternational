import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt, FaArrowLeft } from 'react-icons/fa';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  const toggleDropdown = (name) => {
    setOpenDropdown(prev => (prev === name ? null : name));
  };

  const handleLinkClick = () => {
    setNavbarOpen(false);
    setOpenDropdown(null);
  };

  const handleBackClick = () => {
    if (openDropdown) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

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
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 1000;
          min-width: 12rem;
          padding: 0.5rem 0;
          margin-top: 0.125rem;
          font-size: 1rem;
          color: #212529;
          text-align: left;
          background-color: #fff0f5;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 0.5rem;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        }
        .dropdown.show .dropdown-menu {
          display: block;
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
          <Link className="navbar-brand d-flex align-items-center" to="/" style={{ maxWidth: '160px' }}>

            <p
              style={{
                height: "10px",
                width: "10px",
                border: "1px solid black",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "400",
                fontSize: "12px",
                padding: "8px",
                position: "absolute",
                left: "200px",
                top: "15px"
              }}
            >
              R
            </p>

            <img
              src="/KANYA-LOGO-1-300x85.png"
              alt="Kanya Logo"
              className="img-fluid"
              style={{ maxHeight: '65px', objectFit: 'contain' }}
            />
          </Link>

          {/* Back Button - visible only when dropdown open */}
          {openDropdown && (
            <button className="btn btn-sm me-2 d-lg-none" onClick={handleBackClick}>
              <FaArrowLeft /> Back
            </button>
          )}

          {/* Toggle Button */}
          <button className="navbar-toggler border-0" type="button" onClick={toggleNavbar}>
            {navbarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navbar Links */}
          <div className={`navbar-collapse justify-content-center ${navbarOpen ? 'd-block' : 'd-none'} d-lg-flex`}>
            <ul className="navbar-nav mb-2 mb-lg-0 gap-3 text-center text-lg-start" ref={dropdownRef}>

              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleLinkClick}>HOME</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleLinkClick}>ABOUT</Link>
              </li>

              {/* Services Dropdown */}
              <li className={`nav-item dropdown position-relative ${openDropdown === 'services' ? 'show' : ''}`}>
                <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown('services')}>SERVICES</span>
                <ul className={`dropdown-menu ${openDropdown === 'services' ? 'show' : ''}`}>
                  {['ClassifiedAds', 'DisplayAds', 'AdprintArea', 'SocialMedia', 'DigitalMedia'].map((route, i) => (
                    <li key={i}>
                      <Link className="dropdown-item" to={`/${route}`} onClick={handleLinkClick}>
                        {route.replace(/([A-Z])/g, ' $1').trim()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Promotion Dropdown */}
              <li className={`nav-item dropdown position-relative ${openDropdown === 'promotion' ? 'show' : ''}`}>
                <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown('promotion')}>PROMOTION</span>
                <ul className={`dropdown-menu ${openDropdown === 'promotion' ? 'show' : ''}`}>
                  {['FlyersLeaflets', 'LogoDesigns', 'TableBooks', 'Calendars', 'Catalogues', 'AdShortFilm'].map((route, i) => (
                    <li key={i}>
                      <Link className="dropdown-item" to={`/${route}`} onClick={handleLinkClick}>
                        {route.replace(/([A-Z])/g, ' $1').trim()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleLinkClick}>CONTACT</Link>
              </li>

              {/* Mobile Phone Button */}
              <li className="d-lg-none nav-item mt-3">
                <a href="tel:+919921177816" className="btn phone-btn w-100">
                  <FaPhoneAlt className="me-2" />
                  +91 9921177816 / 9422086762
                </a>
              </li>
            </ul>
          </div>

          {/* Desktop Phone Button */}
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
