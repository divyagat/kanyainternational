import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const KanyaInternational = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="container-fluid py-5 bg-light" id="KanyaInternational">
      <div className="container shadow-lg rounded-4 p-4 bg-white" data-aos="zoom-in">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <img
              src="about.jpg"
              alt="Kanya International"
              className="img-fluid rounded-4 shadow"
              style={{ transition: 'transform 0.4s ease', cursor: 'pointer' }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="p-4 rounded-4 shadow-sm bg-white">
              <h2 className="mb-3 fw-bold text-danger">Kanya International</h2>
              <p className="text-muted">
                M/S Kanya International is a Proprietary Firm of Mr. Purshotam L. Sajnani working in Pune since 1991.
                <br /><br />
                We specialize in Classified and Display Advertising across India. Our services include Ad-Print Media,
                Commercial Photography, Logo Design, Model Coordination, Website Development, Digital Marketing,
                Event Planning, and Ad/Short Film Production.
                <br /><br />
                Our in-house team is dedicated to delivering high-quality, client-focused results with a commitment to
                creativity and excellence.
              </p>
              <button
                className="btn btn-danger mt-3 px-4 py-2 shadow-lg"
                data-aos="zoom-in-up"
                style={{
                  transition: 'transform 0.3s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                More About Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanyaInternational;
