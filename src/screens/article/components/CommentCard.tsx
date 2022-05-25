import React from 'react';
import { Card, CardContent, IconButton, Stack, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import UserAvatarName from '../../../components/UserAvatarName';
import TextButton from '../../../components/UI/TextButton';
import { HoverTypography } from '../../../styles/commonStyles';

const CommentsItem = () => {
  return (
    <Card sx={{ boxShadow: 'none' }}>
      <Stack direction="row" alignItems="center" spacing={3}>
        <UserAvatarName name="Telegram" />
        <HoverTypography sx={{ color: 'text.secondary', cursor: 'default' }}>
          Сегодня
        </HoverTypography>
      </Stack>
      <CardContent sx={{ paddingLeft: 0 }}>
        Helo Helo Helo Helo Helo Helo Helo Helo Helo Helo Helo Helo Helo Helo
        HeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHeloHelo
        Helo HeloHeloHeloHeloHelo Helo Helo Helo Helo Helo Helo Helo
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

export default CommentsItem;