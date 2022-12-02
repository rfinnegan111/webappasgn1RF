import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromActorFavouritesIcon = ({ actor }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromActorFavourites = (e) => {
    e.preventDefault();
    context.removeFromActorFavourites(actor);
  };
  return (
    <IconButton
      aria-label="remove from favorite actors"
      onClick={handleRemoveFromActorFavourites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromActorFavouritesIcon;