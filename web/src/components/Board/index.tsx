import { useState } from 'react';
import { Order } from '../../types/Order';
import { Container, OrderContainer } from './styles';
import { toast } from 'react-toastify';

import OrderModal from '../OrderModal';
import api from '../../utils/api';

interface BoardProps {
  icon: string;
  title: string
  orders: Order[]
  onCancelOrder: (orderId: string) => void
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void
}

function Board({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: BoardProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal (order: Order) {
    setModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal () {
    setModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleCancelOrder () {
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setModalVisible(false);
  }

  async function handleChangeOrderStatus () {
    setIsLoading(true);

    const status = selectedOrder?.status === 'WAITING'
      ? 'IN_PRODUCTION'
      : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado`);
    onChangeOrderStatus(selectedOrder!._id, selectedOrder!.status);
    setIsLoading(false);
    setModalVisible(false);
  }

  return (
    <>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
        onChangeOrderStatus={handleChangeOrderStatus}
      />
      <Container>
        <header>
          <span>{icon}</span>
          <span><strong>{title}</strong></span>
          <span>({orders.length})</span>
        </header>
        {orders.length > 0 && (
          <OrderContainer>
            {
              orders.map((order) => (
                <button
                  type='button'
                  onClick={() => handleOpenModal(order)}
                  key={order._id}
                >
                  <strong>Mesa {order.table}</strong>
                  <span>{order.products.length} itens</span>
                </button>
              ))
            }
          </OrderContainer>
        )}
      </Container>
    </>
  );
}

export default Board;
