import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.headers.token) {
      token = req.headers.token;
    }

    
    if (!token) {
      return res.status(401).json({ success: false, message: "JWT must be provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
      res.status(401).json({ success: false, message: error.message });
    }
  }
