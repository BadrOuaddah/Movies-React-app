import { useState, useEffect } from "react";
// import { Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import MovieListHeading from "./components/MovieListHeading/MovieListHeading";
import SearchBox from "./components/SearchBox/SearchBox";
import AddFavourites from "./components/AddFavourites/AddFavourites.js";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=31c10f94`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="App-color">
      <div className="Container movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row">
          <MovieList movies={movies} favouriteComponent={AddFavourites}/>
        </div>
      </div>
    </div>
  );
};

export default App;
