import { createTheme, css } from '@mui/material';
// import { Global, css, jsx } from '@emotion/core';
import emotionReset from 'emotion-reset';

const theme = createTheme({
  palette: {
    // type: 'light',
    primary: {
      main: '#99C24D',
    },
    secondary: {
      main: '#564D4A',
    },
    background: {
      default: '#F5F5F5',
    },
    error: {
      main: '#c53030',
    },
  },
});

const globalStyle = css`
  ${emotionReset};
`;

export { theme, globalStyle };
