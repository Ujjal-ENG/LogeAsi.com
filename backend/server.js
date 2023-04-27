/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import connectDB from './config/connectDB.js';
import authRouter from './routes/authRoutes.js';
import categoryRouter from './routes/categoryRoutes.js';
import productRouter from './routes/productRoutes.js';

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

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/product', productRouter);

// PORT
const { PORT } = process.env || 8080;

// app listen
app.listen(PORT, () => {
    console.log(`server is listen on port ${PORT}`);
});
