import { Request, Response } from 'express';

import { Product } from '../../app/models/Product';

export async function listProductsByCategory(request: Request, response: Response) {
  try {
    const { categoryId } = request.params;

    const products = await Product.find().where('category').equals(categoryId);

    response.json(products);

  } catch (error) {
    response.sendStatus(500);
  }

}
