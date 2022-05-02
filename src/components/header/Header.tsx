import React from 'react';
import { Box, Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import HeaderLeft from './HeaderLeft';
import HeaderAuth from './HeaderAuth';
import HeaderGuest from './HeaderGuest';
import { useRootStore } from '../../base/hooks/useRootStore';

const Header: React.FC = observer(() => {
  const { authStore } = useRootStore();
  const { isAuth } = authStore;

  return (
    <Box component="header" sx={{
      height: 60,
      backgroundColor: 'primary.dark',
    }}>
      <Container maxWidth={false} sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <HeaderLeft />

        {isAuth ? <HeaderAuth /> : <HeaderGuest />}
      </Container>
    </Box>
  );
});

export default Header;