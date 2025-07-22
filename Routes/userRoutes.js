const express = require("express");
const router = express.Router();
const cors = require("cors");

// Controller functions
const { submitApplication, contact } = require("../Controllers/userControllers");

// Enable CORS (if needed globally for all routes)
router.use(cors());

// Route to handle contact form submissions
router.post("/contact",contact);
router.post("/submitApplication",submitApplication)


module.exports = router;
