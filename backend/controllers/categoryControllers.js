/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty */
/* eslint-disable linebreak-style */

import slugify from 'slugify';
import categoryModel from '../models/categoryModel.js';

// create category controller
export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(401).json({
                message: 'Name is Required',
                success: false,
            });
        }

        const exisitingCategory = await categoryModel.findOne({ name });

        if (exisitingCategory) {
            return res.status(200).json({
                message: 'Category Already Exists',
                success: false,
            });
        }

        const category = await categoryModel.create({ name, slug: slugify(name) });

        res.status(201).json({
            message: 'Category is Created Successfully!!',
            success: true,
            category,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error in Category',
            success: false,
            error,
        });
    }
};

// update category controller
export const updateCategory = async (req, res) => {
    try {
        const category = await categoryModel.findByIdAndUpdate(
            req.params.id,

            { ...req.body, slug: slugify(req.body.name) },
            {
                new: true,
            },
        );

        res.status(200).json({
            message: 'Category Updated Successfully!!!',
            success: true,
            category,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error from UpdateCategory',
            success: false,
            error,
        });
    }
};

// getAll category controller
export const getAllCategory = async (req, res) => {
    try {
        const getAll = await categoryModel.find();

        if (!getAll) {
            return res.status(400).json({
                message: 'Your not created any Category yet!!',
                success: false,
            });
        }

        res.status(200).json({
            message: 'All CateGory',
            success: true,
            results: getAll.length,
            Categoires: getAll,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error from Get All Category',
            success: false,
            error,
        });
    }
};

// single category
export const singleCategory = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            message: 'Error From Single Category.',
            success: false,
            error,
        });
    }
};
