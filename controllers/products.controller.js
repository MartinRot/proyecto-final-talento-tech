import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../services/products.service.js";

// Devuelve todos los productos
export const getProductsController = async (req, res) => {
  const products = await getAllProducts();
  res.json(products);
};

// Devuelve un producto por ID
export const getProductByIdController = async (req, res) => {
  const { id } = req.params; //Lee el id desde la url
  const product = await getProductById(id);
  if (!product)
    return res.status(404).json({ error: "Producto no encontrado" });
  res.json(product);
};

// Crea un nuevo producto
export const createProductController = async (req, res) => {
  const productData = req.body; // Lee el body del request
  const newProduct = await createProduct(productData);
  res.status(201).json(newProduct);
};

// Elimina un producto por ID
export const deleteProductController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteProduct(id);
    res.json({ message: 'Producto eliminado', id });
  } catch {
    res.status(404).json({ error: 'Producto no encontrado' });
  }


};
