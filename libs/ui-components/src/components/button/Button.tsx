import { ButtonProps } from './typings.d';
import { StyledAnchorButton, StyledNativeButton } from './styled';

export default function Button(props: ButtonProps) {
  const { btnType = 'default', children, ...restProps } = props;
  if (btnType === 'link') {
    return <StyledAnchorButton {...restProps}>{children}</StyledAnchorButton>;
  }
  return (
    <StyledNativeButton
      className="RuiButton-nativeBtn"
      btnType={btnType}
      {...restProps}
    >
      {children}
    </StyledNativeButton>
  );
}
