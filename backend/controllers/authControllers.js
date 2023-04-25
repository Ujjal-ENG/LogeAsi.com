/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */

import { hashPassword } from '../helpers/authHelper.js';
import userModel from '../models/userModel.js';

// registerUser
export const registerUser = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // validation
        if (!name || !email || !password || !phone || !address) {
            return res.status(404).json({
                message: 'Please provided all fields value!!',
                success: false,
            });
        }

        // existing user
        const isExistUser = await userModel.findOne({ email });

        if (isExistUser) {
            return res.status(200).json({
                message: 'Already Registered!!!',
                success: true,
            });
        }

        // registerUser
        const hashedPassowrd = await hashPassword(password);

        // save user
        const user = await userModel.create({ ...req.body, password: hashedPassowrd });

        res.status(201).json({
            message: 'User is Successfully registered',
            success: true,
            user,
        });
    } catch (error) {
        res.status(404).json({
            message: 'Bad Request from Register',
            success: false,
            error,
        });
    }
};
