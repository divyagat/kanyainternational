import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../../App.css"; // Update if necessary

const AdShortFilm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const images = [
    "/ShortF1.png",
    "/ShortF2.png",
    "/Shortf3.png",
    "/Shortf4.png",
    "/Shortf5.png",
  ];

  return (
    <section className="container-fluid py-5 bg-light" id="AdShortFilm">
      <div className="container text-center mb-5">
        <h1
          className="display-5 fw-bold"
          style={{
            color: "#E91E63",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "1px",
          }}
        >
          Ad Short Films
        </h1>
        <p
          className="lead"
          style={{
            color: "#555",
            fontSize: "1.1rem",
            fontFamily: "'Open Sans', sans-serif",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Engaging and impactful ad short films crafted to elevate your brand story.
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {images.map((src, index) => (
            <div
              key={index}
              className={`col-md-6 ${index < 3 ? 'col-lg-4' : 'col-lg-6'}`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="shadow rounded-3 overflow-hidden hover-zoom">
                <img
                  src={src}
                  alt={`Short Film ${index + 1}`}
                  className="img-fluid"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    transition: "transform 0.4s ease",
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

export default AdShortFilm;
