import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Text } from '../Text';
import { Form, Header, ModalBody, Overlay, Input } from './styles';
import { Close } from '../../assets/Icons/Close';
import Button from '../Button';
import { useState } from 'react';

interface TableModalProps {
  visible: boolean
  onClose: () => void
  onSave: (table: string) => void
}

function TableModal ({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function handleSave() {
    onSave(table);
    onClose();
    setTable('');
  }

  return (
    <Modal
      transparent
      visible={visible}
      animationType='fade'
    >
      <Overlay behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa:</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color='#666'/>
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              onChangeText={setTable}
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
            />
            <Button
              label='Salvar'
              onPress={handleSave}
              disabled={table.length === 0}
            />
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}

export default TableModal;
