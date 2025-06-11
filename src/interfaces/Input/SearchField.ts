export interface SearchFieldProps {
  searchString: string;
  onChange: (value: string) => void;
  className?: string;
  debounce?: number;
  showDismissIcon?: boolean;
  isDisabled: boolean;
  hasError?: boolean;
}