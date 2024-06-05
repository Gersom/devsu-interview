// MyModal.js
import React from 'react';
import { Modal, StyleSheet } from 'react-native';

const MyModal = ({ visible, onClose, children }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      {children}
    </Modal>
  );
};

const styles = StyleSheet.create({
});

export default MyModal;
