import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import UserAvatarName from '../../../components/UserAvatarName';
import ArticleDate from '../../../components/ArticleDate';
import { HoverTypography } from '../../../styles/commonStyles';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../../hooks/useRootStore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface IArticleFooterProps {
  id: number;
}

const ArticleFooter: React.FC<IArticleFooterProps> = observer(({ id }) => {
  const { articleStore } = useRootStore();

  // Handlers
  const handleLike = () => {
    articleStore.createLikeDislike({ type: 'like' });
  };

  const handleDislike = () => {
    articleStore.createLikeDislike({ type: 'dislike' });
  };

  // Renders
  return (
    <Stack direction="row" alignItems="center" spacing={3} p={3}>
      <UserAvatarName name={articleStore.article?.user?.username || ''} />
      <ArticleDate id={id} date={articleStore.article?.createdAt || ''} />
      <Box>
        <HoverTypography sx={{ color: 'text.secondary', cursor: 'default' }}>
          {articleStore.article?.category?.name}
        </HoverTypography>
      </Box>

      {articleStore.likedArticle ? (
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleLike}>
            <ThumbUpIcon />
          </IconButton>
          <Typography>{articleStore.article?.likesCount}</Typography>
        </Box>
      ) : (
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleLike}>
            <ThumbUpOutlinedIcon />
          </IconButton>
          <Typography>{articleStore.article?.likesCount}</Typography>
        </Box>
      )}

      {articleStore.dislikedArticle ? (
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleDislike}>
            <ThumbDownAltIcon />
          </IconButton>
          <Typography>{articleStore.article?.dislikesCount}</Typography>
        </Box>
      ) : (
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleDislike}>
            <ThumbDownAltOutlinedIcon />
          </IconButton>
          <Typography>{articleStore.article?.dislikesCount}</Typography>
        </Box>
      )}

      <Box display="flex" alignItems="center">
        <VisibilityIcon sx={{ mr: 1 }} />
        {articleStore.article?.views}
      </Box>
    </Stack>
  );
});

export default ArticleFooter;
