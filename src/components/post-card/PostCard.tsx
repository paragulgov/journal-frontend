import React from 'react';
import { Card } from '@mui/material';
import PostCardHeader from './PostCardHeader';
import PostCardContent from './PostCardContent';
import PostCardActions from './PostCardActions';
import { IUserModel } from '../../modules/user/types/UserTypes';

interface IPostCardProps {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  img: string;
  commentsCount: number;
  user: IUserModel;
}

const PostCard: React.FC<IPostCardProps> = (props) => {
  const { id, title, subtitle, date, img, commentsCount, user } = props;

  return (
    <Card sx={{ px: 2.5, py: 2 }}>
      <PostCardHeader id={id} user={user} date={date} />

      <PostCardContent id={id} image={img} subtitle={subtitle} title={title} />

      <PostCardActions commentsCount={commentsCount} />
    </Card>
  );
};

export default PostCard;