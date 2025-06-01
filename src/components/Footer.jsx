import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "public/KANYA-LOGO-233x66.png"; // Update this path if your logo is elsewhere

const Footer = () => {
  return (
    <footer className="bg-white py-3 border-top">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Menu */}
          <div className="col-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start gap-3">
            <a href="#home" className="text-dark text-decoration-none">HOME</a>
            <a href="#about" className="text-dark text-decoration-none">ABOUT</a>
            <a href="#work" className="text-dark text-decoration-none">WORK</a>
            <a href="#contact" className="text-dark text-decoration-none">CONTACT</a>
          </div>

          {/* Center Logo */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <img
              src="public/KANYA-LOGO-233x66.png"
              alt="Kanya International Logo"
              style={{ height: "40px", verticalAlign: "middle", marginRight: "8px" }}
            />
      
          </div>

          {/* Right Copyright */}
          <div className="col-md-4 text-center text-md-end">
            <small className="text-dark">© 2024 All Rights Reserved</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
