import React from 'react';
import ReactDOM from 'react-dom';

import styles from './modal.module.scss';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Modal = (props: ModalProps) => {

  const {
    open,
    onClose = () => {},
    children,
  } = props;

  const [ isOpen, setIsOpen ] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
      setTimeout(() => {
        setIsOpen(true);
      });
    } else {
      document.body.style.overflowY = '';
    }

    return () => {
      document.body.style.overflowY = '';
      setIsOpen(false);
    }
  }, [open, setIsOpen]);

  const ModalContent = (
    <section className={styles.modal} style={{opacity: isOpen ? 1 : 0}}>
      <div className={styles.dialog}>
        <div className={styles.backdrop} onClick={() => onClose()} />
        <div className={styles.content}>
          { children }
        </div>
      </div>
    </section>
  );

  return open ? ReactDOM.createPortal(ModalContent, document.body) : null;
};

export default Modal;
