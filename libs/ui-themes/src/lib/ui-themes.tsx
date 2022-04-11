import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiThemesProps {}

const StyledUiThemes = styled.div`
  color: pink;
`;

export function UiThemes(props: UiThemesProps) {
  return (
    <StyledUiThemes>
      <h1>Welcome to UiThemes!</h1>
    </StyledUiThemes>
  );
}

export default UiThemes;
