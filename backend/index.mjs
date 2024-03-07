import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import session from 'express-session';
import passport from "passport";
import dotenv from 'dotenv';
import authRoute from './routes/auth.mjs'
import perfumesRoute from './routes/perfumes.mjs'
dotenv.config();

const app = express();


app.use(session({
  secret: 'tu_secreto',
  resave: false,
  saveUninitialized: false
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
app.use('/perfumes', perfumesRoute)

const PORT = process.env.PORT
mongoose
  .connect(process.env.mongoDBURL, {
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}, you are conected to database`))
  })
  .catch((error) => console.log(`${error} did ot connect`))