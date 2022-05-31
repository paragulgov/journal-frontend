import React from 'react';
import { Card, CardContent, IconButton, Stack, Typography, Box } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import UserAvatarName from '../../../components/UserAvatarName';
import TextButton from '../../../components/UI/TextButton';
import { HoverTypography } from '../../../styles/commonStyles';
import CommentCardMenu from './CommentCardMenu';
import { IUserModel } from '../../../modules/user/types/UserTypes';
import FormattedDate from '../../../components/FormattedDate';

interface ICommentCardProps {
  user: IUserModel;
  text: string;
  createdAt: string;
}

const CommentCard: React.FC<ICommentCardProps> = props => {
  const { user, text, createdAt } = props;

  return (
    <Card sx={{ boxShadow: 'none' }}>
      <Box display="flex" alignItems="center">
        <UserAvatarName name={user?.username} />

        <HoverTypography sx={{ color: 'text.secondary', cursor: 'default', ml: 3 }}>
          <FormattedDate date={createdAt} />
        </HoverTypography>

        <Box flexGrow={1} />

        <CommentCardMenu />
      </Box>
      <CardContent sx={{ paddingLeft: 0 }}>
        {text}
      </CardContent>
      <Stack direction="row" spacing={2}>
        <TextButton>
          <Typography>Ответить</Typography>
        </TextButton>

        <IconButton>
          <ThumbUpOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <ThumbDownAltOutlinedIcon fontSize="small" />
        </IconButton>

        <IconButton>
          <ThumbUpIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <ThumbDownAltIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Card>
  );
};

export default CommentCard;