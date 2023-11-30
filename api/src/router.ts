import { Router} from 'express';
import { upload } from './utils/multer';

import CategorieController from './app/controllers/CategorieController';
import OrderController from './app/controllers/OrderController';
import ProductController from './app/controllers/ProductController';

export const router = Router();

//CATEGORIES
router.get('/categories', CategorieController.index);
router.post('/categories', CategorieController.store);
//router.patch('/categories', CategorieController.update);
//router.delete('/categories/:categorieId', CategorieController.delete);

//PRODUCTS
router.get('/products', ProductController.index);
router.post('/products', upload.single('image'),  ProductController.store);
router.get('/categories/:categoryId/products', CategorieController.showProductsByCategory);
//router.delete('/products/:productId', ProductController.delete);
//router.get('/products/:productId', ProductController.show);

//ORDERS
router.get('/orders', OrderController.index);
router.post('/orders', OrderController.store);
router.patch('/orders/:orderId', OrderController.update);
router.delete('/orders/:orderId', OrderController.delete);
//router.get('/orders/:orderId', OrderController.show);
