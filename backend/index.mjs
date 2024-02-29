import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cors from 'cors'


const app = express()

dotenv.config()

app.use(
    cors({
        origin: 'http://localhost:5173/shopping-cart/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    })
)


// Middleware para permitir el análisis de JSON en las solicitudes
app.use(express.json());

/* ROUTES WITH FILES */

/* ROUTES */
// app.use('/books', booksRoutes)

const PORT = process.env.PORT

mongoose
    .connect(process.env.mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is running at PORT: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });