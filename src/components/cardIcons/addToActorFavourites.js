import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToActorFavouritesIcon = ({ actor }) => {
  const context = useContext(MoviesContext);

  const handleAddToActorFavourites = (e) => {
    e.preventDefault();
    context.addToActorFavourites(actor);
  };

  return (
    <IconButton aria-label="add to favorite actors" onClick={handleAddToActorFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToActorFavouritesIcon;