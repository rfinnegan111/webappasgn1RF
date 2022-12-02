import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from "@mui/icons-material/Movie";
import StarRateIcon from "@mui/icons-material/StarRate";
//import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";

import Avatar from '@mui/material/Avatar';

import { MoviesContext } from "../../contexts/moviesContext";


export default function ActorCard({ actor, action }) {
  const { actorFavourites, addToActorFavourites } = useContext(MoviesContext);
 
   if (actorFavourites.find((id) => id === actor.id)) {
     actor.actorFavourite = true;
   } else {
     actor.actorFavourite = false
   }
 
   const handleAddToActorFavourite = (e) => {
     e.preventDefault();
     addToActorFavourites(actor);
   };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          actor.actorFavourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={10}>
            <Typography variant="h6" component="p">
              <MovieIcon fontSize="small" />
              {"Starred in: \n'"}{actor.known_for[0].title ? actor.known_for[0].title : actor.known_for[0].name}{"'"}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {" Popularity Score: "} {actor.popularity}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(actor)}
        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}