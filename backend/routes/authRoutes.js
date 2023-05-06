/* eslint-disable import/extensions */
import express from 'express';
import {
    forgotPassword,
    loginUser,
    registerUser,
    testRouter,
    updateProfileController,
} from '../controllers/authControllers.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js';

const router = express.Router();

// register router
router.post('/register', registerUser);

// login router
router.post('/login', loginUser);

// forgot password
router.post('/forgot-password', forgotPassword);

// test route
router.post('/test', requireSignIn, isAdmin, testRouter);

// protected User route auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).json({ ok: true });
});

// protected Admin route auth
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).json({ ok: true });
});

// update profile
router.patch('/update-profile', updateProfileController);

export default router;
