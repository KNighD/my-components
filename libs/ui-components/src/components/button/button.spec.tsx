import { render, fireEvent } from '@testing-library/react';

import { Button } from './index';

const onClick = jest.fn();

describe('test Button component', () => {
  it('should render default button', () => {
    const tree = render(<Button onClick={onClick}>defaultBtn</Button>);
    const btn = tree.getByText('defaultBtn');
    expect(btn).toBeInTheDocument();
    expect(btn.tagName).toEqual('BUTTON');
    expect(btn).toHaveClass('RuiButton-nativeBtn');
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalled();
  });
  it('should render link', () => {
    const tree = render(<Button btnType="link">Link</Button>);
    const btn = tree.getByText('Link');
    expect(btn.tagName).toEqual('A');
    expect(btn).toHaveClass('RuiButton-anchorBtn');
  });
  it('different props should work', () => {
    const tree = render(
      <Button danger disabled btnType="primary" size="large">
        PrimaryDangerDisabledPrimaryBtn
      </Button>
    );
    const btn = tree.getByText('PrimaryDangerDisabledPrimaryBtn');
    expect(btn).toHaveClass('danger disabled primary large');
  });
});
