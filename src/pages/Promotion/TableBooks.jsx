import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../../App.css"; // Adjust path based on your project structure

const TableBooks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const images = [
    "TableBooks1.jpeg",
    "TableBooks2.jpeg",
    "TableBooks3.jpeg",
    "TableBooks4.jpeg",
    "TableBooks5.jpeg",
  ];

  return (
    <section className="container-fluid py-5" id="TableBooks" style={{ backgroundColor: "#FAF9F6" }}>
      <div className="container">
        {/* Heading */}
        <h1
          className="heighligh text-center mb-3"
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            fontFamily: "'Poppins', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Table Books
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
          Explore our elegantly crafted table books designed to leave a lasting impression on your customers and clients.
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
                  alt={`Table Book ${index + 1}`}
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

export default TableBooks;
