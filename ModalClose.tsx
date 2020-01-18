import React from 'react';
import styles from './modal.module.scss';

interface ModalCloseProps {
  close: () => void;
}

const ModalClose = ({close}: ModalCloseProps) => {
  return (
    <div className={styles.closeButton}>
      <button onClick={() => close()} />
    </div>
  );
};

export default ModalClose;
