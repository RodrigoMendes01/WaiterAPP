import { Router} from 'express';
import { listCategories } from './useCases/categories/listCategories';
import { createCategories } from './useCases/categories/createCategory';
import { listProducts } from './useCases/products/listProducts';
import { createProduct } from './useCases/products/createProduct';
import { listProductsByCategory } from './useCases/categories/listProductsByCategory';
import { upload } from './utils/multer';
import { listOrders } from './useCases/orders/listOrders';
import { createOrder } from './useCases/orders/createOrder';
import { changeOrderStatus } from './useCases/orders/changeOrderStatus';
import { cancelOrder } from './useCases/orders/cancelOrder';

export const router = Router();

// LIST CATEGORIES
router.get('/categories', listCategories);

// CREATE CATEGORY
router.post('/categories', createCategories);

// LIST PRODUCTS
router.get('/products', listProducts);

// CREATE PRODUCT
router.post('/products', upload.single('image'),  createProduct);

// GET PRODUCT BY CATEGORY
router.get('/categories/:categoryId/products', listProductsByCategory);

// LIST ORDERS
router.get('/orders', listOrders);

// CREATE ORDER
router.post('/orders', createOrder);

// CHANGE ORDER STATUS
router.patch('/orders/:orderId', changeOrderStatus);

// DELETE OR CANCEL ORDER
router.delete('/orders/:orderId', cancelOrder);
