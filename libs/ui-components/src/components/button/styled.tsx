import styled, { css } from 'styled-components';

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

export const StyledNativeButton = styled.button`
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
`;

export const StyledAnchorButton = styled.a``;
