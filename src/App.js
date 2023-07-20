import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import MovieListHeading from "./components/MovieListHeading/MovieListHeading";
import SearchBox from "./components/SearchBox/SearchBox";
import AddFavourites from "./components/AddFavourites/AddFavourites.js";
import RemoveFavourites from "./components/RemoveFavourites/RemoveFavourites";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
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

  const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

  const AddFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const RemoveFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
    (favourites) => favourites.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className="App-color">
      <div className="Container movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="🎥 Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row">
          <MovieList
            movies={movies}
            handleFavouritesClick={AddFavouriteMovie}
            favouriteComponent={AddFavourites}
          />
        </div>
        <div>
          <MovieListHeading heading="❤️ Favourites" />
        <div className="row d-flex align-items-center mt-4 mb-4">
          <div className="row">
            <MovieList
              movies={favourites}
              handleFavouritesClick={RemoveFavouriteMovie}
              favouriteComponent={RemoveFavourites}
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;
