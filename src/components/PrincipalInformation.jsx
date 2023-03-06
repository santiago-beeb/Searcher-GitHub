import { Stack, Typography } from "@mui/material";
import React from "react";
import Moment from "react-moment";

export const PrincipalInformation = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;

  return (
    <>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">{name}</Typography>
        <Typography>
          {new Date(created_at).toLocaleDateString("en-us")}
        </Typography>
      </Stack>
      <Typography variant="caption">@{login}</Typography>
    </>
  );
};
