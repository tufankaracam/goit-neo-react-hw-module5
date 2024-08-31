import { useState } from "react";
import styles from "./moviespage.module.css";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import MovieList from "../../components/movielist/MovieList";
import { useRef } from "react";
import { searchMovies } from "../../api/movie";
import Pagination from "../../components/pagination/Pagination";

export default function MoviesPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [foundMovies, setFoundMovies] = useState([]);
  let [page, setPage] = useState(1);
  let [totalPages, setTotalPages] = useState(null);
  let [totalResults, setTotalResults] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        if (searchParams.get("query")) {
          const data = await searchMovies(searchParams.get("query"), searchParams.get("page") || 1);
          setTotalResults(data.total_results);
          setTotalPages(data.total_pages);
          setPage(data.page);
          setFoundMovies(data.results);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getMovies();
  }, [searchParams.toString()]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.elements.text.value.length > 0) {
      setSearchParams({ query: form.elements.text.value, page:1 });
      form.reset();
    }
  };

  const handlePage = (page) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page',page);
    setSearchParams(newParams);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input className={styles.input} type="text" name="text" autoComplete="off" />
        <input className={styles.button} type="submit" value="Search" />
      </form>

      {foundMovies.length > 0 && <MovieList movies={foundMovies} />}
      {foundMovies.length > 0 && (
        <Pagination page={page} totalPage={totalPages} setPage={handlePage} />
      )}
    </div>
  );
}
