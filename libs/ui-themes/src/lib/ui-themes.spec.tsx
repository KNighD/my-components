import { render } from '@testing-library/react';

import UiThemes from './ui-themes';

describe('UiThemes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiThemes />);
    expect(baseElement).toBeTruthy();
  });
});
