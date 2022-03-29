import { ThemeProvider, Global, css } from '@emotion/react';
import { FC } from 'react';
import { theme } from '../theme/theme';
import { defaultStyles } from './defaultStyles';
import { resetCss } from './resetCss';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');

  ${resetCss}
  ${defaultStyles}
`;

export const StylesProvider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    {children}
  </ThemeProvider>
);
