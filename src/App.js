import React, { useEffect, useState } from "react";
// 371f63cb
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const API_URL = "https://www.omdbapi.com/?apikey=371f63cb";

const App = () => {
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search)
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>Movify</h1>

      <div className="search">
        <input
          placeholder="Search Your favourite Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="SearchIcon" onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard Movie={movie}/>
      ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
