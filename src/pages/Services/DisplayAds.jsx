import React from "react";

const DisplayAds = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid bg-light py-4" id="DisplayAds">
        <div className="container text-center">
          <h1 className="display-5 fw-bold text-primary mb-4">Display Ads</h1>
          <img
            src="public/dis&classAds.jpeg"
            alt="Main Display"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Two Column Section */}
      <div className="container my-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <img
              src="public/dAds1.jpeg"
              alt="Display Ad 1"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-4">
            <img
              src="public/dAds4.jpeg"
              alt="Display Ad 4"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Horizontal Flex Images */}
      <div className="container my-5">
        <div className="d-flex flex-wrap justify-content-center align-items-start gap-4">
          <img
            src="public/dads2.jpeg"
            alt="Display Ad 2"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <img
            src="public/dads3.jpeg"
            alt="Display Ad 3"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Bottom Full Width and Center Image */}
      <div className="container text-center my-5">
        <img
          src="public/dAds5.jpeg"
          alt="Display Ad 5"
          className="img-fluid rounded shadow w-75 mb-4"
        />
        <img
          src="public/dAds6.jpeg"
          alt="Display Ad 6"
          className="img-fluid rounded shadow w-75"
        />
      </div>
    </>
  );
};

export default DisplayAds;
