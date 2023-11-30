import { Category } from '../models/Category';
import { Product } from '../models/Product';

interface Category {
  id?: object
  icon?: string;
  name?: string;
}

class CategorieRepository {
  async findAll() {
    const documents = await Category.find();

    return documents;
  }

  async findById(id: Category) {
    const document = await Category.findById(id);

    return document;
  }

  async findByCategorie(id: Category) {
    const documents = await Product.find().where('category').equals(id);

    return documents;
  }

  async create({ name, icon }: Category) {
    const document = await Category.create({
      icon,
      name
    });

    return document;
  }

  async update({name, icon}: Category, id: Category) {
    const document = await Category.findByIdAndUpdate(id, {
      name,
      icon
    });

    return document;
  }

  async delete(id: Category) {
    const document = await Category.findByIdAndDelete(id);

    return document;
  }
}

export default new CategorieRepository();
