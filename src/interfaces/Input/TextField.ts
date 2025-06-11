export interface TextFieldProps {
  value: string;
  isDisabled: boolean;
  onChange: (value: string) => void;
  isRequired?: boolean;
  label?: string;
  placeholder?: string;
  debounce?: number;
  className?: string;
}