import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    mobile: '',
    message: '',
    qrCode: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, qrCode: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('🎉 Submitted Successfully!');
  };

  return (
    <>
      <section
        style={{
          background: 'linear-gradient(135deg, #fce3ec, #ffe6fa)',
          minHeight: '100vh',
          paddingTop: '50px',
          paddingBottom: '50px',
        }}
      >
        <h1 className="text-center text-danger fw-bold mb-5" data-aos="zoom-in">
          Let’s Connect 🤝
        </h1>

        <div className="container">
          <div className="row justify-content-center align-items-start" data-aos="fade-up">
            <div className="col-lg-6 col-md-10">
              <div
                className="p-5 shadow-lg rounded-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <h2 className="text-center text-primary mb-4">📬 Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="contactName"
                      name="contactName"
                      placeholder="Name"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="contactName">Your Full Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                      placeholder="Mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="mobile">Mobile Number</label>
                  </div>

                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: '100px' }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Your Message</label>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Upload QR Code (for payment)</label>
                    <input
                      type="file"
                      className="form-control"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                    />
                  </div>

                  <div className="mb-3 text-secondary fw-bold">
                    GST Number: <span className="text-dark">27AQZPS1836M1ZS</span>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-danger w-100 py-2 fw-bold"
                    style={{ letterSpacing: '1px', fontSize: '18px' }}
                  >
                    🚀 Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-4 col-md-8 mt-4 text-center" data-aos="fade-left">
              <img
                src="public/Screenshot_6-6-2025_112218_.jpeg"
                alt="Side Banner"
                className="img-fluid rounded shadow-lg"
              />
              <div className="mt-4">
                <h5 className="fw-bold">📍 Address</h5>
                <p>123 Business Street, Pune, Maharashtra</p>
                <h6 className="fw-bold">📞 Phone</h6>
                <a href="tel:+911234567890" className="text-decoration-none text-dark">
                  +91 12345 67890
                </a>
                <h6 className="fw-bold mt-3">📧 Email</h6>
                <a href="mailto:support@yourdomain.com" className="text-decoration-none text-dark">
                  support@yourdomain.com
                </a>
              </div>
            </div>
          </div>

          {/* Map & Social */}
          <div className="mt-5" data-aos="fade-up">
            <h4 className="text-center fw-bold mb-3">🌐 Find Us On Map</h4>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.322312415079!2d73.85674211534084!3d18.52043098741798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c077b09167e1%3A0xe94f64f72b9c7e56!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1626093629799!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: '0', borderRadius: '12px' }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* Social Icons */}
          <div className="text-center mt-5" data-aos="fade-up">
            <h5 className="mb-3">✨ Connect With Us</h5>
            <div className="d-flex justify-content-center gap-4">
              <a
                href="https://facebook.com/yourpage"
                className="text-white bg-primary p-3 rounded-circle fs-5 shadow"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/yourpage"
                className="text-white bg-danger p-3 rounded-circle fs-5 shadow"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/company/yourpage"
                className="text-white bg-info p-3 rounded-circle fs-5 shadow"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
