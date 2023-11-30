import { Request, Response } from 'express';

import { Order } from '../../app/models/Order';

export async function changeOrderStatus(request: Request, response: Response) {
  try {
    const status = request.body.status.toUpperCase();
    const { orderId } = request.params;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return response.status(400).json({
        error: 'Status should be one of theses: IN_PRODUCTION or DONE'
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    response.sendStatus(204);

  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }

}
