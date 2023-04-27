import mongoose from 'mongoose';

const ProductModel = new mongoose.Schema({}, { timestamps: true });

export default mongoose.model('Product', ProductModel);
