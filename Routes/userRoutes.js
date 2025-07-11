const express = require("express");
const router = express.Router();
const cors = require("cors");
const submitApplication=require("../Controllers/userControllers")
const contactInfo=require("../Controllers/userControllers")


router.post("/submitApplication",submitApplication);

router.post("/contact",contactInfo)



module.exports = router;