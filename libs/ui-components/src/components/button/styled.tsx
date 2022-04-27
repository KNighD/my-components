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

const disabled = css`
  cursor: not-allowed;
  box-shadow: none;
  opacity: ${(props) => props.theme.btn.disabledOpacity};
  > * {
    pointer-events: none;
  }
`;

const BaseButtonCss = css<ButtonProps>`
  position: relative;
  display: inline-block;
  color: ${(props) => props.theme.body.color};
  font-weight: ${(props) => props.theme.btn.fontWeight};
  line-height: ${(props) => props.theme.btn.lineHeight};
  font-family: ${(props) => props.theme.btn.fontFamily};
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  background-image: none;
  border: ${(props) => props.theme.btn.borderWidth} solid transparent;
  ${(props) =>
    buttonSize(
      props.theme.btn.paddingY,
      props.theme.btn.paddingX,
      props.theme.btn.fontSize,
      props.theme.btn.borderRadius
    )};
  box-shadow: ${(props) => props.theme.btn.boxShadow};
  cursor: pointer;
  transition: ${(props) => props.theme.btn.transition};
  user-select: none;

  ${(props) => props.disabled && disabled}

  ${(props) =>
    props.size === 'large' &&
    buttonSize(
      props.theme.btn.paddingYLg,
      props.theme.btn.paddingXLg,
      props.theme.btn.fontSizeLg,
      props.theme.btn.borderRadiusLg
    )}

    ${(props) =>
    props.size === 'small' &&
    buttonSize(
      props.theme.btn.paddingYSm,
      props.theme.btn.paddingXSm,
      props.theme.btn.fontSizeSm,
      props.theme.btn.borderRadiusSm
    )}

    ${(props) =>
    props.btnType === 'primary' &&
    buttonStyle(
      props.theme.colors.primary,
      props.theme.colors.primary,
      props.theme.palette.white
    )}

    ${(props) =>
    props.danger &&
    buttonStyle(
      props.theme.colors.danger,
      props.theme.colors.danger,
      props.theme.palette.white
    )}

    ${(props) =>
    props.btnType === 'default' &&
    buttonStyle(
      props.theme.palette.white,
      props.theme.palette['gray-400'],
      props.theme.body.color,
      props.theme.palette.white,
      props.theme.colors.primary,
      props.theme.colors.primary
    )}
`;

export const StyledNativeButton = styled.button<ButtonProps>`
  ${BaseButtonCss}
`;

export const StyledAnchorButton = styled.a`
  ${BaseButtonCss}
  color: ${(props) => props.theme.btn.linkColor};
  text-decoration: ${(props) => props.theme.btn.linkDecoration};
  box-shadow: none;
  &:hover {
    color: ${(props) => props.theme.btn.linkHoverColor};
    text-decoration: ${(props) => props.theme.btn.linkHoverDecoration};
  }
  &:focus {
    text-decoration: ${(props) => props.theme.btn.linkHoverDecoration};
    box-shadow: none;
  }
  &.disabled {
    color: ${(props) => props.theme.btn.linkDisabledColor};
    text-decoration: none;
    & > * {
      pointer-events: none;
    }
  }
`;
