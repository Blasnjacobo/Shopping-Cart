const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const session = require('express-session');
const passport = require("passport");
const dotenv = require('dotenv');
const auth = require('./routes/auth.js');
const perfumes = require('./routes/perfumes.js');
dotenv.config();
const passportSetup = require("./passport.js");
const { register } = require('./controllers/auth.js')

const app = express();;

app.use(session({
  secret: 'tu_secreto', 
  resave: false, 
  saveUninitialized: false, 
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

app.post('/auth/register', register)
app.use('/auth', auth)
app.use('/perfumes', perfumes)

const PORT = process.env.PORT
mongoose
  .connect(process.env.mongoDBURL, {
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}, you are conected to database`))
  })
  .catch((error) => console.log(`${error} did ot connect`))