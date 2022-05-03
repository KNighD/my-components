import classNames from 'classnames';
import { ButtonProps } from './typings.d';
import { StyledAnchorButton, StyledNativeButton } from './styled';
import { defaultTheme } from '@rellika/ui-themes';

export default function Button(props: ButtonProps) {
  const { btnType = 'default', children, className, ...restProps } = props;
  const cls = {
    disabled: restProps.disabled,
    danger: restProps.danger,
    large: restProps.size === 'large',
    small: restProps.size === 'small',
  };

  if (btnType === 'link') {
    return (
      <StyledAnchorButton
        className={classNames('RuiButton-anchorBtn', className, cls)}
        {...restProps}
      >
        {children}
      </StyledAnchorButton>
    );
  }
  return (
    <StyledNativeButton
      className={classNames('RuiButton-nativeBtn', className, cls, {
        primary: btnType === 'primary',
        default: btnType === 'default',
      })}
      btnType={btnType}
      {...restProps}
    >
      {children}
    </StyledNativeButton>
  );
}

StyledAnchorButton.defaultProps = {
  theme: defaultTheme,
};

StyledNativeButton.defaultProps = {
  theme: defaultTheme,
};
