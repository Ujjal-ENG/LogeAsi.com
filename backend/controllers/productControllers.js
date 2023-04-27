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
    const singleProduct = await productModel.findOne({ slug: req.params.slug }).populate('category').select('-photo');
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

// getProduct photo controller
export const getProductPhoto = async (req, res) => {
  try {
    const productPhoto = await productModel.findById(req.params.pid).select('photo');
    if (productPhoto.photo.data) {
      res.set('Content-type', productPhoto.photo.contentType);
      return res.status(200).json({
        message: 'Product Photo Found!!',
        success: true,
        data: productPhoto.photo.data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error from GetPhoto',
      success: false,
      error,
    });
  }
};

// delete product controller
export const deleteProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Successfully Deleted!!',
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error from Delete Product',
      success: false,
      error,
    });
  }
};

// update product controller
export const updateProduct = async (req, res) => {
  try {
    const { photo } = req.files;
    if (!req.fields) {
      return res.status(400).json({
        message: 'Please Provided all fields and photo size should be less than 1mb',
        success: false,
      });
    }
    const updatedProducts = await productModel.findByIdAndUpdate(req.params.id, { ...req.fields, slug: slugify(req.fields.name) }, {
      new: true,
    });

    if (photo) {
      updatedProducts.photo.data = fs.readFileSync(photo.path);
      updatedProducts.photo.contentType = photo.type;
    }

    await updatedProducts.save();

    res.status(201).json({
      message: 'Product is Successfully Updated!!',
      success: true,
      updatedProducts,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error from Update Product',
      success: false,
      error,
    });
  }
};
