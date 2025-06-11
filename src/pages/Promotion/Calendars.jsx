import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../../App.css"; // Adjust path based on your folder structure

const Calendars = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="container-fluid py-5"
      id="Calendars"
      style={{ backgroundColor: "#F4F4F4" }}
    >
      <div className="container">
        {/* Title */}
        <h1
          className="text-center mb-3"
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            fontFamily: "'Poppins', sans-serif",
            color: "#274472",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          Calendars
        </h1>

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
          Showcase your brand every day with our custom-designed calendars that leave a lasting impression on desks and walls.
        </p>

        {/* Images */}
        <div className="row g-4 justify-content-center">
          <div
            className="col-12 col-md-6"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="card border-0 shadow-sm h-100 hover-zoom rounded-4">
              <img
                src="/Calendar1.jpeg"
                alt="Calendar 1"
                className="img-fluid rounded-4"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  border: "2px solid #ddd",
                }}
              />
            </div>
          </div>
          <div
            className="col-12 col-md-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="card border-0 shadow-sm h-100 hover-zoom rounded-4">
              <img
                src="/Calendar2.jpeg"
                alt="Calendar 2"
                className="img-fluid rounded-4"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  border: "2px solid #ddd",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendars;
