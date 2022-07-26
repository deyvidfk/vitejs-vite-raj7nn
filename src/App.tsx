import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import MagTable from './MagTable/Index';
import { MagTableColumnDef } from './MagTable/CollumnDef/Index';
import { MagTableCell } from './MagTable/Cell/Index';
import { MagTableCellHeader } from './MagTable/Header/Index';

type TData = {
  name: string;
  lastname: string;
  age: number;
};
const source: TData[] = [
  { name: 'Deyvid', lastname: 'Souza', age: 29 },
  { name: 'Aline', lastname: 'Palmeira', age: 28 },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MagTable datasource={source}>
       
        <MagTableColumnDef name="sortable">
          <MagTableCellHeader sort component="th">
            <input type="checkbox" id="scales" name="scales" checked />
          </MagTableCellHeader>
          <MagTableCell>
            {(rowData: TData) => (
              <td>
                <input type="checkbox" id="scales" name="scales" />
              </td>
            )}
          </MagTableCell>
        </MagTableColumnDef>

        <MagTableColumnDef>
          <MagTableCellHeader sort component="th">
            <th>
              Name <button> ^</button>
              {/* <MagTableSortableCell /> */}
            </th>
          </MagTableCellHeader>

          <MagTableCell>
            {(rowData: TData) => <td>{rowData.name}</td>}
          </MagTableCell>
        </MagTableColumnDef>

        <MagTableColumnDef>
          <MagTableCellHeader>
            <th>Last Name</th>
          </MagTableCellHeader>
          <MagTableCell>
            {(rowData: TData) => <td>{rowData.lastname}</td>}
          </MagTableCell>
        </MagTableColumnDef>

        <MagTableColumnDef>
          <MagTableCellHeader>
            <th>Age</th>
          </MagTableCellHeader>
          <MagTableCell>
            {(rowData: TData) => <td>{rowData.age}</td>}
          </MagTableCell>
        </MagTableColumnDef>
      </MagTable>
    </div>
  );
}

export default App;
