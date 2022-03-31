import { Box, Button, List, Paper } from '@mui/material';
import { latestPosts } from '../../../data/mockLatestPosts';
import LatestPostItem from './LatestPostsItem';

const LatestPosts = () => {
  return (
    <Box>
      <Paper>
        <List>
          {latestPosts.map(({ id, text, commentsCount }) => {
            return (
              <LatestPostItem key={id} id={id} text={text} commentsCount={commentsCount} />
            );
          })}
        </List>
        <Button sx={{ml: 1, mb: 1}} variant="text">Показать еще</Button>
      </Paper>
    </Box>
  );
};

export default LatestPosts;
