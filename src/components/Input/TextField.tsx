import "../../styles/textField.less";
import { TextFieldProps } from '../../interfaces/Input/TextField';
import InputField from './InputField';

const TextField = (props: TextFieldProps) => {
  const elClassNames: string = "text-field-wrapper " + (props.className ? props.className : "");

  return (
    <div className={elClassNames}>
      <InputField
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
  );
}

export default TextField;