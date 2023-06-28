import React from "react";

import { styled } from "@mui/material/styles";

import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  tableCellClasses,
} from "@mui/material";

// dashboard의 billing history table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#EBEBEB",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "1rem",
  },
}));

/** 테이블의 columns */
const columns = [
  { id: "cardname", label: "Card\u00a0Name", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 100 },
  {
    id: "description",
    label: "Description",
    minWidth: 170,
    align: "right",
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 170,
    align: "right",
  },
];

// * 데이터 서버에서 받아와서 createData 해서 push
/** 테스트용 */
const rows = [];

/** 결제 내역 테이블 */
export const BillingHistoryTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  /** 페이지 넘기기 */
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  /** 페이지에 보이는 줄 갯수 바꿈 */
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 250 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <StyledTableCell
                  key={index}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column, index) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={index} align={column.align}>
                        {column.format && typeof value === "number" ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
