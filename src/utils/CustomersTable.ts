import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'createdAt', headerName: 'Date', width: 150 },
  { field: 'cars', headerName: 'Cars', width: 150 },
];
