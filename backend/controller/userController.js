import asyncHandler from "../middlewares/asyncHandler.js";
import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res) => {
  let { name, email, password } = req.body;

  let salt = await bcrypt.genSalt(10);
  let encryptedPassword = await bcrypt.hash(password, salt);

  let existingUser = await Users.findOne({ email: email });

  if (existingUser) {
    return res.status(400).json({ message: "user already exists" });
  }

  const user = await Users.create({
    name,
    email,
    password: encryptedPassword,
  });

  res.status(201).json(user);
});

const loginUser = asyncHandler(async (req, res) => {
  let { email, password } = req.body;

  let user = await Users.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      _id: user._id,
      email: user.email,
      name: user.name,
    });
  } else {
    res.status(500).json({ message: "incorrect email or password" });
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "logout success" });
});

export { registerUser, loginUser, logoutUser };
