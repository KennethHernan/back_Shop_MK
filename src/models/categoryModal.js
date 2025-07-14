import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  img: String,              
}, { timestamps: true });

export default mongoose.model('Category', categorySchema);
