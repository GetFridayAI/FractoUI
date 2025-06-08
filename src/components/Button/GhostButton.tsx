import { Button } from './Button';
import { ButtonProps } from '../../interfaces/Button';

export const SecondaryButton = (props: ButtonProps) => {
  const buttonProps = {
    ...props,
    className: "secondary-button " + props.className
  }

  return <Button {...buttonProps} />;
}