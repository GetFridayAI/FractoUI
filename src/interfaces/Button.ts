export interface ButtonProps {
  text: string;
  onClick: () => void;
  type: ButtonType;
  disabled: boolean;
  className?: string;
  id?: string;
  size?: ButtonSize;
  position?: ButtonPosition;
  shape?: ButtonShape;
}

export type ButtonType = "button" | "submit" | "reset" | undefined;

export enum ButtonSize {
  Compact = 1,
  Normal = 2,
  Wide = 3,
  ExtraWide = 4,
  Giant = 5
}

export enum ButtonPosition {
  TopLeft = 1,
  TopRight = 2,
  BottomLeft = 3,
  BottomRight = 4
}

export enum ButtonShape {
  Normal = 1,
  Ellipse = 2,
  Rounded = 3
}