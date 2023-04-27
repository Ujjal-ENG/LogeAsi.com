/* eslint-disable import/extensions */
import express from 'express';
import formidableMiddleware from 'express-formidable';
import { createProduct } from '../controllers/productControllers.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js';

const router = express.Router();

// create product
router.post('/create-product', requireSignIn, isAdmin, formidableMiddleware(), createProduct);

// router export
export default router;
