import { useEffect, useState } from 'react';
import Board from '../Board';
import { Container } from './styles';
import { Order } from '../../types/Order';
import api from '../../utils/api';

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => {
        setOrders(data);
      });
  });

  const waiting = orders.filter((order) => (
    order.status === 'WAITING'
  ));

  const inProduction = orders.filter((order) => (
    order.status === 'IN_PRODUCTION'
  ));

  const done = orders.filter((order) => (
    order.status === 'DONE'
  ));

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId
        ? {...order, status}
        : order
    )));
  }

  return (
    <Container>
      <Board
        icon="🔴"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleCancelOrder}
      />
      <Board
        icon="🟡"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleCancelOrder}
      />
      <Board
        icon="🟢"
        title="Finalizado"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleCancelOrder}
      />
    </Container>
  );
}

export default Orders;
