import "../../styles/textField.less";
import { TextFieldProps } from '../../interfaces/Input/TextField';
import InputField from './InputField';
import { FocusEvent, useEffect, useRef, useState } from 'react';

export const TextField = (props: TextFieldProps) => {
  const elClassNames: string = "text-field-wrapper " + (props.className ? props.className : "");
  const textFieldRef = useRef<HTMLDivElement>(null);
  const [hasFocus, setHasFocus] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
      if (textFieldRef.current) {
        textFieldRef?.current.addEventListener('click', () => {
          setHasFocus(true);
          if (inputRef?.current) {
            inputRef?.current.focus();
          }
          document.addEventListener('click', onClickOutsideTextField);
        });
      }
  }, [textFieldRef.current]);

  const onClickOutsideTextField = (event: any) => {
    if (textFieldRef?.current && !textFieldRef?.current.contains(event.target)) {
      setHasFocus(false);
      document.removeEventListener('click', onClickOutsideTextField);
    }
  }

  return (
    <div className={`text-field-container text-field-wrapper ${hasFocus ? 'focused':''} ${hasError ? 'hasError' : ''}`}>
      <div className={elClassNames} ref={textFieldRef}>
        <InputField
          inputFieldRef={inputRef}
          type={"text"}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          isDisabled={props.isDisabled}
          debounce={props.debounce}
          className={props.className}
          isRequired={props.isRequired}
        />
      </div>
    </div>
  );
}