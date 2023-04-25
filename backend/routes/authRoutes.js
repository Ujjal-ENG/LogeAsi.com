/* eslint-disable import/extensions */
import express from 'express';
import { registerUser } from '../controllers/authControllers.js';

const router = express.Router();

// register router

router.post('/register', registerUser);
