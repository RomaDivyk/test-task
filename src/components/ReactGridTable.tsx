import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Table, TableHeaderRow, PagingPanel } from '@devexpress/dx-react-grid-material-ui';
import { SortingState, IntegratedSorting, PagingState, IntegratedPaging } from '@devexpress/dx-react-grid';

import { StyledReactGridTable } from '../styled/StyledReactGridTable';

const ReactGridTable = () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ]);
  const [rows] = useState([
    { name: 'Sandra', gender: 'Female', city: 'Las Vegas', car: 'Audi A4' },
    { name: 'Paul', gender: 'Male', city: 'Paris', car: 'Nissan Altima' },
    { name: 'Mark', gender: 'Male', city: 'Paris', car: 'Honda Accord' },
    { name: 'Mick', gender: 'Male', city: 'Denver', car: 'BMW X5' },
    { name: 'Linda', gender: 'Female', city: 'Austin', car: 'Toyota Corolla' },
    { name: 'Ivan', gender: 'Male', city: 'Kyiv', car: 'Audi A6' },
    { name: 'John', gender: 'Male', city: 'New York', car: 'Lexus LS500' },
    { name: 'Andrew', gender: 'Male', city: 'London', car: 'Mini Cooper' },
    { name: 'Maria', gender: 'Female', city: 'Madrid', car: 'Seat Leon' },
    { name: 'Jessica', gender: 'Female', city: 'New York', car: 'Toyota Avalon' },
    { name: 'Julia', gender: 'Female', city: 'Las Vegas', car: 'Audi A3' },
    { name: 'Peter', gender: 'Male', city: 'Praga', car: 'Nissan X-Trail' },
    { name: 'Jeorge', gender: 'Male', city: 'Detroit', car: 'Honda Pilot' },
    { name: 'Monica', gender: 'Female', city: 'Lissabon', car: 'BMW X1' },
    { name: 'Nina', gender: 'Female', city: 'Warsaw', car: 'Toyota Auris' },
    { name: 'Leonid', gender: 'Male', city: 'Odesa', car: 'Audi Q7' },
    { name: 'Olivue', gender: 'Male', city: 'Marcele', car: 'Lexus LX500' },
    { name: 'Dustin', gender: 'Male', city: 'Manchester', car: 'Rolls Roys' },
    { name: 'Bred', gender: 'Male', city: 'Chicago', car: 'Hyundai Sonata' },
    { name: 'Justin', gender: 'Male', city: 'Detroit', car: 'Toyota Camry' },
  ]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [pageSizes] = useState([5, 10, 15]);

  return (
    <StyledReactGridTable>
      <h1>React-Grid</h1>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <PagingState
            currentPage={currentPage}
            onCurrentPageChange={setCurrentPage}
            pageSize={pageSize}
            onPageSizeChange={setPageSize}
          />
          <IntegratedPaging />
          <SortingState defaultSorting={[{ columnName: 'city', direction: 'asc' }]} />
          <IntegratedSorting />
          <Table />
          <TableHeaderRow showSortingControls />
          <PagingPanel pageSizes={pageSizes} />
        </Grid>
      </Paper>
    </StyledReactGridTable>
  );
};

export default ReactGridTable;
