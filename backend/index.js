const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportSetup = require("./passport.js");
const dotenv = require("dotenv");
dotenv.config();
const perfumes = require("./routes/perfumes.js");
const auth = require("./routes/auth.js");
const cart = require("./routes/cart.js");

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
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
