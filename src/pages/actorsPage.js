import React from "react";
import { getActors } from "../api/tmdb-api";
import ActorListPageTemplate from "../components/templateMovieListPage/actor";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

import AddToActorFavouritesIcon from '../components/cardIcons/addToActorFavourites'

const ActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('actors', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const actorFavourites = actors.filter(m => m.actorFavourite)
  localStorage.setItem('actorFavourites', JSON.stringify(actorFavourites))
  const addToActorFavourites = (actorId) => true 

  return (
    <ActorListPageTemplate
      title="Popular Actors"
      actors={actors}
      action={(actor) => {
        return <AddToActorFavouritesIcon actor={actor} />
      }}
    />
);
};

export default ActorsPage;