const Contact = require('../models/Contact');

const submitContactForm = async (req, res) => {
  const { contactName, email, mobile, message } = req.body;
  const qrCode = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const newContact = new Contact({ contactName, email, mobile, message, qrCode });
    await newContact.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save data" });
  }
};

module.exports = { submitContactForm };
