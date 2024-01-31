import { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
  TableColumnVisibility,
  Toolbar,
  ColumnChooser,
  SearchPanel,
  TableEditRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';
import {
  SortingState,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
  SearchState,
  IntegratedFiltering,
  EditingState,
  ChangeSet,
} from '@devexpress/dx-react-grid';

import { StyledReactGridTable } from '../styled/StyledReactGridTable';

interface RowType {
  id: number;
}

interface RowsType {
  id: number;
  name: string;
  gender: string;
  city: string;
  car: string;
}

const getRowId = (row: RowType) => row.id;

const getHiddenColumnsFilteringExtensions = (hiddenColumnNames: string[]) => {
  return hiddenColumnNames.map((columnName: string) => ({
    columnName,
    predicate: () => false,
  }));
};

const ReactGridTable = () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ]);
  const [rows, setRows] = useState([
    { id: 0, name: 'Sandra', gender: 'Female', city: 'Las Vegas', car: 'Audi A4' },
    { id: 1, name: 'Paul', gender: 'Male', city: 'Paris', car: 'Nissan Altima' },
    { id: 2, name: 'Mark', gender: 'Male', city: 'Paris', car: 'Honda Accord' },
    { id: 3, name: 'Mick', gender: 'Male', city: 'Denver', car: 'BMW X5' },
    { id: 4, name: 'Linda', gender: 'Female', city: 'Austin', car: 'Toyota Corolla' },
    { id: 5, name: 'Ivan', gender: 'Male', city: 'Kyiv', car: 'Audi A6' },
    { id: 6, name: 'John', gender: 'Male', city: 'New York', car: 'Lexus LS500' },
    { id: 7, name: 'Andrew', gender: 'Male', city: 'London', car: 'Mini Cooper' },
    { id: 8, name: 'Maria', gender: 'Female', city: 'Madrid', car: 'Seat Leon' },
    { id: 9, name: 'Jessica', gender: 'Female', city: 'New York', car: 'Toyota Avalon' },
    { id: 10, name: 'Julia', gender: 'Female', city: 'Las Vegas', car: 'Audi A3' },
    { id: 11, name: 'Peter', gender: 'Male', city: 'Praga', car: 'Nissan X-Trail' },
    { id: 12, name: 'Jeorge', gender: 'Male', city: 'Detroit', car: 'Honda Pilot' },
    { id: 13, name: 'Monica', gender: 'Female', city: 'Lissabon', car: 'BMW X1' },
    { id: 14, name: 'Nina', gender: 'Female', city: 'Warsaw', car: 'Toyota Auris' },
    { id: 15, name: 'Leonid', gender: 'Male', city: 'Odesa', car: 'Audi Q7' },
    { id: 16, name: 'Olivue', gender: 'Male', city: 'Marcele', car: 'Lexus LX500' },
    { id: 17, name: 'Dustin', gender: 'Male', city: 'Manchester', car: 'Rolls Roys' },
    { id: 18, name: 'Bred', gender: 'Male', city: 'Chicago', car: 'Hyundai Sonata' },
    { id: 19, name: 'Justin', gender: 'Male', city: 'Detroit', car: 'Toyota Camry' },
  ]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [pageSizes] = useState([5, 10, 15]);
  const [defaultHiddenColumnNames] = useState(['']);
  const [filteringColumnExtensions, setFilteringColumnExtensions] = useState(
    getHiddenColumnsFilteringExtensions(defaultHiddenColumnNames)
  );

  const onHiddenColumnNamesChange = (hiddenColumnNames: string[]) =>
    setFilteringColumnExtensions(getHiddenColumnsFilteringExtensions(hiddenColumnNames));

  let changedRows: RowsType[];

  const commitChanges = ({ added, changed, deleted }: ChangeSet) => {
    if (added) {
      const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map((row) => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter((row) => !deletedSet.has(row.id));
    }

    setRows(changedRows);
  };

  return (
    <StyledReactGridTable>
      <h1>React-Grid</h1>
      <Paper>
        <Grid rows={rows} columns={columns} getRowId={getRowId}>
          <EditingState onCommitChanges={commitChanges} />
          <SearchState defaultValue="" />
          <IntegratedFiltering columnExtensions={filteringColumnExtensions} />
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
          <TableColumnVisibility
            defaultHiddenColumnNames={defaultHiddenColumnNames}
            onHiddenColumnNamesChange={onHiddenColumnNamesChange}
          />
          <TableEditRow />
          <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
          <Toolbar />
          <SearchPanel />
          <ColumnChooser />
          <PagingPanel pageSizes={pageSizes} />
        </Grid>
      </Paper>
    </StyledReactGridTable>
  );
};

export default ReactGridTable;
