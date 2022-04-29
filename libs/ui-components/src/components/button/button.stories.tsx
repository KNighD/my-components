import { Meta } from '@storybook/react';
import { Button } from './index';
import { ButtonProps } from './typings';

export default {
  component: Button,
  title: '按钮',
} as Meta;

const Template = (args: ButtonProps) => <Button {...args}>自定义按钮</Button>;

export const Custom = Template.bind({});

export const Primary = () => (
  <div>
    <Button btnType="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button btnType="link">Link Button</Button>
  </div>
);

export const Disabled = () => (
  <div>
    <Button btnType="primary" disabled>
      Primary Button
    </Button>
    <Button disabled>Default Button</Button>
    <Button btnType="link" disabled>
      Link Button
    </Button>
  </div>
);

export const Danger = () => (
  <div>
    <Button btnType="primary" danger>
      Primary Button
    </Button>
    <Button danger>Default Button</Button>
    <Button btnType="link" danger>
      Link Button
    </Button>
  </div>
);

export const Size = () => (
  <div>
    <Button size="large">Large Button</Button>
    <Button size="default">Large Button</Button>
    <Button size="small">Small Button</Button>
  </div>
);
