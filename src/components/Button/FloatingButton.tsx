import { Button } from './Button';
import { ButtonProps } from '../../interfaces/Button';

export const FloatingButton = (props: ButtonProps) => {
  const buttonProps = {
    ...props,
    className: "floating-button " + props.className
  }

  return <Button {...buttonProps} />;
}