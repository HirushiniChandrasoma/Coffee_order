import express from "express";
import authController from "../controllers/authController.js";  



const router = express.Router();

router.post("/user/signup", authController.userSignup);
router.post("/login", authController.login);


export default router;
