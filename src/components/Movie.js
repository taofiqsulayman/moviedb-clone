import React from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title, poster_path, overview, favourite, release_date}) => (
  <div className="movie">
    <div className="movie-title">
      <h5>{title}</h5>
    </div>
    <img src={IMG_API + poster_path} alt={title} />
    <div className="movie-info">
      <h5>{release_date}</h5>
      <a>
      <FavoriteBorderIcon />
      </a>
    </div>
  </div>
);
 

export default Movie;