/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */

import jwt from 'jsonwebtoken';
import { comparePassword, hashPassword } from '../helpers/authHelper.js';
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

// login User
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(400).json({
                message: 'Please provide Email and Password!!',
                success: false,
            });
        }

        // check email exist or not
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: 'Please Register first!!',
                success: false,
            });
        }

        // match password
        const matchPassword = await comparePassword(password, user.password);
        if (!matchPassword) {
            return res.status(400).json({
                message: 'Invalid email or password!!',
                success: false,
            });
        }

        // create token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });

        res.status(200).json({
            message: 'Login Successfully!!',
            success: true,
            user,
            token,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Bad Request from LoginUser',
            success: false,
            error,
        });
    }
};

// forgot password
export const forgotPassword = async (req, res) => {};

// test router
export const testRouter = (req, res) => {
    res.send('Kopa mama this is protected');
};
