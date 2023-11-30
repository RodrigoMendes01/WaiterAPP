import { Request, Response } from 'express';

import { Product } from '../../app/models/Product';

export async function listProducts(request: Request, response: Response) {
  try {
    const products = await Product.find();

    response.json(products);
  } catch (error) {
    response.sendStatus(500);
  }

}
