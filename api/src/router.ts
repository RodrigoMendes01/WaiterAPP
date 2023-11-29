import { Router} from 'express';
import { listCategories } from './useCases/categories/listCategories';
import { createCategories } from './useCases/categories/createCategory';

export const router = Router();


// LIST CATEGORIES
router.get('/categories', listCategories);

// CREATE CATEGORY
router.post('/categories', createCategories);

// LIST PRODUCTS
router.get('/products', (request, response) => {
  response.send('OK');
});

// CREATE PRODUCT
router.post('/products', (request, response) => {
  response.send('OK');
});

// GET PRODUCT BY CATEGORY
router.post('/categories/:categoryId/products', (request, response) => {
  response.send('OK');
});

// LIST ORDERS
router.get('/orders', (request, response) => {
  response.send('OK');
});

// CREATE ORDER
router.post('/orders', (request, response) => {
  response.send('OK');
});

// CHANGE ORDER STATUS
router.patch('/orders/:orderId', (request, response) => {
  response.send('OK');
});

// DELETE OR CANCEL ORDER
router.delete('/orders/:orderId', (request, response) => {
  response.send('OK');
});
