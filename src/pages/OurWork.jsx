import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const OurWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#e8cdfa" }}>
      <div className="container-fluid">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold">Our Work</h2>
          <div
            style={{
              width: "50px",
              height: "3px",
              backgroundColor: "#e63946",
              margin: "0 auto",
            }}
          ></div>
        </div>

        <div className="row justify-content-center">
          {/* Work 1 */}
          <div
            className="col-md-4 col-sm-12 mb-4 d-flex flex-column align-items-center"
            data-aos="zoom-in-up"
          >
            <div className="card shadow-lg border-0 rounded-4 p-3 text-center  h-100">
              <img
                src="img014-scaled.jpg"
                alt="Work 1"
                className="img-fluid w-100 rounded-3 mb-3"
                style={{ transition: "transform 0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <h5 className="fw-semibold">Work 1</h5>
              <p className="px-2 text-muted">
                Focus on how you can help and benefit your user. Use simple words to avoid confusion.
              </p>
            </div>
          </div>

          {/* Work 2 */}
          <div
            className="col-md-4 col-sm-12 mb-4 d-flex flex-column align-items-center"
            data-aos="zoom-in-up"
            data-aos-delay="150"
          >
            <div className="card shadow-lg border-0 rounded-4 p-3 text-center bg-white h-100">
              <img
                src="img015-scaled.jpg"
                alt="Work 2"
                className="img-fluid w-100 rounded-3 mb-3"
                style={{ transition: "transform 0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <h5 className="fw-semibold">Work 2</h5>
              <p className="px-2 text-muted">
                Focus on how you can help and benefit your user. Use simple words to avoid confusion.
              </p>
            </div>
          </div>

          {/* Work 3 */}
          <div
            className="col-md-4 col-sm-12 mb-4 d-flex flex-column align-items-center"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <div className="card shadow-lg border-0 rounded-4 p-3 text-center bg-white h-100">
              <img
                src="work3.jpg"
                alt="Work 3"
                className="img-fluid w-100 rounded-3 mb-3"
                style={{ transition: "transform 0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <h5 className="fw-semibold">Work 3</h5>
              <p className="px-2 text-muted">
                Focus on how you can help and benefit your user. Use simple words to avoid confusion.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4" data-aos="fade-up">
          <button
            className="btn btn-danger px-4 py-2 shadow"
            style={{ transition: "transform 0.3s" }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
