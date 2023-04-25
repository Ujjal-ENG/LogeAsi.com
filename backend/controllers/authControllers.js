/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
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
    } catch (error) {
        res.status(404).json({
            message: 'Bad Request from Register',
            success: false,
            error,
        });
    }
};
