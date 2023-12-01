import Board from '../Board';
import { Container } from './styles';

function Order() {
  return (
    <Container>
      <Board
        icon="🔴"
        title="Fila de espera"
      />
      <Board
        icon="🟡"
        title="Em preparo"
      />
      <Board
        icon="🟢"
        title="Pronto"
      />
    </Container>
  );
}

export default Order;
