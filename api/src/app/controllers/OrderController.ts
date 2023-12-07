import { Request, Response } from 'express';
import OrderRepository from '../repositories/OrderRepository';
import { io } from '../..';

export class OrderController {
  async index(request: Request, response: Response) {
    const orders = await OrderRepository.findAll();

    response.json(orders);
  }

  async show(request: Request, response: Response) {
    const { orderId } = request.params;
    const order = await OrderRepository.findById(Object(orderId));

    if (!order) (
      response.status(404).json({
        error: 'Nenhuma ordem de serviço encontrada!'})
    );

    response.json(order);
  }

  async store(request: Request, response: Response) {
    try {
      const { table, products } = request.body;

      const order  = await OrderRepository.create({
        table,
        products
      });

      const orderDetail = await order.populate('products.product');

      io.emit('orders@new', orderDetail);
      response.status(201).json(order);

    } catch (error) {
      response.sendStatus(500);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const status = request.body.status.toUpperCase();
      const { orderId } = request.params;

      if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
        return response.status(400).json({
          error: 'Status should be one of theses: IN_PRODUCTION or DONE'
        });
      }

      await OrderRepository.update(Object(orderId), status);

      response.sendStatus(204);

    } catch (error) {
      console.log(error);
      response.sendStatus(500);
    }
  }

  async delete(request: Request, response: Response){
    try {
      const { orderId } = request.params;

      await OrderRepository.delete(Object(orderId));

      response.sendStatus(204);

    } catch (error) {
      console.log(error);
    }
  }
}
export default new OrderController();
