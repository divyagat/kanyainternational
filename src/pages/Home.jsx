import React from 'react';
import KanyaInternational from './KanyaInternational';
import OurWork from './OurWork';
import ClientReview from './ClientReview';
import ContactSection from './ContactSection';


const Home = () => {
  return (
    <>
    <div
      id="carouselExample"
      className="carousel slide"
      style={{ height: '82vh' }}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" style={{ height: '100%' }}>
        <div className="carousel-item active" style={{ height: '100%' }}>
          <img
            src="/banner1-1.jpg"
            className="d-block w-100 h-100"
            alt="Banner 1"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="carousel-item" style={{ height: '100%' }}>
          <img
            src="/banner2-1.jpg"
            className="d-block w-100 h-100"
            alt="Banner 2"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="carousel-item" style={{ height: '100%' }}>
          <img
            src="/banner3-1.jpg"
            className="d-block w-100 h-100"
            alt="Banner 3"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
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

    <KanyaInternational/>
    <OurWork/>
    <ClientReview/>
    <ContactSection/>
    </>
  );
};

export default Home;
