import MoviesList from "./components/MoviesList";
import "./App.css";
import { useState } from "react";


const App = () => {
const [movies, setMovies] = useState([]);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () => {
  try {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    const transformedMovies = data.results.map((movieData) => {
      return{
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setIsLoading(false);
    setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
  };




  let content;

  if (error) {
    content = <p>{error}</p>;
  } else if (isLoading) {
    content = "Loading"
  } 
   else {
    content = <MoviesList movies={movies} />;
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler} disabled={isLoading} >Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
};

export default App;
