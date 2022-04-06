import { Card } from '@mui/material';
import React from 'react';
import PostCardHeader from './PostCardHeader';
import PostCardContent from './PostCardContent';
import PostCardActions from './PostCardActions';

const PostCard = () => {
  return (
    <Card sx={{ px: 2.5, py: 2 }}>
        <PostCardHeader />

        <PostCardContent />

        <PostCardActions />
    </Card>
  );
};

export default PostCard;