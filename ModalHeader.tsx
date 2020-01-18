import React from 'react';
import styles from './modal.module.scss'; 
import ModalClose from './ModalClose';

interface ModalHeaderProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalHeader = ({children, onClose}: ModalHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <span className={styles.headerText}>
          {children}
        </span>
        <ModalClose close={() => onClose()} />
      </div>
    </header>
  );
};

export default ModalHeader;
