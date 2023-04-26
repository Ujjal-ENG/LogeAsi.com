/* eslint-disable import/extensions */
import express from 'express';
import { loginUser, registerUser, testRouter } from '../controllers/authControllers.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js';

const router = express.Router();

// register router
router.post('/register', registerUser);

// login router
router.post('/login', loginUser);

// test route
router.post('/test', requireSignIn, isAdmin, testRouter);

// protected route auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).json({ ok: true });
});

export default router;
