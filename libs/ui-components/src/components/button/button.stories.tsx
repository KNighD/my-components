import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@rellika/ui-themes';
import { Button, ButtonProps } from './index';

export default {
  component: Button,
  title: '按钮',
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'button',
};
