import { Request, Response } from 'express';

import { Category } from '../../app/models/Category';

export async function createCategories(request: Request, response: Response) {
  const { icon, name } = request.body;

  const categorie = await Category.create({
    icon,
    name
  });

  response.json(categorie);
}
