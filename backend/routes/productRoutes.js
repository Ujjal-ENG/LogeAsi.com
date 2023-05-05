/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import express from 'express';
import {
  categoryWiseProduct,
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductPhoto,
  getSingleProduct,
  paginationProduct,
  reletedProductController,
  searchProduct,
  shownProductPerPage,
  updateProduct,
} from '../controllers/productControllers.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js';

const router = express.Router();

// create product
router.post('/create-product', requireSignIn, isAdmin, createProduct);

// get all products
router.get('/getall-products', requireSignIn, isAdmin, getAllProducts);

// get single products
router.get('/getSingle-product/:slug', requireSignIn, isAdmin, getSingleProduct);

// get product photo
router.get('/getProduct-photo/:pid', getProductPhoto);

// delete product
router.delete('/delete-product/:id', requireSignIn, isAdmin, deleteProduct);

// update product
router.patch('/update-product/:id', requireSignIn, isAdmin, updateProduct);

// pagination product
router.get('/product-count', paginationProduct);

// product per page shown
router.get('/product-list/:count', shownProductPerPage);

// search product
router.get('/search-product/:keyword', searchProduct);

// similar search products
router.get('/search-releted-product/:pid/:cid', reletedProductController);

// category wise products
router.get('/category-wise-products/:slug', categoryWiseProduct);

// router export
export default router;
