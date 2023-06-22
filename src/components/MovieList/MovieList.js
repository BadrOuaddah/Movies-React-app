import React from 'react';
import './MovieList.css';

const MovieList = (props) =>{
    return(
        <div>
            {props.movies.map((movie, index)=> <div>
                <img src={movie.Poster} alt='movie'/>
            </div>)}
        </div>
    )
}

export default MovieList;