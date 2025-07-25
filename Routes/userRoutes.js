const express = require("express");
const router = express.Router();
const cors = require("cors");
const createMulterInstance=require("../Middlewares/multer")
const uploadResume=createMulterInstance("Resumes")
const { submitApplication, contact } = require("../Controllers/userControllers");


// Enable CORS 
router.use(cors());


router.post("/contact",contact);
router.post("/submitApplication",uploadResume.single("resume"),submitApplication)


module.exports = router;
