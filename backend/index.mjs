import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import cookieSession from "cookie-session";
import passport from "passport";
import passportSetup from './passport.js';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js'
dotenv.config();

const app = express();


app.use(cookieSession({
    name: 'session',
    keys: ['Blas'],
    maxAge: 24 * 60 * 60 * 1000 
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

app.use('/auth', authRoute)

const PORT = process.env.PORT
mongoose
  .connect(process.env.mongoDBURL, {
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
  })
  .catch((error) => console.log(`${error} did ot connect`))