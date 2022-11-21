import type { AppProps } from 'next/app';
import { ReactElement } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@emotion/react';
import { theme, globalStyle } from '../global/theme';
import { GlobalStyles, StyledEngineProvider } from '@mui/material';

import { Provider } from 'react-redux';
import store from '../store';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
          <GlobalStyles styles={globalStyle} />
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
