// client/ContactForm.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [showQRModal, setShowQRModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
    return () => AOS.refresh();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) formDataToSend.append(key, value);
    });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      if (response.ok) {
        alert('Submitted Successfully!');
        setFormData({
          contactName: '',
          email: '',
          mobile: '',
          message: '',
        });
      } else {
        alert('Submission failed: ' + result.error);
      }
    } catch (error) {
      alert('Network error: Could not submit form.');
    }
  };

  return (
    <section style={{ background: 'linear-gradient(135deg, #fce3ec, #ffe6fa)', minHeight: '20vh', paddingBottom: '50px' }}>
      <div className="container-fluid" id="Letsconnect">
        <h1 className="text-center fw-bold" data-aos="zoom-in">Let’s Connect 🤝</h1>
      </div>

      <div className="container">
        <div className="row justify-content-center align-items-start" data-aos="fade-up">
          <div className="col-lg-6 col-md-10">
            <div className="p-5 shadow-lg rounded-4 bg-white bg-opacity-75" style={{ backdropFilter: 'blur(10px)' }}>
              <h2 className="text-center text-primary mb-4">📬 Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                {['contactName', 'email', 'mobile'].map((field) => (
                  <div className="form-floating mb-3" key={field}>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      className="form-control"
                      id={field}
                      name={field}
                      placeholder={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  </div>
                ))}

                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ height: '100px' }}
                    required
                  ></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>

                <div className="mb-3 text-secondary fw-bold">
                  GST Number: <span className="text-dark">27AQZPS1836M1ZS</span>
                </div>

                {/* QR Code Button */}
                <div className="mb-4 text-center">
                  <button
                    type="button"
                    onClick={() => setShowQRModal(true)}
                    className="btn btn-outline-dark px-4 py-2 rounded-pill shadow-sm"
                    style={{ fontWeight: '600', letterSpacing: '0.5px' }}
                  >
                    📷 Scan QR Code to Pay
                  </button>
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

          {/* Contact Info */}
          <div className="Contact-Info col-lg-4 col-md-8 mt-4 text-center" data-aos="fade-left">
            <div className=" mt-4">
              <h5 className="fw-bold">📍 Address</h5>
              <p>123 Business Street, Pune, Maharashtra</p>
              <h6 className="fw-bold">📞 Phone</h6>
              <a href="tel:+911234567890" className="text-decoration-none text-dark">+91 12345 67890</a>
              <h6 className="fw-bold mt-3">📧 Email</h6>
              <a href="mailto:support@yourdomain.com" className="text-decoration-none text-dark">support@yourdomain.com</a>
            </div>
           
              <img src="/Screenshot_6-6-2025_112218_.jpeg" alt="Side Banner" className="Requestimg img-fluid rounded shadow-lg" style={{width:"75%",marginTop:"140px",marginRight:"-300px"}} />

            
          </div>
        </div>

        {/* Map */}
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
            <a href="https://facebook.com/yourpage" className="text-white bg-primary p-3 rounded-circle fs-5 shadow" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com/yourpage" className="text-white bg-danger p-3 rounded-circle fs-5 shadow" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com/company/yourpage" className="text-white bg-info p-3 rounded-circle fs-5 shadow" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && (
        <divx
          className="modal show d-block fade"
          tabIndex="-1"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(5px)',
            zIndex: 1055,
          }}
          onClick={() => setShowQRModal(false)}
        >
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content shadow-lg rounded-4 overflow-hidden">
              <div className="modal-header border-0 bg-light">
                <h5 className="modal-title">Scan QR Code to Pay</h5>
                <button type="button" className="btn-close" onClick={() => setShowQRModal(false)}></button>
              </div>
              <div className="modal-body text-center p-4 bg-white">
                <img
                  src="/QRCode.jpeg"
                  alt="QR Code"
                  style={{ maxWidth: '100%', borderRadius: '12px', border: '1px solid #ddd', padding: '8px' }}
                />
                <p className="mt-3 text-muted">Use any UPI app to scan & pay securely.</p>
              </div>
            </div>
          </div>
        </divx>
      )}
    </section>
  );
};

export default ContactForm;
