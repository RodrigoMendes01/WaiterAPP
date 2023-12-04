import { Container } from './styles';
import { Text } from '../Text';

interface ButtonProps {
  label: string
  onPress: () => void
  disabled?: boolean
}

function Button ({ label, onPress, disabled }: ButtonProps) {
  return (
    <Container
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        weight="600"
        color="#fff"
      >
        {label}
      </Text>
    </Container>
  );
}

export default Button;
