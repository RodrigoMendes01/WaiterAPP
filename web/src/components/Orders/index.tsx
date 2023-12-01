import Board from '../Board';
import { Container } from './styles';

function Order() {
  return (
    <Container>
      <Board
        icon="🔴"
        title="Fila de espera"
        orders={[]}
      />
    </Container>
  );
}

export default Order;
