import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function Pagination({page,rowsPerPage,handleChangePage,handleChangeRowsPerPage,count}) {

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      rowsPerPageOptions={[5, 10, 20,50]}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      labelRowsPerPage='Filtrar por:'
      getItemAriaLabel={(type) => { return `El siguiente ${type}`}}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}