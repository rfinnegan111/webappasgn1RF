import React, { useState } from "react";
import Header from "../headerMovieList/actor";
import ActorList from "../movieList/actor";
import Grid from "@mui/material/Grid";

function ActorListPageTemplate({ actors, title, action }) {

  let displayedActors= actors

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList action={action} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;