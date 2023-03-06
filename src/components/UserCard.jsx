import React from "react";
import { Avatar, CardMedia, Grid, Stack } from "@mui/material";
import { PrincipalInformation } from "./PrincipalInformation";
import { Description } from "../containers/Description";

function UserCard(props) {
  const { userState } = props;
  const { avatar_url, login } = userState;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "15px",
      }}
    >
      <Grid item xs={12} md={5} lg={3}>
        <Avatar
          alt={login}
          src={avatar_url}
          sx={{
            width: "100%",
            height: "auto",
          }}
        />
      </Grid>
      <Grid item xs={12} md={7} lg={9}>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            margin: { xs: "0px 0px", md: "5px 30px", lg: "30px" },
          }}
        >
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  );
}

export { UserCard };
