import { Box } from "@mui/material";
import { TransactionTable } from "components";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <TransactionTable />
    </Box>
  );
};
