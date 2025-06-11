export interface DropdownProps {
  label: string;
  options: Array<DropdownOptions>;
  hasError: boolean;
  errorMessage: string;
  onSelect: (value: any) => void;
  className?: string;
  id?: string;
  size?: DropdownSize;
  placeholder?: string;
  theme?: DropdownTheme;
}

export interface DropdownOptions {
  value: number;
  label: string;
}

export enum DropdownSize {
  ExtraSmall = 1,
  Small = 2,
  Medium = 3,
  Large = 4,
  ExtraLarge = 5
}

export enum DropdownTheme {
  Normal = 1,
  Primary = 2,
  Secondary = 3
}