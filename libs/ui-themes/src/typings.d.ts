export interface ThemeType {
  palette: {
    white: string;
    'gray-100': string;
    'gray-200': string;
    'gray-300': string;
    'gray-400': string;
    'gray-500': string;
    'gray-600': string;
    'gray-700': string;
    'gray-800': string;
    'gray-900': string;
    black: string;
    blue: string;
    indigo: string;
    purple: string;
    pink: string;
    red: string;
    orange: string;
    yellow: string;
    green: string;
    teal: string;
    cyan: string;
    [key: string]: string;
  };
  colors: {
    primary: string;
    secondary: string;
    success: string;
    info: string;
    warning: string;
    danger: string;
    light: string;
    dark: string;
    [key: string]: string;
  };
  body: {
    color: string;
  };
  btn: {
    fontWeight: number;
    lineHeight: string;
    fontFamily: string;
    borderWidth: string;
    paddingX: string;
    paddingY: string;
    fontSize: string;
    borderRadius: string;
    boxShadow: string;
    transition: string;
    disabledOpacity: number;
    paddingXLg: string;
    paddingYLg: string;
    fontSizeLg: string;
    borderRadiusLg: string;
    paddingXSm: string;
    paddingYSm: string;
    fontSizeSm: string;
    borderRadiusSm: string;
    linkColor: string;
    linkDecoration: string;
    linkHoverColor: string;
    linkHoverDecoration: string;
    disabledColor: string;
    disabledBackground: string;
    borderColor: string;
  };
}
