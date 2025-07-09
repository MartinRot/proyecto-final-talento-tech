import {
  getAllProductsDB,
  getProductByIdDB,
  createProductDB,
  deleteProductDB,
} from '../models/products.model.js';

export const getAllProducts = async () => {
  return await getAllProductsDB();
};

export const getProductById = async (id) => {
  return await getProductByIdDB(id);
};

export const createProduct = async (productData) => {
  return await createProductDB(productData);
};

export const deleteProduct = async (id) => {
  return await deleteProductDB(id);
};
