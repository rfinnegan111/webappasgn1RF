import React, { useContext } from "react";
import ActorListPageTemplate from "../components/templateMovieListPage/actor";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from '../components/spinner';

import RemoveFromActorFavourites from "../components/cardIcons/removeFromActorFavourites";

const FavouriteActorsPage = () => {
  const {actorFavourites: actorIds } = useContext(MoviesContext);

  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", { id: actorId }],
        queryFn: getActor,
      };
    })
  );

  const isLoading = favouriteActorQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const actors = favouriteActorQueries.map((q) => {
    return q.data
  });

  const toDo = () => true;


  return (
    <ActorListPageTemplate
      title="Favourite Actors"
      actors={actors}
      action={(actor) => {
        return (
          <>
            <RemoveFromActorFavourites actor={actor} />
          </>
        );
      }}
    />
  );
};

export default FavouriteActorsPage;