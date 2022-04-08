import { Card } from '@mui/material';
import React from 'react';
import PostCardHeader from './PostCardHeader';
import PostCardContent from './PostCardContent';
import PostCardActions from './PostCardActions';

interface PostCardProps {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  img: string;
  likesCount: number;
  user: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, subtitle, date, img, likesCount, user }) => {
  return (
    <Card sx={{ px: 2.5, py: 2 }}>
      <PostCardHeader user={user} date={date} />

      <PostCardContent image={img} subtitle={subtitle} title={title} />

      <PostCardActions likesCount={likesCount} />
    </Card>
  );
};

export default PostCard;