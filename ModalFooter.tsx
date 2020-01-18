import React, { HTMLAttributes } from 'react';
import styles from './modal.module.scss';

const ModalFooter = ({children}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <footer className={styles.footer}>
      {children}
    </footer>
  );
};

export default ModalFooter;
