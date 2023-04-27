/* eslint-disable new-cap */
/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty */
/* eslint-disable linebreak-style */

import fs from 'fs';
import slugify from 'slugify';
import productModel from '../models/productModel.js';

// create product controller
export const createProduct = async (req, res) => {
  try {
    const { photo } = req.files;
    if (!req.fields) {
      return res.status(400).json({
        message: 'Please Provided all fields and photo size shoulb be less than 1mb',
        success: false,
      });
    }
    const products = new productModel({ ...req.fields, slug: slugify(req.fields.name) });
console.log(products);
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }

    await products.save();

    res.status(201).json({
      message: 'Product is Successfully Created!!',
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error From CreateProduct',
      success: false,
      error,
    });
  }
};

// get all products controller
export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({}).populate('category').select('-photo').limit(12)
.sort({ createdAt: -1 });

    if (!products) {
      return res.status(401).json({
        message: 'Your not created any product yet!!',
        success: false,
      });
    }

    res.status(200).json({
      message: 'All Products you are Created',
      success: true,
      results: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error from Get All Products',
      success: false,
      error,
    });
  }
};

// get single products controller
export const getSingleProduct = async (req, res) => {
  try {
    const singleProduct = await productModel.findOne({ slug: req.params.id }).populate('category').select('-photo');
    if (!singleProduct) {
      return res.status(401).json({
        message: 'Product not found!!',
        success: false,
  });
}
    return res.status(200).json({
      message: 'Product found!!',
      success: true,
      singleProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error from GetSingleProduct',
      success: false,
      error,
    });
  }
};
