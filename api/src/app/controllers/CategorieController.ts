import { Request, Response } from 'express';
import CategorieRepository from '../repositories/CategorieRepository';

export class CategorieController {
  async index(request: Request, response: Response) {
    const categories = await CategorieRepository.findAll();

    response.json(categories);
  }
  async showProductsByCategory(request: Request, response: Response) {
    try {
      const { categoryId } = request.params;

      const products = await CategorieRepository.findByCategorie(Object(categoryId));

      response.json(products);

    } catch (error) {
      response.sendStatus(500);
    }
  }
  async show(request: Request, response: Response) {
    const { categorieId } = request.params;
    const categorie = await CategorieRepository.findById(Object(categorieId));

    if (!categorie) (
      response.status(404).json({
        error: 'Nenhuma categoria encontrada!'})
    );

    response.json(categorie);
  }
  async store(request: Request, response: Response) {
    const { name, icon } = request.body;

    if(!name && !icon) (
      response.status(400).json({
        error: 'Name and Icon are required'
      })
    );

    try {
      await CategorieRepository.create({
        name,
        icon
      });

      response.sendStatus(201);
    } catch (error) {
      response.sendStatus(500);
    }
  }
  async update(request: Request, response: Response) {
    const { categorieId } = request.params;
    const { icon, name } = request.body;

    const categorie = await CategorieRepository.update({
      icon,
      name
    }, Object(categorieId));

    response.json(categorie);
  }
  async delete(request: Request, response: Response){
    try {
      const { categorieId } = request.params;

      await CategorieRepository.delete(Object(categorieId));

      response.sendStatus(204);
    } catch (error) {
      response.sendStatus(500);
    }
  }
}

export default new CategorieController();
