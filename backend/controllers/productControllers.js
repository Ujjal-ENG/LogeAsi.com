/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty */
/* eslint-disable linebreak-style */

import productModel from '../models/productModel.js';

// create product controller
export const createProduct = async (req, res) => {
  try {
    const products = await productModel.create(req.body);
  } catch (error) {
    res.status(500).json({
      message: 'Error From CreateProduct',
      success: false,
      error,
    });
  }
};
