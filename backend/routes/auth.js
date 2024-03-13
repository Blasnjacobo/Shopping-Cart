const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken') //* Give us a way to send a user a web token that they can use for authorization

const CLIENT_URL = "http://localhost:5173/shopping-cart/";

router.get("/login/success", (req, res) => {
  if (req.user) {
    // Create a JWT token
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // Send the JWT token back to the client
    console.log(req)
    res.status(200).json({
      success: true,
      message: "Successfully logged in",
      token: token,
      user: req.user.user,
      cart: req.user.cart
    });
  } else {
    res.status(401).json({
      success: false,
      message: "User not authenticated",
    });
  }
});

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

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/github", passport.authenticate("github", { scope: ["profile", 'email'] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;