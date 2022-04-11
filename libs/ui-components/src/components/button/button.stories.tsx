import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './index';

export default {
  component: Button,
  title: '按钮',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'button',
};
