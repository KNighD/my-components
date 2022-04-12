import { ThemeType } from '../typings.d';

const base = {
  lineHeight: '24px',
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
};

const palette = {
  white: '#fff',
  'gray-100': '#f8f9fa',
  'gray-200': '#e9ecef',
  'gray-300': '#dee2e6',
  'gray-400': '#ced4da',
  'gray-500': '#adb5bd',
  'gray-600': '#6c757d',
  'gray-700': '#495057',
  'gray-800': '#343a40',
  'gray-900': '#212529',
  black: '#000',
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#fadb14',
  green: '#52c41a',
  teal: '#20c997',
  cyan: '#17a2b8',
};

const status = {
  primary: palette['blue'],
  secondary: palette['gray-600'],
  success: palette['green'],
  info: palette['cyan'],
  warning: palette['yellow'],
  danger: palette['red'],
  light: palette['gray-100'],
  dark: palette['gray-800'],
};

const defaultTheme: ThemeType = {
  palette,
  status,
  btn: {
    fontWeight: 400,
    lineHeight: base.lineHeight,
    fontFamily: base.fontFamily,
  },
};

export default defaultTheme;
