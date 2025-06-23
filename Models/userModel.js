const mongoose=require("mongoose")
const resumeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  positionInterest: {
    type: String,
    required: true,
  },
  experienceYear: {
    type: String, 
    required: true,
  },
  resumeFile: {
    type: Object, 
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


  module.exports = new mongoose.model("user", userSchema);