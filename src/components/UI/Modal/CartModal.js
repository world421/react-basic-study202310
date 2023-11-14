import React, { Children } from 'react';
import styles from './CartModal.module.scss';
import Portal from '../Portal/Portal';

const Backdrop = ({ onclose }) => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
export const CartModal = ({ children, onclose }) => {
  return (
    <>
      <Portal destId='backdrop-root'>
        <Backdrop onclose={onclose} />;
      </Portal>
      <Portal destId='overlay-root'>
        <ModalOverlay>{children}</ModalOverlay>
      </Portal>
    </>
  );
};

export default CartModal;
