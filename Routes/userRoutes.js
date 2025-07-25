const express = require("express");
const router = express.Router();
const cors = require("cors");
const createMulterInstance=require("../Middlewares/multer")
const uploadResume=createMulterInstance("Resumes")

// Controller functions
const { submitApplication, contact } = require("../Controllers/userControllers");

// Enable CORS (if needed globally for all routes)
router.use(cors());

// Route to handle contact form submissions
router.post("/contact",contact);
router.post("/submitApplication",uploadResume.single("resume"),submitApplication)


module.exports = router;
