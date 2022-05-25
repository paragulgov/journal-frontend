import React from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import UserAvatarName from '../../../components/UserAvatarName';
import ArticleDate from '../../../components/ArticleDate';
import { HoverTypography } from '../../../styles/commonStyles';

interface IArticleFooterProps {
  id: number;
  name: string;
  date: string;
  category: string;
}

const ArticleFooter: React.FC<IArticleFooterProps> = ({ id, name, date, category }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={3} p={3}>
      <UserAvatarName name={name} />
      <ArticleDate id={id} date={date} />
      <Box>
        <HoverTypography sx={{ color: 'text.secondary', cursor: 'default' }}>
          {category}
        </HoverTypography>
      </Box>
      <IconButton>
        <ThumbUpOutlinedIcon />
      </IconButton>
      <IconButton>
        <ThumbDownAltOutlinedIcon />
      </IconButton>
    </Stack>
  );
};

export default ArticleFooter;
