const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  contactName: String,
  email: String,
  mobile: String,
  message: String,
  qrCode: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
