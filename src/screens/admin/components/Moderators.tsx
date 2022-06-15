import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material';
import { instance } from '../../../axios/instance';
import Notification from '../../../utils/NotificationUtil';
import { IUserModel } from '../../../modules/user/types/UserTypes';

const Moderators = () => {
  const [users, setUsers] = useState<IUserModel[]>([]);
  const [value, setValue] = useState<string>('');

  // Effects
  useEffect(() => {
    instance.get<IUserModel[]>('users')
      .then(res => {
        setUsers(res.data);
      });
  }, []);

  // Handlers
  const handleCreateModer = (id: number) => {
    instance.post('users/moder/' + id, { name: value }).then((res) => {
      Notification.showSuccess('Права модератора выданы');
      setUsers(users => users.map(el => {
        if (el.id === id) {
          return {
            ...el,
            role: 'moderator',
          };
        } else {
          return el;
        }
      }));
    });
  };

  const handleDeleteModer = (id: number) => {
    if (id) {
      instance.delete('users/moder/' + id).then((res) => {
        Notification.showSuccess('Пользователь больше не модератором');
        setUsers(users => users.map(el => {
          if (el.id === id) {
            return {
              ...el,
              role: 'user',
            };
          } else {
            return el;
          }
        }));
      });
    }
  };

  const filteredUsers = users.filter(el => el.username?.toLowerCase().includes(value.toLowerCase()));

  // Renders
  return (
    <Box>
      <TextField
        variant="standard"
        placeholder="Введите имя"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />

      <Stack spacing={3} mt={3}>
        {filteredUsers.map(el => {
          return (
            <Card key={el.id} sx={{ p: 1 }}>
              <Typography sx={{ ml: 1 }} variant="h5">{el.username}</Typography>
              <Typography sx={{ ml: 1 }} variant="overline">{el.role}</Typography>
              <Box mt={1}>
                {el.role === 'moderator' && (
                  <Button color="secondary" onClick={() => handleDeleteModer(el.id)}>Убрать из списка
                    модераторов</Button>
                )}
                {el.role === 'user' && (
                  <Button color="secondary" onClick={() => handleCreateModer(el.id)}>Назначить модератором</Button>
                )}
              </Box>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Moderators;
