import { Order } from '../models/Order';

interface OrderValuesTypes {
  id?: object
  table?: string
  status?: string
  products: [object],
}

class OrderRepository {
  async findAll() {
    const documents = await Order.find()
      .sort({createdAt: 1})
      .populate('products.product');

    return documents;
  }

  async findById(id: OrderValuesTypes) {
    const document = await Order.findById(id)
      .populate('products.product');

    return document;
  }

  async create({table, products}: OrderValuesTypes) {
    const document = await Order.create({
      table,
      products
    });

    return document;
  }

  async update(id: OrderValuesTypes, status: OrderValuesTypes) {
    const document = await Order.findByIdAndUpdate(id, { status });

    return document;
  }

  async delete(id: OrderValuesTypes) {
    const document = Order.findByIdAndDelete(id);

    return document;
  }
}

export default new OrderRepository();
