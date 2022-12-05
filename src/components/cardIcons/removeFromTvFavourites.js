import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromTvFavouritesIcon = ({ tv }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromTvFavourites = (e) => {
    e.preventDefault();
    context.removeFromTvFavourites(tv);
  };
  return (
    <IconButton
      aria-label="remove from favorite tv series"
      onClick={handleRemoveFromTvFavourites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTvFavouritesIcon;