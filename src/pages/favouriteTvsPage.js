import React, { useContext } from "react";
import TvListPageTemplate from "../components/templateMovieListPage/tv";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getTv } from "../api/tmdb-api";
import Spinner from '../components/spinner';

import RemoveFromTvFavourites from "../components/cardIcons/removeFromTvFavourites";

const FavouriteTvsPage = () => {
  const {tvFavourites: tvIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favouriteTvQueries = useQueries(
    tvIds.map((tvId) => {
      return {
        queryKey: ["tv series", { id: tvId }],
        queryFn: getTv,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvs = favouriteTvQueries.map((q) => {
    q.tvFavourite = q.tvFavourite.map(g => g.id)
    return q.data
  });

  const toDo = () => true;


  return (
    <TvListPageTemplate
      title="Favourite Tv Series"
      tvs={tvs}
      action={(tv) => {
        return (
          <>
            <RemoveFromTvFavourites tv={tv} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTvsPage;