import {
  Container,
  CategoriesContainer,
  MenuContainer,
  FootContainer,
  Footer
} from './styles';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import Button from '../components/Button';
import TableModal from '../components/TableModal';
import { useState } from 'react';

export function Main () {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleCancelOrder() {
    setSelectedTable('');
  }

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <CategoriesContainer>
          <Categories/>
        </CategoriesContainer>

        <MenuContainer>
          <Menu/>
        </MenuContainer>

      </Container>
      <Footer>

        <FootContainer>
          {!selectedTable && (
            <Button
              label='Novo pedido'
              disabled={false}
              onPress={() => setIsTableModalVisible(true)}
            />
          )}
        </FootContainer>

      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
