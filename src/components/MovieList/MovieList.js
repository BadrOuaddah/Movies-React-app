import React from "react";
import "./MovieList.css";


const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="col-sm-3" key={index} >
          <div className="image-container d-flex justify-content-start m-3">
            <img src={movie.Poster} alt="Movie" />
            <div className="overlay d-flex align-items-centerjustify-content"></div>
            <FavouriteComponent/>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
