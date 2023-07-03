import React from "react";
import "./MovieList.css";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} >
          <div className="col d-flex justify-content-start m-3">
            <img src={movie.Poster} alt="Movie" />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
