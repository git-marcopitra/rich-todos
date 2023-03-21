import { css } from '@emotion/react';

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Andika', sans-serif;
  }

  *::-webkit-scrollbar {
    width: 0.8em;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    scrollbar-width: thin;
    background: #645fc622;
  }

  *::-webkit-scrollbar-thumb:hover {
    border-radius: 1rem;
    background: #645fc6aa;
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
