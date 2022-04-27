import { darken } from 'polished';
import { ThemeType } from '../typings.d';

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

const colors = {
  primary: palette['blue'],
  secondary: palette['gray-600'],
  success: palette['green'],
  info: palette['cyan'],
  warning: palette['yellow'],
  danger: palette['red'],
  light: palette['gray-100'],
  dark: palette['gray-800'],
};

const base = {
  lineHeight: '24px',
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  borderWidth: '1px',
  fontSize: '16px',
  borderRadius: '4px',
  fontSizeLg: '20px',
  fontSizeSm: '14px',
  borderRadiusLg: '4.8px',
  borderRadiusSm: '3.2px',
  fontWeight: '400',
  linkColor: colors.primary,
  linkDecoration: 'none',
  linkHoverColor: darken(0.15, colors.primary),
  linkHoverDecoration: 'underline',
};

const defaultTheme: ThemeType = {
  palette,
  colors,
  body: {
    color: palette['gray-900'],
  },
  btn: {
    fontWeight: 400,
    lineHeight: base.lineHeight,
    fontFamily: base.fontFamily,
    borderWidth: base.borderWidth,
    paddingX: '12px',
    paddingY: '6px',
    paddingXLg: '16px',
    paddingYLg: '8px',
    paddingXSm: '8px',
    paddingYSm: '4px',
    fontSize: base.fontSize,
    fontSizeLg: base.fontSizeLg,
    fontSizeSm: base.fontSizeSm,
    borderRadius: base.borderRadius,
    borderRadiusLg: base.borderRadiusLg,
    borderRadiusSm: base.borderRadiusSm,
    boxShadow: `inset 0 1px 0 rgba(${palette.white}, .15), 0 1px 1px rgba(${palette.black}, .075)`,
    transition:
      'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
    disabledOpacity: 0.65,
    linkColor: base.linkColor,
    linkDecoration: base.linkDecoration,
    linkHoverColor: base.linkHoverColor,
    linkHoverDecoration: base.linkHoverDecoration,
    linkDisabledColor: palette['gray-600'],
  },
};

export default defaultTheme;
