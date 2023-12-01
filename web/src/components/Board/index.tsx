import { useState } from 'react';
import { Order } from '../../types/Order';
import { Container, OrderContainer } from './styles';

import OrderModal from '../OrderModal';

interface BoardProps {
  icon: string;
  title: string
  orders: Order[]
}

function Board({ icon, title, orders }: BoardProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenModal (order: Order) {
    setModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal () {
    setModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />
      <Container>
        <header>
          <span>{icon}</span>
          <span><strong>{title}</strong></span>
          <span>(1)</span>
        </header>
        {orders.length > 0 && (
          <OrderContainer>
            {
              orders.map((order) => {
                <button
                  type='button'
                  onClick={() => handleOpenModal(order)}
                  key={order._id}
                >
                  <strong>Mesa {order.table}</strong>
                  <span>{order.products.length} itens</span>
                </button>;
              })
            }
          </OrderContainer>
        )}
      </Container>
    </>
  );
}

export default Board;
