import React from "react";
import { getUpcoming } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

import WatchListPageTemplate from "../components/templateMovieListPage/upcoming";

import AddToWatchListIcon from "../components/cardIcons/addToWatchList";

const UpcomingPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcoming)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const watchList = movies.filter(m => m.watch)
  localStorage.setItem('watchList', JSON.stringify(watchList))
  const addToWatchList = (movieId) => true 

  return (
    <WatchListPageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToWatchListIcon movie={movie} />
      }}
    />
);
};

export default UpcomingPage;