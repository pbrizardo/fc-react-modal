import React, { HTMLAttributes } from 'react';
import styles from './modal.module.scss';

const ModalBody = ({children}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <main className={styles.body}>
      {children}
    </main>
  );
};

export default ModalBody;
