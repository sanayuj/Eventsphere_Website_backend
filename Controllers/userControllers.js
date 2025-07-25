const { json, response } = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const userModel = require("../Models/userModel");
const contactInfo = require("../Models/userContactModel");

module.exports.submitApplication = async (req, res, next) => {
  const extractImageUrl = (fullPath) => {
    const relativePath = path.relative("public/images", fullPath);
    const imageUrl = relativePath.replace(/\\/g, "/");
    return imageUrl;
  };
  const { Username, email, PositionInterest, YearOfExp, resume } = req.body;
  try {
    const emailExist = await userModel.findOne({ email: email });
    if (emailExist) {
      return res.json({ message: "Already Submitted !", status: false });
    }
    const newUser = new userModel({
      fullName: Username,
      email: email,
      positionInterest: PositionInterest,
      experienceYear: YearOfExp,
      resumeFile: extractImageUrl(req.file.path),
    });
    const userDetails = await newUser.save();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sanayrinku@gmail.com",
        pass: "dbvs gzjz njst vttd",
      },
    });

    const mailOptions = {
      from: "sanayrinku@gmail.com",
      to: "sanayuj2255@gmail.com",
      subject: "New Talent Application Received for EventSphere",
      html: `
        <h3>New Application Submitted</h3>
        <p><strong>Name:</strong> ${Username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position Interest:</strong> ${PositionInterest}</p>
        <p><strong>Years of Experience:</strong> ${YearOfExp}</p>
        <p><strong>Resume:</strong> <a href="http://localhost:4000/images/${extractImageUrl(req.file.path)}" target="_blank">View Resume</a></p>
      `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("Error sending email:", err);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    return res.json({
      message: "Application Submitted Successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server  errror", status: false });
  }
};

module.exports.contact = async (req, res, next) => {
  const { Username, email, message } = req.body;
  try {
    const emailExist = await contactInfo.findOne({ email: email });
    console.log(emailExist, "This email confirmation !!!!!!!!!!!!!!");
    if (emailExist) {
      return res.json({ message: "Email alreadt exists !", status: false });
    }
    const newUser = new contactInfo({
      Name: Username,
      email: email,
      message: message,
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
};
