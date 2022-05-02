import React from 'react';
import { ModalProps } from '@mui/material';
import Modal from '../../../components/UI/Modal';

interface ILoginModalProps extends Omit<ModalProps, 'children'> {
}

const LoginModal: React.FC<ILoginModalProps> = props => {

  return (
    <Modal disableEscapeKeyDown {...props} >
      <div>Login modal</div>
    </Modal>
  );
};

export default LoginModal;