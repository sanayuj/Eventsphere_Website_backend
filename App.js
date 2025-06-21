const express = require("express");
const app = express();
const dbConnection = require("./Config/dbConfig");
const cors = require("cors");
//const cookieParser = require("cookie-parser");
const path = require("path");
const bodyParser = require("body-parser");


dbConnection.dbConnect();



app.listen(4000, () => {
  console.log("backend is running in the port of 4000");
});