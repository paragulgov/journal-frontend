import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material';
import { instance } from '../../../axios/instance';
import Notification from '../../../utils/NotificationUtil';
import { ICategoryModel } from '../../../modules/categories/types/CategoriesTypes';

const Categories = () => {
  const [categories, setCategories] = useState<ICategoryModel[]>([]);
  const [value, setValue] = useState<string>('');

  // Effects
  useEffect(() => {
    instance.get<ICategoryModel[]>('categories')
      .then(res => {
        setCategories(res.data);
      });
  }, []);

  // Handlers
  const handleCreate = () => {
    instance.post('categories', { name: value }).then((res) => {
      Notification.showSuccess('Успешно добавлено');
      setCategories((prev) => [...prev, res.data]);
    });
  };

  const handleDelete = (id: number) => {
    if (id) {
      instance.delete('categories/' + id).then((res) => {
        Notification.showSuccess('Успешно удалено');
      });
    }
  };

  // Renders
  return (
    <Box>
      <TextField
        variant="standard"
        placeholder="Введите категорию"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <Button onClick={handleCreate}>Создать</Button>

      <Stack spacing={3} mt={3}>
        {categories.map(el => {
          return (
            <Card key={el.id} sx={{ p: 1 }}>
              <Typography sx={{ ml: 1 }}>{el.name}</Typography>
              <Box mt={1}>
                <Button color="secondary" onClick={() => handleDelete(el.id)}>Удалить</Button>
              </Box>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Categories;
