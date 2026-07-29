const express = require("express");

const router = express.Router();

const {
  sendContactForm
} = require("../controllers/contactController");

const contactValidation = require("../middleware/contactValidation");

router.post("/", contactValidation, sendContactForm);

module.exports = router;