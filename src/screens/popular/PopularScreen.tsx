import { Container, Stack } from '@mui/material';
import React from 'react';
import LatestPosts from './components/LatestPosts';
import PostCard from '../../components/post-card/PostCard';
import { posts } from '../../data/mockPosts';

const PopularScreen: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Stack spacing={3}>
        <LatestPosts />

        {posts.map(({ id, title, subtitle, img, date, likesCount, user }) => {
          return (
            <PostCard
              key={id}
              id={id}
              title={title}
              subtitle={subtitle}
              img={img}
              date={date}
              likesCount={likesCount}
              user={user}
            />
          );
        })}
      </Stack>
    </Container>
  );
};

export default PopularScreen;