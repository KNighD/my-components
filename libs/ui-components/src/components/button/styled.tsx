import styled from 'styled-components';

export const StyledNativeButton = styled.button`
  position: relative;
  display: inline-block;
  font-weight: ${(props) => props.theme.btn.fontWeight};
  line-height: ${(props) => props.theme.btn.lineHeight};
  font-family: ${(props) => props.theme.btn.fontFamily};
`;

export const StyledAnchorButton = styled.a``;
