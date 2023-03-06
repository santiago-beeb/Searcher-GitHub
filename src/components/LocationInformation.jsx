import React from "react";
import { Grid, Link, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";

export const LocationInformation = (props) => {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "15px",
      }}
    >
      <Grid item xs={12} lg={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          <Typography>{location ? location : "Not Avaible"}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
            <Typography>
              {twitter_username ? `@${twitter_username}` : "Not Avaible"}
            </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon />
          <Typography>{blog ? blog : "Not Avaible"}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          <Typography>{company ? company : "Not Avaible"}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};
