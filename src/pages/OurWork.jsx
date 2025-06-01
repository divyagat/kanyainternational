import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const OurWork = () => {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#e8cdfa" }}>
        <div className="container">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Work</h2>
        <div style={{ width: '50px', height: '3px', backgroundColor: '#e63946', margin: '0 auto' }}></div>
      </div>

      <div className="row justify-content-center">
        {/* Work 1 */}
        <div className="col-md-4 col-sm-12 mb-4 d-flex flex-column align-items-center">
          <div className="d-flex flex-column align-items-center">
          
            <img
              src="public/img014-scaled.jpg"
              alt="Work 1 Bottom"
              className="img-fluid w-75"
            />
          </div>
          <h5 className="mt-3">Work 1</h5>
          <p className="text-center px-3">
            Focus on how you can help and benefit your user. Use simple words to avoid confusion.
          </p>
        </div>

        {/* Work 2 */}
        <div className="col-md-4 col-sm-12 mb-4 d-flex flex-column align-items-center">
          <div className="d-flex flex-column align-items-center">
            
            <img
              src="public/img015-scaled.jpg"
              alt="Work 2 Bottom"
              className="img-fluid w-75"
            />
          </div>
          <h5 className="mt-3">Work 2</h5>
          <p className="text-center px-3">
            Focus on how you can help and benefit your user. Use simple words to avoid confusion.
          </p>
        </div>

        {/* Work 3 */}
        <div className="col-md-4 col-sm-12 mb-4 d-flex flex-column align-items-center">
          <img
            src="public/work3.jpg"
            alt="Work 3"
            className="img-fluid w-75"
          />
          <h5 className="mt-3">Work 3</h5>
          <p className="text-center px-3">
            Focus on how you can help and benefit your user. Use simple words to avoid confusion.
          </p>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-danger px-4 py-2">View All</button>
      </div>
      </div>
    </div>
  );
};

export default OurWork;
