import { Box, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { FC } from "react";
import { Transaction } from "types";
import { formatCurrency, formatDate } from "utils";

const getColor = (n: number) => (n % 2 ? "#2F3034" : "#128B8C");

export type TransactionTableDataProps = {
  transactions: Transaction[];
};

export const TransactionTableData: FC<TransactionTableDataProps> = ({
  transactions,
}) => {
  if (!transactions.length) {
    return (
      <Box>
        <Typography>No data</Typography>
      </Box>
    );
  }

  return (
    <TableBody
      sx={{
        background: "#fafaf8",
      }}
    >
      {transactions.map((row, index) => (
        <TableRow key={index}>
          <TableCell>
            <Typography color="grey.100">{formatDate(row.Date)}</Typography>
          </TableCell>
          <TableCell>
            <Typography fontWeight="medium" color={getColor(index)}>
              {row.Company}
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="grey.100">{row.Ledger}</Typography>
          </TableCell>
          <TableCell align="right" color={getColor(index)}>
            <Typography>
              {formatCurrency(Number.parseInt(row.Amount, 10), {
                maximumFractionDigits: 2,
              })}
            </Typography>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
