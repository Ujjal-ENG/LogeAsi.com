/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import connectDB from './config/connectDB.js';

// config dotenv file
dotenv.config();

// database connection initialized
connectDB();

// create the app
const app = express();

// setup the middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// PORT
const { PORT } = process.env || 8080;

// app listen
app.listen(PORT, () => {
    console.log(`server is listen on port ${PORT}`);
});
