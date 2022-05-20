import React from 'react';
import { Container } from '@mui/material';
import { observer } from 'mobx-react-lite';

const WriteEditScreen: React.FC = observer(() => {
  return (
    <Container maxWidth="md">
      <div>Редактирование статьи</div>
    </Container>
  );
});

export default WriteEditScreen;