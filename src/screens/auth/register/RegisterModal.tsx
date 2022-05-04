import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Button, ModalProps, Stack, TextField, Typography } from '@mui/material';
import Modal from '../../../components/UI/Modal';
import TextButton from '../../../components/UI/TextButton';
import { useRootStore } from '../../../base/hooks/useRootStore';

interface IRegisterModalProps extends Omit<ModalProps, 'children'> {
}

const RegisterModal: React.FC<IRegisterModalProps> = observer(props => {
  const { appStore, authStore } = useRootStore();

  // Handlers
  const handleOpenRegisterModal = () => {
    appStore.setModalOpen('login', true);
    appStore.setModalOpen('register', false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    authStore.setValues({
      ...authStore.values,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    authStore.register();
  };

  // Renders
  return (
    <Modal disableEscapeKeyDown {...props}>
      <Stack component="form" onSubmit={handleSubmit} direction="column" spacing={2}>
        <Typography variant="h6">Регистрация</Typography>

        <TextField
          name="username"
          placeholder="Имя аккаунта"
          onChange={handleChange}
          value={authStore.values.username}
        />
        <TextField
          name="password"
          placeholder="Пароль"
          onChange={handleChange}
          value={authStore.values.password}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={authStore.disabledButton}
        >
          Зарегистрироваться
        </Button>

        <Box>
          <TextButton onClick={handleOpenRegisterModal}>
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