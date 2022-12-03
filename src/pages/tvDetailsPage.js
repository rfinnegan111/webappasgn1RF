import React from "react";
import { useParams } from 'react-router-dom';
import  TvDetails from "../components/movieDetails/tv";
import TemplateTvPage from "../components/templateMoviePage/tv";
import useTv from "../hooks/useTv";
import { getTv } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TvDetailsPage = (props) => {
  const { id } = useParams();

  const { data: tv, error, isLoading, isError } = useQuery(
    ["tv series", { id: id }],
    getTv
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tv ? (
        <>
          <TemplateTvPage tv={tv}>
            <TvDetails tv={tv} />
          </TemplateTvPage>
        </>
      ) : (
        <p>Waiting for tv series details</p>
      )}
    </>
  );
};

export default TvDetailsPage;