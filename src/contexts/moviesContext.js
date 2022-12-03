import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState( [] )
  const [actorFavourites, setActorFavourites] = useState( [] )
  const [tvFavourites, setTvFavourites] = useState( [] )

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };

  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToActorFavourites = (actor) => {
    let newFavourites = [...actorFavourites];
    if (!actorFavourites.includes(actor.id)) {
      newFavourites.push(actor.id);
    }
    setActorFavourites(newFavourites);
  };

  const removeFromActorFavourites = (actor) => {
    setActorFavourites( actorFavourites.filter(
      (mId) => mId !== actor.id
    ) )
  };

  const addToTvFavourites = (tv) => {
    let newFavourites = [...tvFavourites];
    if (!tvFavourites.includes(tv.id)) {
      newFavourites.push(tv.id);
    }
    setTvFavourites(newFavourites);
  };

  const removeFromTvFavourites = (tv) => {
    setTvFavourites( tvFavourites.filter(
      (mId) => mId !== tv.id
    ) )
  };

  //TO WATCH LIST?
  
 return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        actorFavourites,
        addToActorFavourites,
        removeFromActorFavourites,
        tvFavourites,
        addToTvFavourites,
        removeFromTvFavourites,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;