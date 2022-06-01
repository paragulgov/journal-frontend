import React from 'react';
import { Card } from '@mui/material';
import PostCardHeader from './PostCardHeader';
import PostCardContent from './PostCardContent';
import PostCardActions from './PostCardActions';
import { IUserModel } from '../../modules/user/types/UserTypes';
import { ArticleStatus } from '../../types/types';

interface IPostCardProps {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  img: string;
  commentsCount: number;
  user: IUserModel;
  views: number;
  status?: ArticleStatus;
  rejected?: false;
  rejectedReason?: string;
}

const PostCard: React.FC<IPostCardProps> = (props) => {
  const { id, title, subtitle, date, img, commentsCount, user, views, status, rejected, rejectedReason } = props;

  return (
    <Card sx={{ px: 2.5, py: 2 }}>
      <PostCardHeader
        id={id} user={user}
        date={date}
        status={status}
        rejected={rejected}
        rejectedReason={rejectedReason}
      />

      <PostCardContent id={id} image={img} subtitle={subtitle} title={title} />

      <PostCardActions commentsCount={commentsCount} views={views} />
    </Card>
  );
};

export default PostCard;
