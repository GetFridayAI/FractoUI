import { useRef, useState } from 'react';
import { DropdownProps, DropdownSize, DropdownTheme } from '../../interfaces/Dropdown';
import '../../styles/dropdown.less';
import { SystemIcon } from '../IconPack/SystemIcon';
import { SystemIconTypes } from '../../interfaces/SystemIcon';

export const Dropdown = (props: DropdownProps): JSX.Element => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const getDropdownSizeClass = (size: DropdownSize | undefined) => {
    if (!size) { return 'small'; }

    switch (size) {
      case DropdownSize.ExtraSmall:
        return 'extra-small';
      case DropdownSize.Small:
        return 'small';
      case DropdownSize.Medium:
        return 'medium';
      case DropdownSize.Large:
        return 'large';
      case DropdownSize.ExtraLarge:
        return 'extraLarge';
      default:
        return 'small';
    }
  }

  const getDropdownThemeClass = (theme: DropdownTheme | undefined) => {
    if (!theme) { return 'normal'; }

    switch (theme) {
      case DropdownTheme.Primary:
        return 'primary';
      case DropdownTheme.Secondary:
        return 'secondary';
      case DropdownTheme.Normal:
        return 'normal';
      default:
        return 'normal';
    }
  }

  const elClassNames = 'dropdown ' + getDropdownSizeClass(props.size) + " " + getDropdownThemeClass(props.theme);

  const onOptionSelected = (value: any) => {
    props.onSelect(value);
    closeDropdownOptions();
  }

  const closeDropdownOptions = () => {
    setIsOpen(false);
    document.removeEventListener('click', onClickOutsideDropdown);
  }

  const openDropdownOptions = () => {
    setIsOpen(true);
    document.addEventListener('click', onClickOutsideDropdown);
  }

  const onClickOutsideDropdown = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdownOptions();
    }
  }

  return <div className={`dropdown-container ${props.className ? props.className : ''}`}>
    <p className="dropdown-label">{props.label}</p>
    <div className={elClassNames} ref={dropdownRef}>
      <div className="dropdown-input" onClick={openDropdownOptions}>
        <p>{props.placeholder ? props.placeholder : props.options[0].label}</p>
        <SystemIcon
          className="dropdown-icon"
          iconType={SystemIconTypes.ChevronDown} />
      </div>
      {
        isOpen && <div className={`dropdown-options ${isOpen ? 'open': 'closed'}`}>
          <ul className="options-list">
            {
              props.options.map((option, index) => {
                return <li key={index} onClick={onOptionSelected}>{option.label}</li>
              })
            }
          </ul>
        </div>
      }
    </div>
  </div>;
}