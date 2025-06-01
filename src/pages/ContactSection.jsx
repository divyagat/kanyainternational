import "bootstrap/dist/css/bootstrap.min.css";

const ContactSection = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('/1-home.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  };

  const contentStyle = {
    maxWidth: "600px",
    width: "100%",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    padding: "2rem",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
  };

  return (
    <div style={sectionStyle}>
      <div style={contentStyle}>
        <h2 className="mb-3 fw-bold">Contact Us</h2>
        <p className="mb-2">
          Suchandra Corner, B. T. Kawade Road,<br />
          Opp. Kalashankar, Ghorpadi, Pune-411001. MH (India)
        </p>
        <p className="mb-2">Customer Care - 9422086762</p>
        <p className="mb-4">WhatsApp - 9921177816</p>
        <button className="btn btn-light px-4 py-2">Get In Touch</button>
      </div>
    </div>
  );
};

export default ContactSection;
