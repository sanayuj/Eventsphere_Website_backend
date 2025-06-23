
const { json, response } = require("express");

const userModel=require("../Models/userModel")


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
    return res.json({ message: "Internal server in Submission", status: false });
  }
};