const express = require("express");
const router = express.Router();
const cors = require("cors");
const submitApplication=require("../Controllers/userControllers")


router.post("/submitApplication",submitApplication);



module.exports = router;