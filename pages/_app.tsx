import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import SEO from '../src/components/SEO';
import { theme } from '../src/styles/muiTheme';
import { useRootStore } from '../src/hooks/useRootStore';
import Loader from '../src/components/UI/Loader';

const MyApp = observer(({ Component, pageProps }: AppProps) => {
  const { authStore } = useRootStore();

  // Effects
  useEffect(() => {
    authStore.checkAuth();
  }, []);

  // Renders
  const renderApp = () => {
    if (!authStore.completeCheckAuth) {
      return <Loader fullHeight />;
    }

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

        <ReactNotifications />
      </>
    );
  };

  return (
    <>
      {renderApp()}
    </>
  );
});

export default MyApp;
