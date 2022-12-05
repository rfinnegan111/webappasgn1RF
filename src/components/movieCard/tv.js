import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone"
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";

import Avatar from '@mui/material/Avatar';

import { MoviesContext } from "../../contexts/moviesContext";


export default function TvCard({ tv, action }) {
  const { tvFavourites, addToTvFavourites } = useContext(MoviesContext);
 
   if (tvFavourites.find((id) => id === tv.id)) {
     tv.tvFavourite = true;
   } else {
     tv.tvFavourite = false
   }
 
   const handleAddToTvFavourite = (e) => {
     e.preventDefault();
     addToTvFavourites(tv);
   };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          tv.tvFavourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {tv.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          tv.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={10}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {"First Aired: \n'"}{tv.first_air_date}{" "}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {" Popularity Score: "} {tv.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(tv)}
        <Link to={`/tvs/${tv.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}