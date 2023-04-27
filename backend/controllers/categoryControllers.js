/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty */
/* eslint-disable linebreak-style */

import slugify from 'slugify';
import categoryModel from '../models/categoryModel.js';

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
