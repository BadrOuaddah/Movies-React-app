import { useState, useEffect } from "react";
// import { Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import MovieListHeading from "./components/MovieListHeading/MovieListHeading";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest =async() => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=31c10f94";
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  }
  useEffect(() =>{
    getMovieRequest();
  },[]);

  return (
    <div className="App-color">
       <div className="Container movie-app">
       <div className="row">
       <MovieListHeading heading='Movies'/>
       </div>
       <div>
       <SearchBox/>
       </div>
       <div className="row">
        <MovieList movies={movies} />
       </div>
       </div>
    </div>
  );
};

export default App;
