import React from "react";
import "./MovieList.css";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="Movie" />
          <div
            onClick={() => props.handleFavouritesClick(movie)} //! CallBack
            className="overlay d-flex align-items-centerjustify-content"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
