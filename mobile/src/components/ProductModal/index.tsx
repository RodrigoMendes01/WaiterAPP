import { FlatList, Modal } from 'react-native';
import { Text } from '../Text';
import { Product } from '../../types/Product';
import { CloseButton, Header, Image, ModalBody, IngredientsContainer, Ingredient, FootContainer, Footer, Price } from './styles';
import { Close } from '../../assets/Icons/Close';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../Button';

interface ProductModalProps {
  visible: boolean
  onClose: () => void
  product: null | Product
  onAddToCart: (product: Product) => void
}

function ProductModal ({ visible, onClose,  product, onAddToCart }: ProductModalProps) {
  if (!product) {
    return null;
  }

  function handleAddToCart() {
    onAddToCart(product!);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `${process.env.EXPO_PUBLIC_API_URL}/uploads/${product.imagePath}`
        }}
      >
        <CloseButton onPress={onClose}>
          <Close/>
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight="600">{product.name}</Text>
          <Text color="#666" style={{ marginTop: 8 }}>{product.description}</Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color="#666">Ingredientes</Text>
            <FlatList
              data={product.ingredients}
              style={{ marginTop: 16 }}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>{ingredient.name}</Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FootContainer>
          <Price>
            <Text color="#666">Preço</Text>
            <Text weight="600" size={20}>{formatCurrency(product.price)}</Text>
          </Price>

          <Button
            onPress={() => handleAddToCart()}
            label='Adicionar ao pedido'
          />

        </FootContainer>
      </Footer>
    </Modal>
  );
}

export default ProductModal;
