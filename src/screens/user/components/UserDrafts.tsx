import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { instance } from '../../../axios/instance';
import PostCard from '../../../components/post-card/PostCard';
import { IArticleModel } from '../../../types/types';

const UserDrafts = () => {
  const [articles, setArticles] = useState<IArticleModel[]>([]);

  // Effects
  useEffect(() => {
    instance.get<IArticleModel[]>('articles/user/drafts')
      .then(res => {
        setArticles(res.data);
      });
  }, []);

  // Renders
  return (
    <Stack spacing={3}>
      {articles.map(({ id, title, subtitle, user, views, createdAt, comments, status, rejected, rejectedReason }) => {
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
            status={status}
            rejected={rejected}
            rejectedReason={rejectedReason}
          />
        );
      })}
    </Stack>
  );
};

export default UserDrafts;
