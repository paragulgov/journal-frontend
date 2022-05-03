import React from 'react';
import { observer } from "mobx-react-lite"
import { Box, Button, ModalProps, Stack, TextField, Typography } from '@mui/material';
import Modal from '../../../components/UI/Modal';
import TextButton from '../../../components/UI/TextButton';
import { useRootStore } from '../../../base/hooks/useRootStore';

interface ILoginModalProps extends Omit<ModalProps, 'children'> {
}

const LoginModal: React.FC<ILoginModalProps> = observer(props => {
 const { appStore } = useRootStore();

  const handleOpenRegisterModal = () => {
      appStore.setModalOpen('login', false)
      appStore.setModalOpen('register', true)
  }

  return (
    <Modal disableEscapeKeyDown {...props}>
      <Stack direction="column" spacing={2}>
        <Typography variant="h6">Вход в аккаунт</Typography>
        <TextField placeholder="Почта" />
        <TextField placeholder="Пароль" />
        <Button variant="contained" color="primary" disabled={false}>Войти</Button>
        <Box>
          <TextButton onClick={handleOpenRegisterModal}>
            <Typography variant="body2">
              Регистрация
            </Typography>
          </TextButton>
        </Box>
      </Stack>
    </Modal>
  );
});

export default LoginModal;