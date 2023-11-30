import { Product } from '../models/Product';

interface ProductsValuesTypes {
  id?: object
  name: string
  description: string,
  imagePath?: string,
  price: number,
  category: object,
  ingredients: string | []
}

class ProductRepository {
  async findAll() {
    const documents = await Product.find();

    return documents;
  }

  async findById(id: ProductsValuesTypes) {
    const document = await Product.findById(id);

    return document;
  }

  async create({
    name,
    description,
    price,
    imagePath,
    category,
    ingredients
  }: ProductsValuesTypes) {
    const document = await Product.create({
      name,
      description,
      price,
      imagePath,
      category,
      ingredients
    });

    return document;
  }

  async update(id: ProductsValuesTypes, {
    name,
    description,
    price,
    imagePath,
    category,
    ingredients
  }: ProductsValuesTypes) {
    const document = await Product.findByIdAndUpdate(id, {
      name,
      description,
      price,
      imagePath,
      category,
      ingredients
    });

    return document;
  }

  async delete(id: ProductsValuesTypes) {
    const document = await Product.findByIdAndDelete(id);

    return document;
  }
}

export default new ProductRepository();
