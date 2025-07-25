import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";



const DisplayAds = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <style>{`
        .hover-zoom {
          transition: transform 0.4s ease;
        }
        .hover-zoom:hover {
          transform: scale(1.03);
        }
        .rounded {
          border-radius: 1rem !important;
        }
      `}</style>

      {/* Hero Section */}
      <div className="container-fluid bg-light p-0" id="DisplayAds">
        <h1 className=" heighlight display-5 fw-bold  mb-4">Display Ads</h1>

        <div className="container text-center" data-aos="fade-down">
          <img
            src="/dis&classAds.jpeg"
            alt="Main Display"
            className="img-fluid rounded shadow hover-zoom"
            data-aos="zoom-in"
          />
        </div>
      </div>

      {/* Two Column Section */}
      <div className="container my-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-8" data-aos="fade-right">
            <img
              src="/dAds1.jpeg"
              alt="Display Ad 1"
              className="img-fluid rounded shadow hover-zoom"
            />
          </div>
          <div className="col-lg-4" data-aos="fade-left">
            <img
              src="public/dads4.jpeg"
              alt="Display Ad 4"
              className="img-fluid rounded shadow hover-zoom"
            />
          </div>
        </div>
      </div>

      {/* Horizontal Flex Images */}
      <div className="container my-5">
        <div className="d-flex flex-wrap justify-content-center align-items-start gap-4">
          <img
            src="/dads2.jpeg"
            alt="Display Ad 2"
            className="img-fluid rounded shadow hover-zoom"
            style={{ maxWidth: "100%", height: "auto" }}
            data-aos="zoom-in-right"
          />
          <img
            src="/dads3.jpeg"
            alt="Display Ad 3"
            className="img-fluid rounded shadow hover-zoom"
            style={{ maxWidth: "100%", height: "auto" }}
            data-aos="zoom-in-left"
          />
        </div>
      </div>

      {/* Bottom Full Width and Center Image */}
      <div className="container text-center my-5">
        <img
          src="public/dads5.jpeg"
          alt="Display Ad 5"
          className="img-fluid rounded shadow w-75 mb-4 hover-zoom"
          data-aos="fade-up"
        />
        <img
          src="public/dads6.jpeg"
          alt="Display Ad 6"
          className="img-fluid rounded shadow w-75 hover-zoom"
          data-aos="fade-up"
        />
      </div>
    </>
  );
};

export default DisplayAds;
