import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './styles/theme';
import mixin from './styles/mixin';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ ...theme, ...mixin }}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
