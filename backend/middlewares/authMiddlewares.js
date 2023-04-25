/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

// Protected Route
export const requireSignIn = async (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        // const { email } = req.body;
        // const { id } = await userModel.findOne({ email });
        // if (id !== decode.userId) {
        //     return res.status(400).json({
        //         message: 'Auth Failed',
        //         success: false,
        //     });
        // }
        req.user = decode;
        next();
    } catch (error) {
        return res.status(400).json({
            message: 'INvalid Authrizations',
            success: false,
            error,
        });
    }
};
// admin access
export const isAdmin = async (req, res, next) => {
    try {
        const user1 = await userModel.findById(req.user.userId);

        if (user1.role !== 1) {
            return res.status(401).json({
                message: 'Not Admin',
                success: false,
            });
        }

        next();
    } catch (error) {
        return res.status(400).json({
            message: 'Invalid Admin',
            error,
        });
    }
};
