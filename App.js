const express = require("express");
const app = express();
const dbConnection = require("./Config/dbConfig");
const cors = require("cors");
//const cookieParser = require("cookie-parser");
const path = require("path");
const bodyParser = require("body-parser");
const userRoute=require("./Routes/userRoutes")


dbConnection.dbConnection().then(() => {
  app.listen(4000, () => {
    console.log("🚀 Server is running on http://localhost:4000🚀");
  });
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "public/images")));


app.use("/",userRoute);

