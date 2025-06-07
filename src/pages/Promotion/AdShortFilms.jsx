import React from 'react';

const AdShortFilm = () => {
  return (
    <>
      <div className="container-fluid py-5 bg-light" id="AdShortFilm">
        <div className="container text-center mb-5">
          <h1 className="display-5 fw-bold text-danger">Ad Short Films</h1>
          <p className="lead text-muted">Engaging and impactful ad short films crafted for your brand</p>
        </div>

        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <img
                src="/ShortF1.png"
                alt="Short Film 1"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <img
                src="/ShortF2.png"
                alt="Short Film 2"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <img
                src="/Shortf3.png"
                alt="Short Film 3"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6 col-lg-6">
              <img
                src="/Shortf4.png"
                alt="Short Film 4"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6 col-lg-6">
              <img
                src="/Shortf5.png"
                alt="Short Film 5"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdShortFilm;
