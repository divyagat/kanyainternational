import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ClientReview = () => {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#fde7ea" }}>
      <div className="text-center">
        <img
          src="public/5-home.jpg" // Replace with actual profile image URL
          alt="Client"
          className="rounded-circle mb-3 "
          style={{ height:"70px", width:"70px"}}
        />
        <h6>Ruth A. Flora</h6>

        {/* Star ratings */}
        <div className="text-danger mb-3">
          <span>&#11044;</span>
          <span>&#11044;</span>
          <span>&#11044;</span>
          <span>&#11044;</span>
          <span>&#11044;</span>
        </div>

        <p className="fs-5 mx-auto" style={{ maxWidth: "700px" }}>
          You can showcase a client review here. Make it nice <br /> and short, then use
          this button to send them to <br /> your reviews or services page.
        </p>

        <button className="btn btn-outline-dark px-4 py-2 mt-3">
          What My Clients Say
        </button>
      </div>
    </div>
  );
};

export default ClientReview;
