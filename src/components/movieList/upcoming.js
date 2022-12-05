import React from "react";
import Grid from "@mui/material/Grid";
import UpcomingCard from "../movieCard/upcoming";

const WatchList = ( {movies, action }) => {
  let upcomingCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <UpcomingCard key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return upcomingCards;
};

export default WatchList;