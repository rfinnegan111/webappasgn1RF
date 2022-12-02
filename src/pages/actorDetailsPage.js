import React from "react";
import { useParams } from 'react-router-dom';
import  ActorDetails from "../components/movieDetails/actor";
import TemplateActorPage from "../components/templateMoviePage/actor";
import useActor from "../hooks/useActor";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ActorDetailsPage = (props) => {
  const { id } = useParams();

  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <TemplateActorPage actor={actor}>
            <ActorDetails actor={actor} />
          </TemplateActorPage>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;