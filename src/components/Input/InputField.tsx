import { useEffect, useRef, useState } from 'react';
import "../../styles/inputField.less";
import { InputFieldProps } from '../../interfaces/Input/InputField';
import { useDebounce } from "use-debounce";

const InputField = (props: InputFieldProps) => {
  const [value, setValue] = useState<string>(props.value);
  const [debouncedValue] = useDebounce(value, props.debounce ? props.debounce : 500);
  const elClassNames: string = "input-field-wrapper " + (props.className ? props.className : "");

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  useEffect(() => {
    props.onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className={elClassNames}>
      <input
        ref={props.inputFieldRef}
        type={props.type}
        value={value}
        onChange={onTextChange}
        disabled={props.isDisabled}
        placeholder={props.placeholder}
        required={props.isRequired}
      />
    </div>
  );
}

export default InputField;