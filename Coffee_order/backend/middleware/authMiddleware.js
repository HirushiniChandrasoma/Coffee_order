require("dotenv").config();
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization.split(" ")[1];
    
    // Verify the token using the JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Log the authorized user's role (if needed for debugging)
    console.log("Authorized as client");

    // Add the user ID from the token to the request object
    req.userId = decoded.id;
    
    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle token expiration error
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        success: false,
        message: "Token expired",
      });
    }

    // Log the error for debugging
    console.error(error);

    // Handle invalid token or any other JWT-related errors
    res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

module.exports = authMiddleware;
