import classNames from 'classnames';
import { ButtonProps } from './typings.d';
import { StyledAnchorButton, StyledNativeButton } from './styled';

export default function Button(props: ButtonProps) {
  const { btnType = 'default', children, className, ...restProps } = props;

  if (btnType === 'link') {
    return (
      <StyledAnchorButton
        className={classNames('RuiButton-anchorBtn', className, {
          disabled: restProps.disabled,
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
      })}
      btnType={btnType}
      {...restProps}
    >
      {children}
    </StyledNativeButton>
  );
}
