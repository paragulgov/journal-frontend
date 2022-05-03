import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Button, ModalProps, Stack, TextField, Typography } from '@mui/material';
import Modal from '../../../components/UI/Modal';
import TextButton from '../../../components/UI/TextButton';
import { useRootStore } from '../../../base/hooks/useRootStore';

interface IRegisterModalProps extends Omit<ModalProps, 'children'> {
}

const RegisterModal: React.FC<IRegisterModalProps> = observer(props => {
  const { appStore } = useRootStore();

  const handleOpenRegisterModal = () => {
    appStore.setModalOpen('login', true);
    appStore.setModalOpen('register', false);
  };

  return (
    <Modal disableEscapeKeyDown {...props}>
      <Stack direction="column" spacing={2}>
        <Typography variant="h6">Регистрация</Typography>
        <TextField placeholder="Имя аккаунта" />
        <TextField placeholder="Пароль" />
        <TextField placeholder="Повторите пароль" />
        <Button variant="contained" color="primary" disabled={false}>Зарегистрироваться</Button>
        <Box>
          <TextButton onClick={handleOpenRegisterModal} sx={{ p: 0 }}>
            <Typography variant="body2">
              Войти в аккаунт
            </Typography>
          </TextButton>
        </Box>
      </Stack>
    </Modal>
  );
});

export default RegisterModal;