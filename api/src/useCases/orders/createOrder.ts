import { Request, Response } from 'express';

import { Order } from '../../app/models/Order';

export async function createOrder(request: Request, response: Response) {
  try {
    const { table, products } = request.body;

    const order  = await Order.create({
      table,
      products
    });

    response.status(201).json(order);

  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }

}
