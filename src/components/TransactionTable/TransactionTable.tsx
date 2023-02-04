import { Box, Paper, Table, TableContainer, Typography } from "@mui/material";
import { useTransactions } from "hooks";
import { FC, useMemo } from "react";
import { Transaction } from "types";
import { TransactionTableData } from "./TransactionTableData";
import { TransactionTableHead } from "./TransactionTableHead";

export const TransactionTable: FC = () => {
  const {
    data,
    error,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useTransactions();

  if (!isFetchingNextPage && hasNextPage) {
    fetchNextPage();
  }

  const transactions = useMemo(() => {
    return (
      data?.pages.reduce<Transaction[]>(
        (acc, cur) => acc.concat(cur.transactions),
        []
      ) ?? []
    );
  }, [data]);

  const totalAmount = useMemo(() => {
    return transactions.reduce(
      (acc, cur) => acc + Number.parseInt(cur.Amount, 10),
      0
    );
  }, [transactions]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Transaction table">
        <TransactionTableHead total={totalAmount} />
        <>
          {error && (
            <Box>
              <Typography>Something is wrong with the query</Typography>
            </Box>
          )}
          {isSuccess && <TransactionTableData transactions={transactions} />}
        </>
      </Table>
    </TableContainer>
  );
};
