import React from 'react';

export type ButtonSize = 'large' | 'small' | 'default';
export type ButtonType = 'primary' | 'link' | 'default';

interface ButtonBaseProps {
  btnType?: ButtonType;
  size?: ButtonSize;
  danger?: boolean;
  disabled?: boolean;
}

export type AnchorButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
} & ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
} & ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type' | 'onClick'>;

export type ButtonProps = AnchorButtonProps & NativeButtonProps;
