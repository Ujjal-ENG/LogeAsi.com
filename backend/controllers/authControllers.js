/* eslint-disable import/prefer-default-export */
// registerUser
export const registerUser = async (req, res) => {
    try {
        res.send('Koppa mama');
    } catch (error) {
        res.status(404).json({
            message: 'Bad Request from Register',
            success: false,
            error,
        });
    }
};
