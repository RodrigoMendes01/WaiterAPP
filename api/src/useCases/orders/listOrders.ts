import { Request, Response } from 'express';

import { Order } from '../../app/models/Order';

export async function listOrders(request: Request, response: Response) {
  const orders = await Order.find()
    .sort({createdAt: 1})
    .populate('products.product');

  response.json(orders);
}
