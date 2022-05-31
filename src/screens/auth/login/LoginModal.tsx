import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Button, ModalProps, Stack, TextField, Typography } from '@mui/material';
import Modal from '../../../components/UI/Modal';
import TextButton from '../../../components/UI/TextButton';
import { useRootStore } from '../../../hooks/useRootStore';

interface ILoginModalProps extends Omit<ModalProps, 'children'> {
}

const LoginModal: React.FC<ILoginModalProps> = observer(props => {
  const { appStore, authStore } = useRootStore();

  // Handlers
  const handleOpenRegisterModal = () => {
    appStore.setModalOpen('login', false);
    appStore.setModalOpen('register', true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    authStore.setLoginValues({
      ...authStore.loginValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    authStore.login();
  };

  // Renders
  return (
    <Modal disableEscapeKeyDown {...props}>
      <Stack component="form" onSubmit={handleSubmit} direction="column" spacing={2}>
        <Typography variant="h6">Вход в аккаунт</Typography>

        <TextField
          name="username"
          placeholder="Имя аккаунта"
          value={authStore.loginValues.username}
          onChange={handleChange}
        />
        <TextField
          type="password"
          name="password"
          placeholder="Пароль"
          value={authStore.loginValues.password}
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={authStore.disabledLoginButton}
        >
          Войти
        </Button>

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