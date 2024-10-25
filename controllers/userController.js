const crypto = require("crypto");
const User = require("../models/userModel");
const { sendVerificationEmail } = require("../middlewares/helpers/emailHelper");

module.exports.registerUser = async (req, res) => {
  try {
    const { name, lastname, location, email, password } = req.body;
    const verificationCode = crypto.randomBytes(21).toString("hex");

    const newUser = new User({
      name,
      lastname,
      location,
      email,
      password,
      verificationCode,
    });
    await newUser.save();

    sendVerificationEmail(email, verificationCode);
    res.status(201).json({
      message:
        "Signup successful. Please check your email to verify your account.",
    });
  } catch (error) {
    res.status(500).json({ error: "Error signing up user" });
  }
};

exports.emailVerification = (req, res) => {};

module.exports.loginUser = (req, res) => {
  console.log(req.body);
};

module.exports.logOutUser = (req, res) => {
  console.log("user Logout");
};

module.exports.userDetails = (req, res) => {
  console.log("user Details");
};
