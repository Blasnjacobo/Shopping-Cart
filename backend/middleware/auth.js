const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication token is required" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = decoded; // Store decoded token payload in request object
    next(); // Proceed to next middleware or route handler
  });
}

module.exports = authenticateToken;
