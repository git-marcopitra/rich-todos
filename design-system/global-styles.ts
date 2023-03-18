import { css } from '@emotion/react';

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Andika', sans-serif;
  }

  body {
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  button,
  input {
    border: none;
    outline: none;
  }
`;

export default GlobalStyles;
