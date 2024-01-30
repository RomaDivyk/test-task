import Paper from '@mui/material/Paper';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

import { StyledReactGridTable } from '../styled/StyledReactGridTable';

const ReactGridTable = () => {
  const columns = [
    { name: 'id', title: 'ID' },
    { name: 'product', title: 'Product' },
    { name: 'owner', title: 'Owner' },
    { name: 'summary', title: 'Summary' },
  ];

  const rows = [
    { id: 0, product: 'DevExtreme', owner: 'DevExpress', summary: '100$' },
    { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress', summary: '200$' },
  ];

  return (
    <StyledReactGridTable>
      <h1>React-Grid</h1>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <Table />
          <TableHeaderRow />
        </Grid>
      </Paper>
    </StyledReactGridTable>
  );
};

export default ReactGridTable;
