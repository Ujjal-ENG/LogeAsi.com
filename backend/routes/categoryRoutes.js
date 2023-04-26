/* eslint-disable import/extensions */
import express from 'express';
import { createCategory } from '../controllers/categoryControllers.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js';

const router = express.Router();

// routes

// create category
router.post('create-category', requireSignIn, isAdmin, createCategory);

export default router;
