import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material';
import { instance } from '../../../axios/instance';
import { IArticleModel, Nullable } from '../../../types/types';
import Link from 'next/link';
import Notification from '../../../utils/NotificationUtil';
import Modal from '../../../components/UI/Modal';

interface IRejectModal {
  open: boolean;
  id: Nullable<number>;
}

const ArticlesAccept = () => {
  const [articles, setArticles] = useState<IArticleModel[]>([]);
  const [rejectModalOpen, setRejectModalOpen] = useState<IRejectModal>({ open: false, id: null });
  const [reason, setReason] = useState<string>('');

  // Effects
  useEffect(() => {
    instance.get<IArticleModel[]>('articles/pending')
      .then(res => {
        setArticles(res.data);
      });
  }, []);

  // Handlers
  const handleAccept = (id: number) => {
    instance.post('articles/pending/accept/' + id).then((res) => {
      Notification.showSuccess(res.data.message);
    });
  };

  const handleReject = (id: Nullable<number>) => {
    if (id) {
      instance.post('articles/pending/reject/' + id, { reason: reason }).then((res) => {
        Notification.showSuccess(res.data.message);
      });
    }
  };

  // Renders
  return (
    <>
      <Stack spacing={3}>
        {articles.map(({ id, title, subtitle, user, views, createdAt, comments }) => {
          return (
            <Card key={id} sx={{ p: 2 }}>
              <Link href={`/article/${id}`}>
                <a>
                  <Typography variant="h5">{title}</Typography>
                  <Typography>{subtitle}</Typography>
                  <Typography variant="caption">Автор: {user.username}</Typography>
                </a>
              </Link>
              <Box mt={2}>
                <Button onClick={() => handleAccept(id)}>Принять</Button>
                <Button onClick={() => setRejectModalOpen({ open: true, id: id })}>Отклонить</Button>
              </Box>
            </Card>
          );
        })}
      </Stack>
      <Modal open={rejectModalOpen.open} onClose={() => setRejectModalOpen({ open: false, id: null })}>
        <Typography variant="h6" gutterBottom>Причина отказа</Typography>
        <TextField
          value={reason}
          onChange={e => setReason(e.currentTarget.value)}
          placeholder="Мат, оскорбления, котики"
          sx={{ mb: 2 }}
          fullWidth
        />
        <Button onClick={() => handleReject(rejectModalOpen.id)} variant="outlined">Отклонить</Button>
      </Modal>
    </>
  );
};

export default ArticlesAccept;
