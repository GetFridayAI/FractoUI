export interface InputFieldProps {
  type: string;
  value: string;
  isDisabled: boolean;
  onChange: (value: string) => void;
  onFocus?: () => void;
  isRequired?: boolean;
  placeholder?: string;
  debounce?: number;
  className?: string;
  inputFieldRef?: React.RefObject<any>;
}