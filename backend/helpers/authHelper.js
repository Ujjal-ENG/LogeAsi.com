/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);
        return hashPassword;
    } catch (error) {
        console.log(error);
    }
};

export const comparePassword = async (password, hashPassword) => bcrypt.compare(password, hashPassword);
