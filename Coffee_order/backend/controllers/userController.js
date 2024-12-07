import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = createToken(user._id);
        res.json({ success: true, message: "Login successful", token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "An error occurred during login" });
    }
};

// Token creation with expiration
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
};

// Register User
const RegisterUser = async (req, res) => {
    const { name, password, email } = req.body;

    try {
        // Check if user already exists
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // Validate password strength
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });

        let user;
        try {
            user = await newUser.save(); // Save new user
        } catch (error) {
            console.error("Error saving user:", error);
            return res.json({ success: false, message: "Error saving user" });
        }

        // Create JWT token
        let token;
        try {
            token = createToken(user._id); // Generate token
        } catch (error) {
            console.error("Error creating token:", error);
            return res.json({ success: false, message: "Error creating token" });
        }

        res.json({ success: true, message: "User registered successfully", token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error during registration" });
    }
};

export { loginUser, RegisterUser };
