import { Container, Stack } from '@mui/material';
import React from 'react';
import LatestPosts from './components/LatestPosts';

const PopularScreen: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Stack spacing={3}>
        <LatestPosts />
      </Stack>
    </Container>
  );
};

export default PopularScreen;