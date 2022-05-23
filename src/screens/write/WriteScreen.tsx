import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Autocomplete, Box, Button, Container, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { OutputBlockData } from '@editorjs/editorjs';
import { useRouter } from 'next/router';
import { useRootStore } from '../../base/hooks/useRootStore';
import Loader from '../../components/UI/Loader';

// @ts-ignore
const Editor = dynamic(() => import('./components/Editor').then((e) => e.default), { ssr: false });

const WriteScreen: React.FC = observer(() => {
  const { writeStore, categoriesStore } = useRootStore();

  const router = useRouter();
  const { id } = router.query;

  // Effects
  useEffect(() => {
    categoriesStore.getAll();
  }, []);

  useEffect(() => {
    if (id) {
      writeStore.getArticle(Number(id));
    }

    return () => {
      writeStore.resetStore();
    };
  }, [id]);

  // Handlers
  const handleChangeEditor = (value: OutputBlockData[]) => {
    writeStore.setArticleValue(value);
  };

  const handleChangeCategoryId = (event: any, value: any) => {
    writeStore.setCategoryId(value?.id);
  };

  const handleChangeCategoryName = (event: any, value: string) => {
    writeStore.setCategoryName(value);
  };

  const handleSubmitCreate = () => {
    writeStore.createArticle();
  };

  const handleSubmitUpdate = () => {
    if (id) {
      writeStore.updateArticle(Number(id));
    }
  };

  // Renders
  if (writeStore.loading) {
    return <Loader />;
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ background: '#fff', color: '#000', paddingY: 5, borderRadius: 2, mb: 2 }}>
        <Editor handleChange={handleChangeEditor} initialValue={writeStore.articleValue} />
      </Box>
      <Box display="flex">
        <Box sx={{ mr: 3 }}>
          {
            id ? (
              <Button onClick={handleSubmitUpdate} variant="contained">Обновить</Button>
            ) : (
              <Button onClick={handleSubmitCreate} variant="contained">Опубликовать</Button>
            )
          }
        </Box>
        <Box>
          <Autocomplete
            size="small"
            options={categoriesStore.categories}
            getOptionLabel={option => option.name}
            value={{ id: writeStore.categoryId, name: writeStore.categoryName }}
            onChange={handleChangeCategoryId}
            inputValue={writeStore.categoryName}
            onInputChange={handleChangeCategoryName}
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

export default WriteScreen;