import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { DropdownSize, DropdownTheme } from '../../interfaces/Dropdown';

describe('Dropdown Component', () => {
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 }
  ];

  const setup = (props = {}) => {
    const onSelect = jest.fn();
    render(<Dropdown
      label="Test Label"
      options={options}
      onSelect={onSelect}
      hasError={false}
      errorMessage={''}
      {...props}
    />);
    return { onSelect };
  };

  it('renders label and placeholder', () => {
    setup({ placeholder: 'Select an option' });
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('uses first option as default if no placeholder is provided', () => {
    setup();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('opens dropdown on click and shows options', () => {
    setup();
    fireEvent.click(screen.getByText('Option 1'));
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('adds custom className to container', () => {
    const { container } = render(
      <Dropdown
        label="Test"
        options={options}
        onSelect={() => {}}
        className="custom-class"
        hasError={false}
        errorMessage={''}
      />
    );
    expect(container.firstChild).toHaveClass('dropdown-container custom-class');
  });

  it('applies correct size and theme classes', () => {
    const { container } = render(
      <Dropdown
        label="Test"
        options={options}
        onSelect={() => {}}
        size={DropdownSize.Large}
        theme={DropdownTheme.Primary}
        hasError={false}
        errorMessage={""}
      />
    );
    const dropdown = container.querySelector('.dropdown');
    expect(dropdown).toHaveClass('large');
    expect(dropdown).toHaveClass('primary');
  });
});