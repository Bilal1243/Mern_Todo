import Users from "../models/userModel.js";
import jwt from "jsonwebtoken";

const protect = async (req, res, next) => {

    let token = req.cookies.jwt;


  if (!token) {
    return res.status(401).json({ message: "Not authorized , no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await Users.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "user not found" });
    }

    req.user = user;

    next();

  } catch (error) {
    return res.status(401).json({ message: "Not authorized , token failed" });
  }
};

export { protect };
