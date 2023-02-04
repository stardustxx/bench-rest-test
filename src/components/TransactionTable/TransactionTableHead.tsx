import { TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";
import { formatCurrency } from "utils";

export type TransactionTableHeadProps = {
  total: number;
};

export const TransactionTableHead: FC<TransactionTableHeadProps> = ({
  total,
}) => {
  return (
    <TableHead
      sx={{
        background: "white",
      }}
    >
      <TableRow>
        <TableCell>Date</TableCell>
        <TableCell>Company</TableCell>
        <TableCell>Account</TableCell>
        <TableCell align="right">
          {formatCurrency(total, {
            maximumFractionDigits: 2,
          })}
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
