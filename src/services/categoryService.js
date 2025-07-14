import Category from "../models/categoryModal.js";

export const crearCategory = async (data) => {
  const category = new Category(data);
  return await category.save();
};

export const listarCategory = async () => {
  return await Category.find().sort({ createdAt: -1 });
};
