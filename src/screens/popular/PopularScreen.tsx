import { Container, Stack } from '@mui/material';
import React from 'react';
import LatestPosts from './components/LatestPosts';
import PostCard from '../../components/PostCard/PostCard';

const PopularScreen: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Stack spacing={3}>
        <LatestPosts />

        <PostCard />
        <PostCard />
        <PostCard />
      </Stack>
    </Container>
  );
};

export default PopularScreen;