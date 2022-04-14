import React from 'react';
import { Box, Button, IconButton, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';

const HeaderLeft: React.FC = () => {
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
      <TextField
        variant="outlined"
        placeholder="Поиск"
        size="small"
        autoComplete="off"
        InputProps={{
          startAdornment: <SearchIcon sx={{ mr: 1 }}>kg</SearchIcon>,
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& input::placeholder': {
              color: '#fff',
              opacity: 0.8,
            },
            '& fieldset': {
              borderRadius: '8px',
              border: 'none',
              background: 'rgb(0 0 0 / 15%)',
            },
          },
          mr: 2
        }}
      />
      <Button variant="contained" color="primary" sx={{ '&:hover': { background: '#90caf9' } }}>Новая запись</Button>
    </Box>
  );
};

export default HeaderLeft;