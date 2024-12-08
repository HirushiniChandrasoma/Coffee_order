import dotenv from 'dotenv'; 
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.js'; 
import userSignupSchema from '../validations/userSignup.validation.js';

dotenv.config();

const authController = {
  userSignup: async (req, res) => {
    try {
      const { full_name, email, password } = req.body;

      // validate request body
      userSignupSchema.parse(req.body);

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        full_name,
        email,
        password: hashedPassword,
      });

      await newUser.save();

      res.status(201).json({
        success: true,
        user: {
          _id: newUser._id,
          full_name: newUser.full_name,  // Change 'name' to 'full_name'
          email: newUser.email,
        },
        message: "User created successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error,
        message: "Internal server error",
      });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // check if user status is suspended
      if (user.status === "suspended") {
        return res.status(403).json({
          success: false,
          message: "Your account has been suspended. Please contact support",
        });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          // expiresIn: "1h",
        }
      );

      res.status(200).json({
        success: true,
        user: {
          _id: user._id,
          full_name: user.full_name,  // Change 'name' to 'full_name'
          email: user.email,
        },
        token,
        message: "Logged in successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error,
        message: "Internal server error",
      });
    }
  },
};

export default authController;
