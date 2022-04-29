import styled, { css } from 'styled-components';
import { ButtonProps } from './typings';
import { lighten } from 'polished';

const buttonSize = (
  paddingY: string,
  paddingX: string,
  fontSize: string,
  borderRadius: string
) => css`
  padding: ${paddingY} ${paddingX};
  font-size: ${fontSize};
  border-radius: ${borderRadius};
`;

const buttonStyle = (
  background: string,
  border: string,
  color: string,
  hoverBackground = lighten(0.075, background),
  hoverBorder = lighten(0.1, border),
  hoverColor = color
) => css<ButtonProps>`
  color: ${color};
  background: ${background};
  border-color: ${border};
  &:hover {
    color: ${hoverColor};
    background: ${hoverBackground};
    border-color: ${hoverBorder};
  }
  &:focus {
    color: ${hoverColor};
    background: ${hoverBackground};
    border-color: ${hoverBorder};
  }
  &.disabled {
    color: ${color};
    background: ${background};
    border-color: ${border};
  }
`;

const disabledStyle = css`
  ${({ theme }) => css`
    cursor: not-allowed;
    box-shadow: none;
    opacity: ${theme.btn.disabledOpacity};
    > * {
      pointer-events: none;
    }
  `}
`;

const BaseButtonCss = css<ButtonProps>`
  ${({ theme, disabled, size, btnType }) => css`
    position: relative;
    display: inline-block;
    color: ${theme.body.color};
    font-weight: ${theme.btn.fontWeight};
    line-height: ${theme.btn.lineHeight};
    font-family: ${theme.btn.fontFamily};
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    background-image: none;
    border: ${theme.btn.borderWidth} solid transparent;
    ${buttonSize(
      theme.btn.paddingY,
      theme.btn.paddingX,
      theme.btn.fontSize,
      theme.btn.borderRadius
    )}

    box-shadow: ${theme.btn.boxShadow};
    cursor: pointer;
    transition: ${theme.btn.transition};
    user-select: none;

    ${disabled && disabledStyle}

    ${size === 'large' &&
    buttonSize(
      theme.btn.paddingYLg,
      theme.btn.paddingXLg,
      theme.btn.fontSizeLg,
      theme.btn.borderRadiusLg
    )}

    ${size === 'small' &&
    buttonSize(
      theme.btn.paddingYSm,
      theme.btn.paddingXSm,
      theme.btn.fontSizeSm,
      theme.btn.borderRadiusSm
    )}

    ${btnType === 'primary' &&
    buttonStyle(
      theme.colors.primary,
      theme.colors.primary,
      theme.palette.white
    )}

    ${btnType === 'default' &&
    buttonStyle(
      theme.palette.white,
      theme.palette['gray-400'],
      theme.body.color,
      theme.palette.white,
      theme.colors.primary,
      theme.colors.primary
    )}
  `}
`;

export const StyledNativeButton = styled.button<ButtonProps>`
  ${BaseButtonCss};
  ${({ theme, btnType }) => css`
    &.danger {
      border-color: ${theme.colors.danger};
      color: ${theme.colors.danger};
      &:hover {
        border-color: ${lighten(0.1, theme.colors.danger)};
        color: ${lighten(0.1, theme.colors.danger)};
      }

      ${btnType === 'primary' &&
      buttonStyle(
        theme.colors.danger,
        theme.colors.danger,
        theme.palette.white
      )}
    }
  `}
`;

export const StyledAnchorButton = styled.a`
  ${BaseButtonCss}
  ${({ theme }) => css`
    color: ${theme.btn.linkColor};
    text-decoration: ${theme.btn.linkDecoration};
    box-shadow: none;
    &:hover {
      color: ${theme.btn.linkHoverColor};
      text-decoration: ${theme.btn.linkHoverDecoration};
    }
    &:focus {
      text-decoration: ${theme.btn.linkHoverDecoration};
      box-shadow: none;
    }
    &.danger {
      color: ${theme.colors.danger};
      &:hover {
        color: ${lighten(0.1, theme.colors.danger)};
      }
    }
    &.disabled {
      color: ${theme.btn.linkDisabledColor};
      text-decoration: none;
      & > * {
        pointer-events: none;
      }
    }
  `}
`;
