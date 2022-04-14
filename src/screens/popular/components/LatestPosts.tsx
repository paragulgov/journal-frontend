import { Button, List, Paper } from '@mui/material';
import { latestPosts } from '../../../data/mockLatestPosts';
import LatestPostItem from './LatestPostsItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const LatestPosts = () => {
  return (
    <Paper>
      <List>
        {latestPosts.map(({ id, text, commentsCount }) => {
          return (
            <LatestPostItem key={id} id={id} text={text} commentsCount={commentsCount} />
          );
        })}
      </List>
      <Button size="large" variant="text" endIcon={<KeyboardArrowDownIcon />} sx={{ ml: 1, mb: 1, pr: 1, pl: 1 }}>
        Показать ещё
      </Button>
    </Paper>
  );
};

export default LatestPosts;
