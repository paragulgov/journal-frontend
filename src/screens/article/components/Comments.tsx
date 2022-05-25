import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import CommentsItem from './CommentsItem';

const Comments = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <Box sx={{ paddingTop: 5 }}>
      <Box mb={3}>
        <Typography variant="h6" mb={2}>Комментарии</Typography>

        <TextField
          placeholder="Написать комментарий..."
          minRows={clicked ? 5 : 1}
          onFocus={() => setClicked(true)}
          multiline
          fullWidth
        />
        <Button variant="contained" sx={{ mt: 2 }}>
          Отправить
        </Button>
      </Box>

      <Stack spacing={6}>
        {[...new Array(3)].map((_, index) => {
          return (
            <CommentsItem key={index} />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Comments;