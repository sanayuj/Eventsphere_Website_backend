
const { json, response } = require("express");
const path = require("path");
const userModel=require("../Models/userModel")
const contactInfo=require("../Models/userContactModel");



module.exports.submitApplication = async (req, res, next) => {
  console.log(req.body.reume,"%%%%%%%%%----------------------------->>>>>>>>>#>>>>>>");
  
  const {Username, email, PositionInterest,YearOfExp,resume } = req.body;
  try {
    const emailExist = await userModel.findOne({ email: email });
    if (emailExist) {
      return res.json({ message: "Already Submitted !", status: false });
    }
    const newUser = new userModel({
      fullName: Username,
      email: email,
      positionInterest: PositionInterest,
      experienceYear:YearOfExp,
      resumeFile:resume
    });
    const userDetails = await newUser.save();
    return res.json({
      message: "Application Submitted Successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server  errror", status: false });
  }
};


module.exports.contact=async(req,res,next)=>{
  console.log(req.body,"56565656565656")
   const {Username, email, message, } = req.body;
  try {
    const emailExist = await contactInfo.findOne({ email: email });
    console.log(emailExist,"This email confirmation !!!!!!!!!!!!!!");
    if (emailExist) {
      return res.json({ message: "Email alreadt exists !", status: false });
    }
    const newUser = new contactInfo({
      Name: Username,
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
    return res.json({ message: "Internal setver  error ", status: false });
  }
}