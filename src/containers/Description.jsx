import React from "react";
import { Stack, Typography } from "@mui/material";
import { LocationInformation } from "../components/LocationInformation";
import { PaperInformation } from "../components/PaperInformation";

export const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;

  return (
    <>
      <Stack
        sx={{
          justifyContent: "center",
        }}
      >
        <Typography variant="body1">
          {bio ?? "lorem ipsum dolor sit amet"}
        </Typography>
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  );
};
