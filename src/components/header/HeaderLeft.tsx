import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../hooks/useRootStore';
import HeaderSearch from './HeaderSearch';

const HeaderLeft: React.FC = observer(() => {
  const { authStore } = useRootStore();

  return (
    <Box display="flex" alignItems="center">
      <IconButton sx={{ color: 'black', mr: 2, display: { sm: 'none' } }}>
        <MenuIcon />
      </IconButton>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', marginRight: '24px' }}>
          <Image src="/assets/main/logo.svg" width={32} height={50} alt="Logo" />
        </a>
      </Link>
      <HeaderSearch />

      {authStore.isAuth && (
        <Link href="/write">
          <a>
            <Button variant="contained" color="primary" sx={{ '&:hover': { background: '#90caf9' } }}>
              Новая запись
            </Button>
          </a>
        </Link>
      )}
    </Box>
  );
});

export default HeaderLeft;