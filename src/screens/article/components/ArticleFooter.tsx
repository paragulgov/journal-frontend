import React from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import UserAvatarName from '../../../components/UserAvatarName';
import ArticleDate from '../../../components/ArticleDate';
import { HoverTypography } from '../../../styles/commonStyles';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../../base/hooks/useRootStore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

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
        <IconButton onClick={handleLike}>
          <ThumbUpIcon />
        </IconButton>
      ) : (
        <IconButton onClick={handleLike}>
          <ThumbUpOutlinedIcon />
        </IconButton>
      )}

      {articleStore.dislikedArticle ? (
        <IconButton onClick={handleDislike}>
          <ThumbDownAltIcon />
        </IconButton>
      ) : (
        <IconButton onClick={handleDislike}>
          <ThumbDownAltOutlinedIcon />
        </IconButton>
      )}

    </Stack>
  );
});

export default ArticleFooter;
