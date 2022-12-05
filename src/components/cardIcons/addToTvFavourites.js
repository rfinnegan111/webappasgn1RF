import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToTvFavouritesIcon = ({ tv }) => {
  const context = useContext(MoviesContext);

  const handleAddToTvFavourites = (e) => {
    e.preventDefault();
    context.addToTvFavourites(tv);
  };

  return (
    <IconButton aria-label="add to favorite tv series" onClick={handleAddToTvFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTvFavouritesIcon;