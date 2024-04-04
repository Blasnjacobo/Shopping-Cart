const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const CLIENT_URL = "http://localhost:5173/shopping-cart/";

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/login/failed");
    }
    // Generate JWT token
    const token = jwt.sign(
      { user: user.id, username: user.username, provider: user.provider },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    // Redirect to the main page with token appended to URL
    res.redirect(`${CLIENT_URL}?token=${token}`);
  })(req, res, next);
});

router.get("/login/success", (req, res) => {
  if (req.user) {
    const token = req.query.token;
    if (!token) {
      res.status(401).json({
        success: false,
        message: "Token not found in query parameter",
      });
    } else {
      // Assuming req.user contains user information after successful authentication
      res.status(200).json({
        success: true,
        message: "Successfully logged in",
        token: token,
        user: req.user, // Assuming `req.user` contains user information
      });
    }
  } else {
    res.status(401).json({
      success: false,
      message: "User not authenticated",
    });
  }
});

module.exports = router;
