import './less/dropdownPage.less';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { DropdownSize, DropdownTheme } from '../interfaces/Dropdown';

const DropdownPage = () => {
  const options = [
    {
      value: 1,
      label: "Option 1"
    },
    {
      value: 2,
      label: "Option 2"
    },
    {
      value: 3,
      label: "Option 3"
    },
    {
      value: 4,
      label: "Option 4"
    },
    {
      value: 5,
      label: "Option 5"
    },
    {
      value: 6,
      label: "Option 6"
    }
  ];

  return (
    <div className="dropdown-section">
      <div className="dropdown-container">
        <h3>Dropdowns</h3>
        <div className="dropdown-wrapper">
          <Dropdown
            label={"Dropdown Label"}
            placeholder={""}
            options={options}
            hasError={false}
            errorMessage={""}
            onSelect={()=>{}}
            theme={DropdownTheme.Secondary}
            size={DropdownSize.Small}/>
        </div>
      </div>

    </div>
  );
};

export default DropdownPage;