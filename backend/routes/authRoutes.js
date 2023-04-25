/* eslint-disable import/extensions */
import express from 'express';
import { loginUser, registerUser } from '../controllers/authControllers.js';

const router = express.Router();

// register router
router.post('/register', registerUser);

// login router
router.post('/login', loginUser);

export default router;
