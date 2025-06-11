import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../../App.css"; // Adjust if necessary

const LogoDesigns = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const images = [
    "LD-2.jpeg", "LD-3.jpeg", "LD-4.jpeg", "LD-5.jpeg",
    "LD-6.png", "LD-10.jpeg", "LD-11.png", "LD-13.png",
    "LD7.jpeg", "LD8.png", "LD9.jpeg", "LD12.png",
  ];

  return (
    <section className="container-fluid py-5" id="LogoDesigns" style={{ backgroundColor: "#F9FAFC" }}>
      <div className="container">
        {/* Title */}
        <h1
          className="text-center mb-3"
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            fontFamily: "'Poppins', sans-serif",
            color: "#003366",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Logo Designs
        </h1>

        {/* Subheading */}
        <p
          className="text-center mb-5 px-3"
          style={{
            fontSize: "1.1rem",
            color: "#555",
            maxWidth: "850px",
            margin: "0 auto",
            fontFamily: "'Open Sans', sans-serif",
            lineHeight: "1.7",
          }}
        >
          Our logo designs blend creativity and branding expertise to give your business a unique identity.
        </p>

        {/* Image Cards */}
        <div className="row g-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card border-0 shadow-sm h-100 hover-zoom rounded-4">
                <img
                  src={`/${img}`}
                  alt={`Logo Design ${index + 1}`}
                  className="img-fluid rounded-4"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    border: "2px solid #eee",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoDesigns;
