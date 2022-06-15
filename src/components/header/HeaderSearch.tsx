import React, { FormEvent, useState } from 'react';
import { Box, Card, Popover, Stack, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { instance } from '../../axios/instance';
import { IArticleModel } from '../../types/types';
import Link from 'next/link';

const HeaderSearch: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [anchorEl, setAnchorEl] = React.useState<HTMLInputElement | null>(null);
  const [articles, setArticles] = useState<IArticleModel[]>([]);

  // Handlers
  const handleSearch = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    instance.get('/articles/search', { params: { value } }).then(res => setArticles(res.data));
  };

  // Renders
  return (
    <>
      <Box component="form" onSubmit={handleSearch}>
        <TextField
          variant="outlined"
          placeholder="Поиск"
          size="small"
          autoComplete="off"
          value={value}
          onChange={e => setValue(e.currentTarget.value)}
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1 }} />,
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& input::placeholder': {
                color: '#fff',
                opacity: 0.8,
              },
              '& fieldset': {
                borderRadius: '8px',
                border: 'none',
                background: 'rgb(0 0 0 / 15%)',
              },
            },
            mr: 2,
          }}
        />
      </Box>

      <Popover
        open={articles.length > 0}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{ ml: 10, mt: 5 }}
      >
        <Stack spacing={2} sx={{ backgroundColor: '#ccc', borderRadius: 2, padding: 2, maxWidth: 500 }}>
          {articles.map(el => {
            return (
              <Link key={el.id} href={'/article/' + el.id}>
                <a>
                  <Card sx={{ p: 1 }}>
                    <Typography variant="h6">{el.title.substring(0, 40)}...</Typography>
                    <Typography>{el.subtitle.substring(0, 50)}...</Typography>
                  </Card>
                </a>
              </Link>
            );
          })}

        </Stack>
      </Popover>
    </>
  );
};

export default HeaderSearch;