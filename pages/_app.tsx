import type { AppProps } from 'next/app';
import SEO from '../src/components/SEO';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../src/styles/muiTheme';
import { CssBaseline } from '@mui/material';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SEO title="" />

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
