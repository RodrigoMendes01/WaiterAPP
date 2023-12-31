import { Container } from './styles';
import { Text } from '../Text';
import { ActivityIndicator } from 'react-native';

interface ButtonProps {
  label: string
  onPress: () => void
  disabled?: boolean
  loading?: boolean
}

function Button ({ label, onPress, disabled, loading }: ButtonProps) {
  return (
    <Container
      onPress={onPress}
      disabled={disabled || loading}
    >
      {!loading && (
        <Text
          weight="600"
          color="#fff"
        >
          {label}
        </Text>
      )}

      {loading && (
        <ActivityIndicator
          color="#fff"
        />
      )}
    </Container>
  );
}

export default Button;
