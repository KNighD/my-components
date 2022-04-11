import { render } from '@testing-library/react';

import UiComponents from './button';

describe('UiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
