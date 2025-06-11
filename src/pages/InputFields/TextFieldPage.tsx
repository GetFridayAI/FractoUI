import {useState} from 'react';
import TextField from '../../components/Input/TextField';
import "../less/inputFieldPages.less";

const TextFieldPage = () => {
  const [value, setValue] = useState('');
  return (
    <div className="textfield-section">
      <div className="textfield-container">
        <h3>Text Field</h3>
        <div className="fieldWrapper">
          <TextField
            value={value}
            isDisabled={false}
            placeholder={"Placeholder Text"}
            onChange={(text) => setValue(text)} />
        </div>
      </div>

    </div>
  );
};

export default TextFieldPage;