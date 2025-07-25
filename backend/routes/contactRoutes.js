const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { submitContactForm } = require('../controllers/contactController');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

router.post('/contact', upload.single('qrCode'), submitContactForm);

module.exports = router;
