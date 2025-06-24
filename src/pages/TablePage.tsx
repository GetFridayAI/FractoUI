import {useState} from 'react';
import Table from '../components/Table/Table';
import "./less/tablePages.less";

const TablePage = () => {
  const headers = [
    {
      headerName: 'Name',
    },
    {
      headerName: 'Age',
    },
    {
      headerName: 'Gender',
    }
  ];

  const rows = [
    {
      data: ["Test", 20, "M"]
    },
    {
      data: ["Test1", 30, "M"]
    },
    {
      data: ["Test2", 28, "M"]
    }
  ]

  return (
    <div className="table-section">
      <div className="table-container">
        <h3>Table</h3>
        <div className="tableWrapper">
          <Table
            headers={headers}
            rows={rows} />
        </div>
      </div>

    </div>
  );
};

export default TablePage;