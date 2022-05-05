import { ThemeProvider } from 'styled-components';
import merge from 'lodash/merge';
import defaultTheme from '../themes/default';
import { ThemeConfigProviderProps } from '../typings';

const ThemeConfigProvider = ({
  children,
  themeOverrides,
}: ThemeConfigProviderProps) => {
  const theme = merge(defaultTheme, themeOverrides);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeConfigProvider;
