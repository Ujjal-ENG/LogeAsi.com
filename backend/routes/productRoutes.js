/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import express from 'express';
import formidableMiddleware from 'express-formidable';
import {
  createProduct,
  getAllProducts,
  getProductPhoto,
  getSingleProduct,
} from '../controllers/productControllers.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js';

const router = express.Router();

// create product
router.post('/create-product', requireSignIn, isAdmin, formidableMiddleware(), createProduct);

// get all products
router.get('/getall-products', requireSignIn, isAdmin, getAllProducts);

// get single products
router.get('/getSingle-product/:slug', requireSignIn, isAdmin, getSingleProduct);

// get product photo
router.get('/getProduct-photo/:pid', getProductPhoto);
// router export
export default router;
