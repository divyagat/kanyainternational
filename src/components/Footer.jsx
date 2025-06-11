import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      alert("Please enter a valid email address.");
    } else {
      alert(`Thanks for subscribing, ${email}!`);
      e.target.reset();
    }
  };

  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row gy-5">
          {/* Logo & About */}
          <div className="col-md-4 text-center text-md-start">
            <img
              src="/KANYA-LOGO-233x66.png"
              alt="Kanya Logo"
              className="mb-3"
              style={{ height: "55px", filter: "drop-shadow(0 2px 4px rgba(255,255,255,0.3))" }}
            />
            <h5 className="text-warning fw-bold">Kanya International</h5>
            <p className="text-light small">
              Empowering women entrepreneurs through creativity, branding, and digital solutions.
              From concept to launch, we help your business grow with impact.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-2">
            <h6 className="text-uppercase fw-semibold text-warning">Links</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="footer-link"><i className="bi bi-house me-2"></i>Home</a></li>
              <li><a href="#about" className="footer-link"><i className="bi bi-person me-2"></i>About</a></li>
              <li><a href="#work" className="footer-link"><i className="bi bi-briefcase me-2"></i>Our Work</a></li>
              <li><a href="#contact" className="footer-link"><i className="bi bi-envelope me-2"></i>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h6 className="text-uppercase fw-semibold text-warning">Contact</h6>
            <p className="small mb-1"><i className="bi bi-geo-alt-fill me-2"></i>Suchandra Corner, B.T. Kawade Road,<br />Opp. Kalashankar, Pune - 411001</p>
            <p className="small mb-1"><i className="bi bi-telephone-fill me-2"></i><a href="tel:9422086762" className="footer-link">9422086762</a></p>
            <p className="small mb-2"><i className="bi bi-whatsapp me-2"></i><a href="https://wa.me/919921177816" className="footer-link">9921177816</a></p>
            <div className="d-flex gap-3 mt-2">
              <a href="https://instagram.com/kanyainternational" target="_blank" rel="noreferrer" className="footer-social">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://facebook.com/kanyainternational" target="_blank" rel="noreferrer" className="footer-social">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h6 className="text-uppercase fw-semibold text-warning">Newsletter</h6>
            <p className="small">Get tips, news & updates straight to your inbox.</p>
            <form onSubmit={handleSubscribe} className="d-flex flex-column gap-2">
              <input
                type="email"
                name="email"
                className="form-control form-control-sm"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="btn btn-sm btn-warning fw-semibold">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary mt-5" />

        {/* Copyright */}
        <div className="row">
          <div className="col text-center">
            <small className="text-muted">
              © {new Date().getFullYear()} <span className="text-white fw-semibold">© 2024 All Rights Reserved</span>. All rights reserved.
            </small>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .footer-link {
          color: #ddd;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #ffc107;
        }
        .footer-social {
          color: #fff;
          font-size: 1.3rem;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .footer-social:hover {
          color: #ffc107;
          transform: scale(1.15);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
