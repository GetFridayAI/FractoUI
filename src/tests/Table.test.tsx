import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from '../components/Table/Table';

describe('Table component', () => {
  const headers = [
    { headerName: 'Name', className: 'name-col' },
    { headerName: 'Age', className: 'age-col' }
  ];

  const rows = [
    { data: ['Alice', '25'] },
    { data: ['Bob', '30'] }
  ];

  it('renders headers correctly', () => {
    render(<Table headers={headers} rows={rows} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  it('renders all rows and cells', () => {
    render(<Table headers={headers} rows={rows} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('adds custom className to wrapper', () => {
    const { container } = render(
      <Table className="custom-class" headers={headers} rows={rows} />
    );
    expect(container.firstChild).toHaveClass('table-wrapper');
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('adds has-grid class when showGrid is true', () => {
    const { container } = render(
      <Table showGrid headers={headers} rows={rows} />
    );
    const table = container.querySelector('table');
    expect(table).toHaveClass('has-grid');
  });

  it('adds has-select column when hasSelect is true', () => {
    render(<Table hasSelect headers={headers} rows={rows} />);
    // There should be 1 header cell for checkbox
    expect(screen.getAllByText('Checkbox here')).toHaveLength(3); // 1 in <thead>, 2 in <tbody>
  });

  it('does not render select column if hasSelect is false', () => {
    render(<Table hasSelect={false} headers={headers} rows={rows} />);
    expect(screen.queryByText('Checkbox here')).not.toBeInTheDocument();
  });
});