import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ClassifiedAds = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <style>{`
        .custom-image {
          transition: transform 0.4s ease;
        }
        .custom-image:hover {
          transform: scale(1.02);
        }
        .rounded-4 {
          border-radius: 1rem;
        }
      `}</style>

      <div className="container-fluid  bg-light p-0" id="ClassifiedAds">
        <h1 className="heighlight display-5 fw-bold text-danger">Classified Ads</h1>

        {/* Title */}
        <div className="text-center mb-5" data-aos="fade-down">
          <p className="lead text-muted">Boost your visibility with our premium classified ads</p>
        </div>

        {/* First Image */}
        <div className="container mb-5 text-center" data-aos="zoom-in">
          <img
            src="/dis&classAds.jpeg"
            className="img-fluid custom-image rounded-4 shadow-lg w-100"
            alt="Display and Classified Ads"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>

        {/* Second Image */}
        <div className="container mt-5 text-center" data-aos="fade-up">
          <img
            src="/ClassifiedAds1.jpeg"
            className="img-fluid custom-image rounded-4 shadow"
            alt="Classified Ads Example"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        {/* Call-to-action Button */}
        <div className="text-center mt-5" data-aos="fade-up">
          <button className="btn btn-danger btn-lg px-5 shadow">
            Book Your Ad Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ClassifiedAds;
