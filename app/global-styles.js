import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    @font-face {
  font-family: 'ms_sans';
  src: url('./fonts/MSSansSerif.ttf') format('ttf'),
    url('./fonts/ms_sans_serif-webfont.woff2') format('woff2'),
    url('./fonts/ms_sans_serif-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
};
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'ms_sans', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
