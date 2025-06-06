import React, { useState } from 'react';

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    mobile: '',
    address: '',
    gst: '',
    bank: '',
    qrCode: null,
    rateCardSmall: null,
    rateCardLarge: null
  });

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Display input values (file inputs are just filenames here)
    alert(`Form Submitted:
Contact Name: ${formData.contactName}
Email: ${formData.email}
Mobile: ${formData.mobile}
Address: ${formData.address}
GST: ${formData.gst}
Bank: ${formData.bank}
QR Code: ${formData.qrCode?.name}
Rate Card Small: ${formData.rateCardSmall?.name}
Rate Card Large: ${formData.rateCardLarge?.name}
    `);

    // Reset form
    setFormData({
      contactName: '',
      email: '',
      mobile: '',
      address: '',
      gst: '',
      bank: '',
      qrCode: null,
      rateCardSmall: null,
      rateCardLarge: null,
    });
  };

  return (
    <>
      <h1 className="text-center mt-4 mb-4">Contact Us</h1>

      {/* Contact Form */}
      <div className="container d-flex justify-content-center align-items-center py-5">
        <form className="w-75 p-5 border rounded shadow bg-light" onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Contact Details</h2>

          <div className="mb-3">
            <label htmlFor="contactName" className="form-label">Contact Person Name</label>
            <input
              type="text"
              className="form-control"
              id="contactName"
              name="contactName"
              placeholder="Enter contact person name"
              value={formData.contactName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email ID</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              name="mobile"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              rows="3"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="gst" className="form-label">GST Number</label>
            <input
              type="text"
              className="form-control"
              id="gst"
              name="gst"
              placeholder="Enter GST number"
              value={formData.gst}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bank" className="form-label">Bank Account Details</label>
            <textarea
              className="form-control"
              id="bank"
              name="bank"
              rows="3"
              placeholder="Enter bank name, account number, IFSC code"
              value={formData.bank}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="qrCode" className="form-label">Upload QR Code</label>
            <input
              type="file"
              className="form-control"
              id="qrCode"
              name="qrCode"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="rateCardSmall" className="form-label">Rate Card (Small Size)</label>
            <input
              type="file"
              className="form-control"
              id="rateCardSmall"
              name="rateCardSmall"
              accept="application/pdf,image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="rateCardLarge" className="form-label">Rate Card (Large Size)</label>
            <input
              type="file"
              className="form-control"
              id="rateCardLarge"
              name="rateCardLarge"
              accept="application/pdf,image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="container text-center mt-5">
        <h4>Get in Touch</h4>
        <p><strong>Address:</strong> 123 Business Street, Pune, Maharashtra, India</p>
        <p><strong>Phone:</strong> <a href="tel:+911234567890">+91 12345 67890</a></p>
        <p><strong>Email:</strong> <a href="mailto:support@yourdomain.com">support@yourdomain.com</a></p>
      </div>

      {/* Business Hours */}
      <div className="container text-center mt-4">
        <h5>Business Hours</h5>
        <p>Monday - Friday: 9:00 AM to 6:00 PM</p>
        <p>Saturday: 10:00 AM to 2:00 PM</p>
        <p>Sunday: Closed</p>
      </div>

      {/* Google Map */}
      <div className="container mt-4">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.322312415079!2d73.85674211534084!3d18.52043098741798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c077b09167e1%3A0xe94f64f72b9c7e56!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1626093629799!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Social Media Links */}
      <div className="container text-center mt-4 mb-5">
        <h5>Follow Us</h5>
        <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer" className="me-3">Facebook</a>
        <a href="https://instagram.com/yourpage" target="_blank" rel="noreferrer" className="me-3">Instagram</a>
        <a href="https://linkedin.com/company/yourpage" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>

      {/* Footer Image */}
      <div className="text-center mb-4">
        <img src="public/Ftthankyou.jpeg" alt="Footer" className="img-fluid" />
      </div>
    </>
  );
};

export default Contact;
