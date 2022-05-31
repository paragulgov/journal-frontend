import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LoginModal from '../../screens/auth/login/LoginModal';
import { useRootStore } from '../../hooks/useRootStore';
import RegisterModal from '../../screens/auth/register/RegisterModal';

const HeaderGuest: React.FC = observer(() => {
  const { appStore } = useRootStore();

  // Handles
  const handleToggleLoginModal = () => {
    appStore.setModalOpen('login', !appStore.modalOpen.login);
  };

  const handleToggleRegisterModal = () => {
    appStore.setModalOpen('register', !appStore.modalOpen.register);
  };

  // Renders
  return (
    <>
      <Box display="flex" alignItems="center">
        <Button
          onClick={handleToggleLoginModal}
          variant="text"
          size="large"
          startIcon={<PersonIcon />}
          sx={{ color: '#000' }}
        >
          Войти
        </Button>
      </Box>

      <LoginModal open={appStore.modalOpen.login} onClose={handleToggleLoginModal} />
      <RegisterModal open={appStore.modalOpen.register} onClose={handleToggleRegisterModal} />
    </>
  );
});

export default HeaderGuest;