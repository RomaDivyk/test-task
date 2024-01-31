import Paper from '@mui/material/Paper';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { SortingState, IntegratedSorting, Column } from '@devexpress/dx-react-grid';

import { StyledReactGridTable } from '../styled/StyledReactGridTable';

interface IRow {
  name: string;
  gender: string;
  city: string;
  car: string;
}

const ReactGridTable = () => {
  const columns: Column[] = [
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ];

  const rows: IRow[] = [
    { name: 'Sandra', gender: 'Female', city: 'Las Vegas', car: 'Audi A4' },
    { name: 'Paul', gender: 'Male', city: 'Paris', car: 'Nissan Altima' },
    { name: 'Mark', gender: 'Male', city: 'Paris', car: 'Honda Accord' },
    { name: 'Mick', gender: 'Male', city: 'Denver', car: 'BMW' },
    { name: 'Linda', gender: 'Female', city: 'Austin', car: 'Toyota Corolla' },
    { name: 'Ivan', gender: 'Male', city: 'Kyiv', car: 'Audi A6' },
    { name: 'John', gender: 'Male', city: 'New York', car: 'Lexus LS500' },
    { name: 'Andrew', gender: 'Male', city: 'London', car: 'Mini Cooper' },
    { name: 'Maria', gender: 'Female', city: 'Madrid', car: 'Seat Leon' },
    { name: 'Jessica', gender: 'Female', city: 'New York', car: 'Toyota Avalon' },
  ];

  return (
    <StyledReactGridTable>
      <h1>React-Grid</h1>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <SortingState defaultSorting={[{ columnName: 'city', direction: 'asc' }]} />
          <IntegratedSorting />
          <Table />
          <TableHeaderRow showSortingControls />
        </Grid>
      </Paper>
    </StyledReactGridTable>
  );
};

export default ReactGridTable;
