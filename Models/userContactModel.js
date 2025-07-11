const mongoose=require("mongoose")
const contactInfo = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message:{
     type: String,
    required: true,
  }
});


  module.exports = new mongoose.model("ContactInfo", contactInfo);