import { ButtonProps } from './typings.d';
import { StyledAnchorButton, StyledNativeButton } from './styled';

export default function Button(props: ButtonProps) {
  const { type = 'default', size, children, ...restProps } = props;
  if (type === 'link') {
    return <StyledAnchorButton {...restProps}>{children}</StyledAnchorButton>;
  }
  return (
    <StyledNativeButton className="RuiButton-nativeBtn" {...restProps}>
      {children}
    </StyledNativeButton>
  );
}
