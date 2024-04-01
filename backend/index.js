const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./passport.js");
const dotenv = require("dotenv");
dotenv.config();
const perfumes = require("./routes/perfumes.js");
const auth = require("./routes/auth.js");
const cart = require("./routes/cart.js");

const app = express();

// Set up session middleware
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// Initialize passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Set up CORS middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL.split(","), // Allow multiple origins if provided
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

// Set up routes
app.use("/auth", auth);
app.use("/perfumes", perfumes);
app.use("/cart", cart);

// Root route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Get current backend base URL
app.get("/backend-url", (req, res) => {
  const backendBaseUrl = `${req.protocol}://${req.get("host")}`;
  res.json({ backendBaseUrl });
});

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 3000; // Use PORT environment variable or default to 3000
const mongoDBURL = process.env.MONGODB_URL; // Get MongoDB URL from environment variable

mongoose
  .connect(mongoDBURL, {})
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}, connected to database`)
    );
  })
  .catch((error) => console.log(`Failed to connect to database: ${error}`));
