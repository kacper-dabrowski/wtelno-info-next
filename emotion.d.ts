import { theme } from './src/theme/theme';

declare module '@emotion/react' {
  type ThemeType = typeof theme;
  export interface Theme extends ThemeType {}
}
