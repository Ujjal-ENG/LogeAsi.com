/* eslint-disable no-empty */
/* eslint-disable linebreak-style */
export const createCategory = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({
            message: 'Error in Category',
            success: false,
            error,
        });
    }
};
