import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();

  const sectionStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/1-home.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const contentStyle = {
    maxWidth: "600px",
    width: "100%",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.15)",
    borderRadius: "20px",
    padding: "2.5rem",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.7)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    transition: "transform 0.3s ease",
  };

  const buttonStyle = {
    backgroundColor: "#ffffff",
    color: "#000",
    fontWeight: "600",
    padding: "0.6rem 2rem",
    borderRadius: "30px",
    transition: "all 0.3s ease-in-out",
    border: "none",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#f8f9fa";
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0 4px 20px rgba(255, 255, 255, 0.3)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#ffffff";
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "none";
  };

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div style={sectionStyle}>
      <div style={contentStyle} className="text-white">
        <h2 className="mb-3 fw-bold display-6">Get In Touch</h2>
        <p className="mb-3 fs-5">
          Suchandra Corner, B. T. Kawade Road,<br />
          Opp. Kalashankar, Ghorpadi, Pune-411001. MH (India)
        </p>
        <p className="mb-2 fs-5">📞 Customer Care: <strong>9422086762</strong></p>
        <p className="mb-4 fs-5">💬 WhatsApp: <strong>9921177816</strong></p>
        <button
          className="btn"
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
