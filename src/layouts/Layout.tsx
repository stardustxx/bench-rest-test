import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          background: "#137A79",
          height: 72,
        }}
      >
        <Typography color="white">Bench Test</Typography>
      </Box>
      <Outlet />
    </Box>
  );
};
