import { Global, ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { ReactElement, StrictMode } from 'react';

import { MainTheme } from '../design-system';
import GlobalStyles from '../design-system/global-styles';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <StrictMode>
    <ThemeProvider theme={MainTheme}>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  </StrictMode>
);

export default App;
