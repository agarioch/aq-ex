import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { COLORS } from '../../theme';

type DataTableProps = {
  data: {
    [key: string]: number | string | Date;
  };
};

const DataTable = ({ data }: DataTableProps) => {
  const dataRows = Object.entries(data).map(([key, value]) => (
    <TableRow key={key}>
      <TableCell size="small" sx={{ paddingLeft: 0, color: COLORS.gray[500] }}>
        {key}
      </TableCell>
      <TableCell size="small">
        {typeof value === 'object' ? value.toLocaleDateString() : value}
      </TableCell>
    </TableRow>
  ));

  return (
    <TableContainer>
      <Table>
        <TableBody>{dataRows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
