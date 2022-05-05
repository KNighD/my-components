import { Meta } from '@storybook/react';
import { Button } from './index';
import { ButtonProps } from './typings';

export default {
  component: Button,
  title: '组件/按钮',
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
    <div>
      <Button btnType="primary">Primary Button</Button>
      <Button btnType="primary" disabled>
        Disabled Primary Button
      </Button>
    </div>
    <div>
      <Button>Default Button</Button>
      <Button disabled>Disabled Default Button</Button>
    </div>
    <div>
      <Button btnType="link">Link Button</Button>
      <Button btnType="link" disabled>
        Disabled Link Button
      </Button>
    </div>
    <div>
      <Button btnType="primary" danger>
        Danger Primary Button
      </Button>
      <Button btnType="primary" danger disabled>
        Disabled Danger Primary Button
      </Button>
    </div>
    <div>
      <Button danger>Danger Default Button</Button>
      <Button danger disabled>
        Disabled Danger Default Button
      </Button>
    </div>
    <div>
      <Button btnType="link" danger>
        Danger Link Button
      </Button>
      <Button btnType="link" danger disabled>
        Disabled Danger Link Button
      </Button>
    </div>
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
