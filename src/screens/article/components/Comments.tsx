import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import CommentsItem from './CommentsItem';
import { useRootStore } from '../../../base/hooks/useRootStore';

const Comments = observer(() => {
  const { articleStore } = useRootStore();

  const [clicked, setClicked] = useState<boolean>(false);

  // Handlers
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    articleStore.setCommentValues({
      ...articleStore.commentValues,
      [name]: value,
    });
  };

  const handleSubmitComment = () => {
      articleStore.createComment();
  };

  // Renders
  return (
    <Box sx={{ paddingTop: 5 }}>
      <Box mb={3}>
        <Typography variant="h6" mb={2}>Комментарии</Typography>

        <TextField
          name="text"
          onChange={handleChange}
          value={articleStore.commentValues.text}
          onFocus={() => setClicked(true)}
          minRows={clicked ? 5 : 1}
          placeholder="Написать комментарий..."
          multiline
          fullWidth
        />

        <Button onClick={handleSubmitComment} variant="contained" sx={{ my: 2 }}>
          Отправить
        </Button>
      </Box>

      <Stack spacing={6}>
        {articleStore.comments.map(comment => {
          return (
            <CommentsItem key={comment.id} comment={comment} />
          );
        })}
      </Stack>
    </Box>
  );
});

export default Comments;