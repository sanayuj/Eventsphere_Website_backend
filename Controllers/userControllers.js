
const { json, response } = require("express");
const bcrypt = require("bcrypt");
const maxAge = 3 * 24 * 60 * 60;



module.exports.submitApplication = async (req, res, next) => {
  const {name, email, interest,experience,resume } = req.body;
  try {
    const emailExist = await userModel.findOne({ email: email });
    if (emailExist) {
      return res.json({ message: "Already Submitted !", status: false });
    }
    const newUser = new userModel({
      userName: username,
      email: email,
      password: password,
    });
    const userDetails = await newUser.save();
    // const token = createToken(userModel._id);
    return res.json({
      message: "Application Submitted Successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server in Submission", status: false });
  }
};