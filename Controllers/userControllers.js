
const { json, response } = require("express");
const path = require("path");
const userModel=require("../Models/userModel")
const contactInfo=require("../Models/userContactModel")


module.exports.submitApplication = async (req, res, next) => {
  const {name, email, interest,experience,resume } = req.body;
  try {
    const emailExist = await userModel.findOne({ email: email });
    if (emailExist) {
      return res.json({ message: "Already Submitted !", status: false });
    }
    const newUser = new userModel({
      fullName: username,
      email: email,
      positionInterest: interest,
      experienceYear:experience,
      resumeFile:resume
    });
    const userDetails = await newUser.save();
    return res.json({
      message: "Application Submitted Successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal setver  errror gitnfkldfkj ", status: false });
  }
};


module.exports.contact=async(req,res,next)=>{
   const {name, email, message, } = req.body;
  try {
    const emailExist = await contactInfo.findOne({ email: email });
    if (emailExist) {
      return res.json({ message: "Already Submitted !", status: false });
    }
    const newUser = new contactInfo({
      Name: name,
      email: email,
      message:message
    });
    const userDetails = await newUser.save();
    return res.json({
      message: "Application Submitted Successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal setver  errror gitnfkldfkj ", status: false });
  }
}