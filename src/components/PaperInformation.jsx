import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

export const PaperInformation = (props) => {
  const { userState } = props;
  const { public_repos, followers, following } = userState;

  const userInformation = [
    { title: "Public Repos", value: public_repos },
    { title: "Followers", value: followers },
    { title: "Following", value: following },
  ];
  return (
    <Paper elevation={3}>
      <Stack
        spacing={3}
        direction="row"
        sx={{ justifyContent: "space-evenly", margin: "20px" }}
      >
        {userInformation.map(({ title, value }) => (
          <Stack key={title} textAlign="center">
            <Typography variant="body1">
              {title}
            </Typography>
            <Typography variant="h6" align="center">
              {value}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
};
