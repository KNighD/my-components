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

const BaseButtonCss = css<ButtonProps>`
  ${({ theme }) => css`
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

    box-shadow: ${theme.btn.boxShadow};
    cursor: pointer;
    transition: ${theme.btn.transition};
    user-select: none;

    &.disabled {
      cursor: not-allowed;
      box-shadow: none;
      > * {
        pointer-events: none;
      }
    }

    ${buttonSize(
      theme.btn.paddingY,
      theme.btn.paddingX,
      theme.btn.fontSize,
      theme.btn.borderRadius
    )}

    &.large {
      ${buttonSize(
        theme.btn.paddingYLg,
        theme.btn.paddingXLg,
        theme.btn.fontSizeLg,
        theme.btn.borderRadiusLg
      )}
    }
    &.small {
      ${buttonSize(
        theme.btn.paddingYSm,
        theme.btn.paddingXSm,
        theme.btn.fontSizeSm,
        theme.btn.borderRadiusSm
      )}
    }
  `}
`;

export const StyledNativeButton = styled.button<ButtonProps>`
  ${BaseButtonCss};
  ${({ theme }) => css`
    &.default {
      background-color: unset;
      color: ${theme.body.color};
      border-color: ${theme.btn.borderColor};
      &:hover {
        color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
      }
      &.danger {
        border-color: ${theme.colors.danger};
        color: ${theme.colors.danger};
        &:hover {
          border-color: ${lighten(0.1, theme.colors.danger)};
          color: ${lighten(0.1, theme.colors.danger)};
        }
      }
      &.disabled {
        color: ${theme.btn.disabledColor};
        background-color: ${theme.btn.disabledBackground};
        border-color: ${theme.btn.borderColor};
        &.danger {
          &:hover {
            color: ${theme.btn.disabledColor};
            border-color: ${theme.btn.borderColor};
            background-color: ${theme.btn.disabledBackground};
          }
        }
      }
    }
    &.primary {
      color: ${theme.palette.white};
      background-color: ${theme.colors.primary};
      &:hover {
        background-color: ${lighten(0.075, theme.colors.primary)};
      }
      &.danger {
        color: ${theme.palette.white};
        background-color: ${theme.colors.danger};
        &:hover {
          background-color: ${lighten(0.075, theme.colors.danger)};
        }
      }
      &.disabled {
        color: ${theme.btn.disabledColor};
        background-color: ${theme.btn.disabledBackground};
        border-color: ${theme.btn.borderColor};
        &.danger {
          &:hover {
            background-color: ${theme.btn.disabledBackground};
          }
        }
      }
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
      color: ${theme.btn.disabledColor};
      text-decoration: none;
      & > * {
        pointer-events: none;
      }
      &.danger {
        &:hover {
          color: ${theme.btn.disabledColor};
        }
      }
    }
  `}
`;
