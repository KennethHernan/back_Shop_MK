import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: String,
  stock: Number,
  categoria: String,
  img: String,              
  oferta: {                
    type: Number,
    default: 0
  }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
