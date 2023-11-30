import { Request, Response } from 'express';
import ProductRepository from '../repositories/ProductRepository';

export class ProductController {
  async index(request: Request, response: Response) {
    const orders = await ProductRepository.findAll();

    response.json(orders);
  }

  async show(request: Request, response: Response) {
    const { productId } = request.params;
    const product = await ProductRepository.findById(Object(productId));

    if (!product) (
      response.status(404).json({
        error: 'Nenhum produto encontrado!'})
    );

    response.json(product);
  }

  async store(request: Request, response: Response) {
    try {
      const imagePath = request.file?.filename;

      const { name, description, price, category, ingredients } = request.body;

      const product  = await ProductRepository.create({
        name,
        description,
        price: Number(price),
        imagePath,
        category,
        ingredients: ingredients ? JSON.parse(ingredients) : []
      });

      response.status(201).json(product);

    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async update(request: Request, response: Response) {
    try {
      const imagePath = request.file?.filename;
      const { productId } = request.params;
      const { name, description, price, category, ingredients } = request.body;

      const product  = await ProductRepository.update(Object(productId), {
        name,
        description,
        price: Number(price),
        imagePath,
        category,
        ingredients: ingredients ? JSON.parse(ingredients) : []
      });

      response.status(201).json(product);

    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async delete(request: Request, response: Response){
    try {
      const { productId } = request.params;

      await ProductRepository.delete(Object(productId));

      response.sendStatus(204);

    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
export default new ProductController();
