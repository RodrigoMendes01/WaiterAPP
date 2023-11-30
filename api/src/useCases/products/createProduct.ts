import { Request, Response } from 'express';

import { Product } from '../../app/models/Product';

export async function createProduct(request: Request, response: Response) {
  try {
    const imagePath = request.file?.filename;
    const { name, description, price, category, ingredients } = request.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      imagePath,
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : []
    });

    response.json(product);

  } catch (error) {
    response.sendStatus(500);
  }

}
