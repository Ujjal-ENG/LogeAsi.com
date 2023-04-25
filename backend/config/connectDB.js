import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB is Connected');
    } catch (error) {
        console.log(`DB is not connected and error is: ${error}`);
    }
};

export default connectDB;
