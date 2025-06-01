import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const KanyaInternational = () => {
  return (
    <div className="container-fluid py-4 bg-light">
        <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="about.jpg" // Put your image inside the public folder, and just use "about.jpg"
            alt="Kanya International"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">Kanya International</h2>
          <p>
            M/S Kanya International is a Proprietary Firm of Mr. Purshotam L. Sajnani working in Pune since 1991.
            <br /><br />
            M/s Kanya International is working as an Advertising Agency for Classified and Display Advertising in News
            Papers all over India. We are also having specialization in Ad-Print Media, Commercial Photography, Designing
            logos and Artwork, Models Co-ordination, Website Design & Launch, Business Promotions, Digital Marketing,
            Event Organizer & Planner, Ad & Short films Producing, Directing & Making.
            <br /><br />
            M/s Kanya International having their own staff & Team to work together on all the projects taken by the
            Company. We are committed to work at the best to satisfy & better services to our Clients and Advertisers.
          </p>
          <button className="btn btn-danger mt-3">
            More About Me
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default KanyaInternational;
