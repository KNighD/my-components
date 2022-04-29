import classNames from 'classnames';
import { ButtonProps } from './typings.d';
import { StyledAnchorButton, StyledNativeButton } from './styled';
import { defaultTheme } from '@rellika/ui-themes';

export default function Button(props: ButtonProps) {
  const { btnType = 'default', children, className, ...restProps } = props;

  if (btnType === 'link') {
    return (
      <StyledAnchorButton
        className={classNames('RuiButton-anchorBtn', className, {
          disabled: restProps.disabled,
          danger: restProps.danger,
        })}
        {...restProps}
      >
        {children}
      </StyledAnchorButton>
    );
  }
  return (
    <StyledNativeButton
      className={classNames('RuiButton-nativeBtn', className, {
        disabled: restProps.disabled,
        danger: restProps.danger,
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
