import { Router } from 'express';
import { getProductsController, getProductByIdController, createProductController, deleteProductController } from '../controllers/products.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Ruta que llama a cada controlador
/* router.get('/products', getProductsController);
router.get('/products/:id', getProductByIdController);
router.post('/products/create', createProductController);
router.delete('/products/:id', deleteProductController); */

// rutas públicas:
router.get('/products', getProductsController);
router.get('/products/:id', getProductByIdController);

// Rutas protegidas:
router.post('/products/create', authenticateToken, createProductController);
router.delete('/products/:id', authenticateToken, deleteProductController);

export default router;