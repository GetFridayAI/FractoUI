import "../../styles/table.less";
import { TableProps } from '../../interfaces/Table';

export const Table = (props: TableProps) => {
  const elClassNames: string = "table-wrapper " + (props.className ? props.className : "");

  return (
    <div className={elClassNames}>
      <table className={`${props.showGrid ? 'has-grid' : ''} ${props.hasSelect ? 'has-select' : ''}`}>
        <thead>
          <tr>
            {
              props.hasSelect && <th>Checkbox here</th>
            }
            {
              props.headers.map((header, index) => {
                return <th className={header.className} key={index}>{header.headerName}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
        {
          props.rows.map((row, index) => {
            return <tr key={index}>
              {
                props.hasSelect && <td>Checkbox here</td>
              }
              {
                row.data.map((cell, cellIndex) => {
                  return <td key={index+cellIndex}>{cell}</td>;
                })
              }
            </tr>
          })
        }
        </tbody>
      </table>
    </div>
  );
}