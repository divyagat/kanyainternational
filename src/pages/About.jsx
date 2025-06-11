import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  FaBrain,
  FaChartPie,
  FaClock,
  FaGlobe,
  FaFont,
  FaCreditCard,
} from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import "../App.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="About" className="bg-white text-dark">
      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <button
              className="btn shadow-sm mb-3 px-4 py-2 rounded-pill fw-semibold"
              style={{ background: "#fceeed", color: "#000" }}
            >
              Book With Us!
            </button>
            <h1 className="display-4 fw-bold">
              Find Next Place To <span className="text-primary">Visit</span>
            </h1>
            <p className="fs-5 text-muted mt-3">
              Discover amazing places at exclusive deals. Eat, Shop, Visit
              interesting places around the world.
            </p>
          </div>
          <div className="col-lg-6 text-center" data-aos="fade-left">
            <img
              src="/about1.jpg"
              alt="Travel Destination"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: "500px", objectFit: "cover", width: "90%" }}
            />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container position-relative mb-5">
        <div
          className="bg-light rounded-4 shadow p-4 d-flex flex-wrap align-items-end justify-content-between gap-3 mx-auto"
          style={{
            top: "-180px",
            zIndex: 10,
            width: "90%",
            right: "10vh",
            position: "absolute",
          }}
          data-aos="zoom-in"
        >
          <div className="flex-grow-1">
            <label className="form-label fw-semibold">Type Your Keywords</label>
            <input
              type="text"
              className="form-control rounded-pill px-4"
              placeholder="Search places..."
            />
          </div>
          <div className="flex-grow-1">
            <label className="form-label fw-semibold">Destination</label>
            <select className="form-select rounded-pill px-4">
              <option>Any</option>
              <option>India</option>
              <option>USA</option>
              <option>Europe</option>
            </select>
          </div>
          <div className="flex-grow-1">
            <label className="form-label fw-semibold">Duration</label>
            <select className="form-select rounded-pill px-4">
              <option>Any</option>
              <option>1-3 Days</option>
              <option>4-7 Days</option>
              <option>1-2 Weeks</option>
            </select>
          </div>
          <div className="mt-3 mt-md-4 mt-lg-0">
            <button className="btn btn-primary px-5 py-2 fw-semibold">
              🔍 Search
            </button>
          </div>
        </div>
      </div>

      {/* Skills / Progress Section */}
      <div className="container-fluid bg-white py-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="fw-bold mb-3">Amet Etiam Quam</h2>
              <p className="text-muted fs-5">
                Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna.
              </p>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              {[
                { skill: "Branding", percent: 90 },
                { skill: "Graphic Design", percent: 100 },
                { skill: "Social Marketing", percent: 85 },
                { skill: "Product Design", percent: 90 },
              ].map((item, index) => (
                <div className="mb-4" key={index}>
                  <div className="d-flex justify-content-between">
                    <h6 className="fw-semibold">{item.skill}</h6>
                    <span className="text-primary fw-semibold">{item.percent}%</span>
                  </div>
                  <div className="progress rounded-pill" style={{ height: "10px" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{
                        width: `${item.percent}%`,
                        transition: "width 1.5s ease",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Meet The Team */}
      <div className="container py-5 bg-light rounded-4 mt-5" data-aos="fade-up">
        <h2 className="text-center fw-bold mb-5">Meet The Team</h2>
        <div className="row g-4">
          {[
            { name: "Jeanette Kingston", role: "CEO", img: "team1.jpg" },
            { name: "Alan Cooper", role: "Vice President", img: "team2.jpg" },
            { name: "John Smithy", role: "CFO", img: "team3.jpg" },
            { name: "Peter Sandler", role: "Engineer", img: "team4.jpg" },
            { name: "Ricardo Gomez", role: "HR Manager", img: "team5.jpg" },
            { name: "James Smith", role: "CTO", img: "team6.jpg" },
          ].map((member, index) => (
            <div
              className="col-md-4 col-sm-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card border-0 shadow h-100 text-center team-card hover-scale">
                <img
                  src={`public/${member.img}`}
                  className="card-img-top rounded-top"
                  alt={member.name}
                />
                <div className="card-body">
                  <h5 className="fw-bold">{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="container-fluid mt-5 px-4">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src="public/2-about.jpg"
              alt="About Us"
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="fw-bold">Pharetra Etiam Inceptos</h2>
            <p className="fs-5 mt-3">
              Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
            <div className="row mt-4">
              <div className="col-sm-6">
                <ul className="list-unstyled fs-6">
                  <li><TiTick /> Vestibulum id ligula</li>
                  <li><TiTick /> Egestas Fermentum</li>
                  <li><TiTick /> Ultricies Bibendum</li>
                  <li><TiTick /> Fermentum Tellus</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list-unstyled fs-6">
                  <li><TiTick /> Mattis Fringilla Ultricies</li>
                  <li><TiTick /> Adipiscing Vulputate</li>
                  <li><TiTick /> Fringilla Quam Elit</li>
                  <li><TiTick /> Commodo Vestibulum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Services */}
      <div className="container-fluid mt-5 px-4">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <h2>About Services</h2>
            <p>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

              Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Aenean lacinia.
              Donec ullamcorper nulla non metus auctor fringilla.
              Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam</p>
          </div>
          <div className="col-md-6 text-center  bg-dark" data-aos="fade-left">
            <ul>
              <li><h3>Ornare Quam Justo Tellusv</h3>
                <p>Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. 
                  Aenean lacinia. </p>
              </li>
               <li><h3>Ornare Quam Justo Tellusv</h3>
                <p>Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. 
                  Aenean lacinia. </p>
              </li>
               <li><h3>Ornare Quam Justo Tellusv</h3>
                <p>Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. 
                  Aenean lacinia. </p>
              </li>
            </ul>



          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container py-5 text-center" data-aos="fade-up">
        <h2 className="fw-bold mb-5">Why Choose Us?</h2>
        <div className="row g-4">
          {[
            { icon: <FaBrain className="me-2 text-primary" />, title: "Clever System" },
            { icon: <FaChartPie className="me-2 text-success" />, title: "Smart Diversification" },
            { icon: <FaClock className="me-2 text-warning" />, title: "Great Timing" },
            { icon: <FaGlobe className="me-2 text-danger" />, title: "We Are Everywhere" },
            { icon: <FaFont className="me-2 text-info" />, title: "Google Fonts" },
            { icon: <FaCreditCard className="me-2 text-secondary" />, title: "Credit Cards" },
          ].map((item, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="p-4 border rounded-4 bg-light shadow-sm h-100 text-start hover-fade">
                <h5 className="fw-semibold">{item.icon} {item.title}</h5>
                <p className="text-muted mt-2">
                  On her way she met a copy. The copy warned the Little Blind Text that where it came from, it would have been.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
