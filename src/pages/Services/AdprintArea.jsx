import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../../App.css"; // Adjust as per your structure

const AdprintArea = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const images = [
    "public/AdprintCard-1.jpeg",
    "public/AdprintCard-2.jpeg",
    "public/Adprintcard-3.jpeg",
    "public/AdprintCard-4.jpeg",
    "public/AdprintCard-5.jpeg",
    "public/AdprintCard-6.jpeg",
    "public/AdprintCard-7.jpeg",
    "public/AdprintCard-8.jpeg",
    "public/AdprintCard-9.jpeg",
  ];

  return (
    <section className="container-fluid py-5 bg-white" id="AdprintArea">
      <div className="container">
        {/* Title */}
        <h1
          className=" heighligh text-center mb-3"
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            fontFamily: "'Poppins', sans-serif",
            color: "#222",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
          }}
        >
          Explore Our Ad Print Designs
        </h1>

        {/* Subheading */}
        <p
          className="text-center mb-5 px-3"
          style={{
            fontSize: "1.1rem",
            maxWidth: "850px",
            margin: "0 auto",
            color: "#666",
            fontFamily: "'Open Sans', sans-serif",
            lineHeight: "1.8",
          }}
        >
          Our customized advertisement print services help you grab attention in the most creative ways possible. Browse through our modern, vibrant, and professional designs crafted for all your branding needs.
        </p>

        {/* Image Grid */}
        <div className="row g-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card border-0 shadow-sm h-100 hover-zoom">
                <img
                  src={`/${img}`}
                  alt={`Ad Print Card ${index + 1}`}
                  className="img-fluid rounded"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
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

export default AdprintArea;
