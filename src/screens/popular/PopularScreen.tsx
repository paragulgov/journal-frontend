import React, { useEffect } from 'react';
import { Container, Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';
// import LatestPosts from './components/LatestPosts';
import PostCard from '../../components/post-card/PostCard';
import { useRootStore } from '../../hooks/useRootStore';

const PopularScreen: React.FC = observer(() => {
  const { popularStore } = useRootStore();

  // Effects
  useEffect(() => {
    popularStore.getPopular();
  }, []);

  // Renders
  return (
    <Container maxWidth="md" sx={{ pb: 1 }}>
      <Stack spacing={3}>
        {/*<LatestPosts />*/}

        {popularStore.popularArticles.map(({ id, title, subtitle, user, views, createdAt, comments }) => {
          return (
            <PostCard
              key={id}
              id={id}
              title={title}
              subtitle={subtitle}
              img={'https://via.placeholder.com/1280x720'}
              date={createdAt}
              commentsCount={comments.length}
              user={user}
              views={views}
            />
          );
        })}
      </Stack>
    </Container>
  );
});

export default PopularScreen;