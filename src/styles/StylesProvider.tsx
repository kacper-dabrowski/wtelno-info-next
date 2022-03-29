import { ThemeProvider, Global, css } from '@emotion/react';
import { FC } from 'react';
import { theme } from '../theme/theme';
import { defaultStyles } from './defaultStyles';
import { resetCss } from './resetCss';

const globalStyles = css`
  ${resetCss}
  ${defaultStyles}
`;

export const StylesProvider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    {children}
  </ThemeProvider>
);
