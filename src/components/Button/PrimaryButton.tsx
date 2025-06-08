import { Button } from './Button';
import { ButtonProps } from '../../interfaces/Button';

export const PrimaryButton = (props: ButtonProps) => {
  const buttonProps = {
    ...props,
    className: "primary-button " + props.className
  }

  return <Button {...buttonProps} />;
}