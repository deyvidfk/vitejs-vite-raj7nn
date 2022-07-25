import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import MagTable from './MagTable/Index';
import { MagTableColumnDef } from './MagTable/CollumnDef/Index';
import { MagTableCell } from './MagTable/Cell/Index';

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
        <MagTableColumnDef title="Name">
          <MagTableCell>
            {(rowData: TData) => <td>{rowData.name}</td>}
          </MagTableCell>
        </MagTableColumnDef>
        <MagTableColumnDef title="Last Name">
          <MagTableCell>
            {(rowData: TData) => <td>{rowData.lastname}</td>}
          </MagTableCell>
        </MagTableColumnDef>
        <MagTableColumnDef title="Age">
          <MagTableCell>
            {(rowData: TData) => <td>{rowData.age}</td>}
          </MagTableCell>
        </MagTableColumnDef>
      </MagTable>
    </div>
  );
}

export default App;
