import { Button } from './Button';
import { ButtonProps } from '../../interfaces/Button';

export const SecondaryButton = (props: ButtonProps): JSX.Element => {
  const buttonProps = {
    ...props,
    className: "secondary-button " + props.className
  }

  return <Button {...buttonProps} />;
}