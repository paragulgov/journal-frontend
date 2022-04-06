import { styled } from '@mui/material/styles';
import { Typography, TypographyProps } from '@mui/material';

export const HoverTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  '&:hover': {
    color: theme.palette.secondary.main,
  },
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
  }),
}));