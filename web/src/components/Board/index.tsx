import { Order } from '../../types/Order';
import { Container, OrderContainer } from './styles';

interface BoardProps {
  icon: string;
  title: string
  orders: Order[]
}

function Board({ icon, title }: BoardProps) {
  return (
    <Container>
      <header>
        <span>{icon}</span>
        <span><strong>{title}</strong></span>
        <span>(1)</span>
      </header>
      <OrderContainer>
        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrderContainer>
    </Container>
  );
}

export default Board;
