import { Router} from 'express';
import { listProducts } from './useCases/products/listProducts';
import { createProduct } from './useCases/products/createProduct';
import { upload } from './utils/multer';

import CategorieController from './app/controllers/CategorieController';
import OrderController from './app/controllers/OrderController';

export const router = Router();

//CATEGORIES
router.get('/categories', CategorieController.index);
router.post('/categories', CategorieController.store);
router.patch('/categories', CategorieController.update);
router.delete('/categories/:categorieId', CategorieController.delete);

//PRODUCTS
router.get('/products', listProducts);
router.post('/products', upload.single('image'),  createProduct);
router.get('/categories/:categoryId/products', CategorieController.showProductsByCategory);

//ORDERS
router.get('/orders', OrderController.index);
router.get('/orders/:orderId', OrderController.show);
router.post('/orders', OrderController.store);
router.patch('/orders/:orderId', OrderController.update);
router.delete('/orders/:orderId', OrderController.delete);
