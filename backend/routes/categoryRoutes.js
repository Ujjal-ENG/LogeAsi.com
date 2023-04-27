/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import express from 'express';
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  singleCategory,
  updateCategory,
} from '../controllers/categoryControllers.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js';

const router = express.Router();

// routes

// create category
router.post('/create-category', requireSignIn, isAdmin, createCategory);

// update category
router.patch('/update-category/:id', requireSignIn, isAdmin, updateCategory);

// get all category
router.get('/getall-category', requireSignIn, isAdmin, getAllCategory);

// single category
router.get('/single-category/:slug', singleCategory);

// delete category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategory);

export default router;
