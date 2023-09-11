const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const userModel = require("../models/userModel");

const createToken = (_id) => {
  const secret = process.env.SECRET;
  return jwt.sign({ _id }, secret, { expiresIn: "1d" });
};

const signupCtrl = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    //validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "All fields must be field" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ error: "Password not strong enough" });
    }

    const emailExists = await userModel.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const token = createToken(user._id);
    res.status(201).json({ firstName, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields must be field" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Invalid login credentials" });
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return res.status(400).json({ error: "Invalid login credentials" });
    }

    const token = createToken(user._id);
    const firstName = user.firstName;

    res.status(201).json({ firstName, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signupCtrl,
  loginCtrl,
};
