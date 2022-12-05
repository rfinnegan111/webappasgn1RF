import React, { useContext } from "react";
import TvListPageTemplate from "../components/templateMovieListPage/tv";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getTv } from "../api/tmdb-api";
import Spinner from '../components/spinner';

import RemoveFromTvFavourites from "../components/cardIcons/removeFromTvFavourites";

const FavouriteTvsPage = () => {
  const {tvFavourites: tvIds } = useContext(MoviesContext);

  const favouriteTvQueries = useQueries(
    tvIds.map((tvId) => {
      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTv,
      };
    })
  );

  const isLoading = favouriteTvQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvs = favouriteTvQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
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