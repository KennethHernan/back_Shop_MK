import Product from "../models/productModal.js";

export const crearProduct = async (data) => {
  const product = new Product(data);
  return await product.save();
};

export const listarProductos = async () => {
  return await Product.find().sort({ createdAt: -1 }); // ordena por fecha descendente
};
