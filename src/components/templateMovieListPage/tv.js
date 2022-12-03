import React, { useState } from "react";
import Header from "../headerMovieList/tv";
import TvList from "../movieList/tv";
import Grid from "@mui/material/Grid";

function TvListPageTemplate({ tvs, title, action }) {

  let displayedTvs= tvs

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <TvList action={action} tvs={displayedTvs}></TvList>
      </Grid>
    </Grid>
  );
}
export default TvListPageTemplate;