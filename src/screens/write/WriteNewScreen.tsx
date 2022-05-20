import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Autocomplete, Box, Button, Container, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { OutputBlockData } from '@editorjs/editorjs';
import { useRootStore } from '../../base/hooks/useRootStore';

// @ts-ignore
const Editor = dynamic(() => import('./components/Editor').then((e) => e.default), { ssr: false });

const WriteNewScreen: React.FC = observer(() => {
  const { writeStore, categoriesStore } = useRootStore();

  // Effects
  useEffect(() => {
    categoriesStore.getAll();
  }, []);

  // Handlers
  const handleChangeEditor = (value: OutputBlockData[]) => {
    writeStore.setNewArticleValue(value);
  };

  const handleChangeCategory = (event: any, value: any) => {
    writeStore.setCategoryId(value?.id);
  };

  const handleSubmit = () => {
    writeStore.createNewArticle();
  };

  // Renders
  return (
    <Container maxWidth="md">
      {/*<TextField sx={{ mb: 2 }} placeholder="Заголовок" fullWidth />*/}
      <Box sx={{ background: '#fff', color: '#000', paddingY: 5, borderRadius: 2, mb: 2 }}>
        <Editor handleChange={handleChangeEditor} />
      </Box>
      <Box display="flex">
        <Box sx={{ mr: 3 }}>
          <Button onClick={handleSubmit} variant="contained">Опубликовать</Button>
        </Box>
        <Box>
          <Autocomplete
            size="small"
            options={categoriesStore.categories}
            getOptionLabel={option => option.name}
            onChange={handleChangeCategory}
            sx={{ width: 300 }}

            renderInput={(params) => {
              return (
                <TextField {...params} label="Категории" />
              );
            }}
          />
        </Box>
      </Box>
    </Container>
  );
});

export default WriteNewScreen;