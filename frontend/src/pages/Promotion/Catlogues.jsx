import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../../App.css"; // Adjust path as needed

const Catalogues = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const images = [
    "Catlogues1.jpeg",
    "Catlogues2.jpeg",
    "Catlogues3.jpeg",
    "Catlogues4.jpeg",
    "Catlogues5.jpeg"
  ];

  return (
    <section className="container-fluid p-0 bg-light" id="Catalogues">
        {/* Title */}
        <h1
          className="heighligh text-center mb-4"
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          Catalogues
        </h1>
      <div className="container">
      

        {/* Subtitle */}
        <p
          className="text-center mb-5"
          style={{
            fontSize: "1.1rem",
            color: "#555",
            fontFamily: "'Open Sans', sans-serif",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Explore our wide range of catalogues designed to showcase your brand, services, and products in a premium format.
        </p>

        <div className="row g-4">
          {images.map((img, index) => (
            <div
              className="col-12 col-sm-6 col-md-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="shadow-sm p-2 bg-white rounded-4 hover-zoom"
                style={{
                  height: '300px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid #ddd',
                }}
              >
                <img
                  src={`/${img}`}
                  alt={`Catalogue ${index + 1}`}
                  className="w-100 h-100 rounded-3"
                  style={{
                    objectFit: 'contain',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease'
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

export default Catalogues;
