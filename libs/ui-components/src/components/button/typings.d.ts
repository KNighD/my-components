import React from 'react';

export type ButtonSize = 'large' | 'small' | 'default';

interface ButtonBaseProps {
  type?: 'primary' | 'link' | 'default';
  size?: ButtonSize;
}

export type AnchorButtonProps = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type'>;

export type NativeButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;

export type ButtonProps = AnchorButtonProps & NativeButtonProps;
