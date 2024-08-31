import { useEffect } from "react";
import styles from "./homepage.module.css";
import { getTrendingMovies } from "../../api/movie";
import { useState } from "react";
import { Link } from "react-router-dom";
import MovieList from "../../components/movielist/MovieList";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const loadTrendingMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies.results);
      } catch (e) {
        alert("Ooops! Somethings gone wrong!");
      }
    };

    loadTrendingMovies();
  }, []);
  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
}
