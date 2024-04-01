const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieSession = require("cookie-session"); // Import cookie-session
const passport = require("passport");
const passportSetup = require("./passport.js");
const dotenv = require("dotenv");
dotenv.config();
const perfumes = require("./routes/perfumes.js");
const auth = require("./routes/auth.js");
const cart = require("./routes/cart.js");

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    // secure: true, // Uncomment this line if you're using HTTPS
    // httpOnly: true, // Uncomment this line if you don't need access to the cookie on the client-side
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://blasnjacobo.github.io/shopping-cart/",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

// Get current backend base URL
app.get("/backend-url", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hola",
  });
});

app.use("/auth", auth);
app.use("/perfumes", perfumes);
app.use("/cart", cart);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
const PORT = process.env.PORT;
mongoose
  .connect(process.env.mongoDBURL, {})
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server Port: ${PORT}, you are connected to database`)
    );
  })
  .catch((error) => console.log(`${error} did not connect`));
