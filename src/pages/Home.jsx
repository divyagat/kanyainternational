import React from 'react';
import Slider from 'react-slick';
import KanyaInternational from './KanyaInternational';
import OurWork from './OurWork';
import ClientReview from './ClientReview';
import ContactSection from './ContactSection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';

const LinkSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  const links = [
    { href: "https://kanyainternational.co", label: "kanyainternational.co", color: "#6610f2" },
    { href: "https://kanyainternational.net", label: "kanyainternational.net", color: "#17a2b8" },
    { href: "https://kanyainternational.in", label: "kanyainternational.in", color: "#fd7e14" },
    { href: "https://kanyainternational.com", label: "kanyainternational.com", color: "#28a745" },
  ];

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#f4f4fa" }}>
      <h3 className="text-center fw-bold mb-4 text-dark">🌐 Explore Our Sites</h3>
      <div className="container">
        <Slider {...settings}>
          {links.map((link, index) => (
            <div key={index} className="text-center px-3">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-100 d-inline-block text-white"
                style={{
                  backgroundColor: link.color,
                  padding: "14px 20px",
                  fontSize: "18px",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.filter = "brightness(1.15)")}
                onMouseOut={(e) => (e.target.style.filter = "none")}
              >
                {link.label}
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <style>{`
        .zoom-pan {
          animation: zoomPan 10s ease-in-out infinite alternate;
        }

        @keyframes zoomPan {
          0% { transform: scale(1) translateX(0); }
          100% { transform: scale(1.08) translateX(-2%); }
        }

        .overlay-gradient {
          background: linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
          z-index: 1;
        }

        .carousel-caption {
          z-index: 2;
          text-shadow: 0 2px 5px rgba(0,0,0,0.5);
        }

        .carousel .carousel-item {
          transition: transform 1s ease, opacity 1s ease;
        }
      `}</style>

      {/* Bootstrap Carousel */}
      <div
        id="carouselExample"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
        style={{ height: "90vh", overflow: "hidden" }}
      >
        <div className="carousel-inner" style={{ height: "100%" }}>
          {/* Slide 1 */}
          <div className="carousel-item active position-relative" style={{ height: "100%" }}>
            <div className="overlay-gradient position-absolute top-0 start-0 w-100 h-100" />
            <img
              src="/banner1-1.jpg"
              className="d-block w-100 h-100 zoom-pan"
              alt="Banner 1"
              style={{ objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block animate__animated animate__fadeInDown">
              <h2 className="text-light fw-bold">Welcome to Kanya International</h2>
              <p className="lead text-light">Empowering Women. Empowering the World.</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item position-relative" style={{ height: "100%" }}>
            <div className="overlay-gradient position-absolute top-0 start-0 w-100 h-100" />
            <img
              src="/banner2-1.jpg"
              className="d-block w-100 h-100 zoom-pan"
              alt="Banner 2"
              style={{ objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block animate__animated animate__fadeInUp">
              <h2 className="text-light fw-bold">Creative Designs</h2>
              <p className="lead text-light">We design dreams into reality.</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item position-relative" style={{ height: "100%" }}>
            <div className="overlay-gradient position-absolute top-0 start-0 w-100 h-100" />
            <img
              src="/banner3-1.jpg"
              className="d-block w-100 h-100 zoom-pan"
              alt="Banner 3"
              style={{ objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block animate__animated animate__fadeInRight">
              <h2 className="text-light fw-bold">Global Network</h2>
              <p className="lead text-light">Reach across borders. Deliver excellence.</p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Links Slider */}
      <LinkSlider />

      {/* Other Sections */}
      <KanyaInternational />
      <OurWork />
      <ClientReview />
      <ContactSection />
    </>
  );
};

export default Home;
