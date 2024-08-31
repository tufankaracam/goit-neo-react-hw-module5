import { Link } from 'react-router-dom';
import styles from './movielist.module.css';
import MovieListItem from '../movielistitem/MovieListItem';

export default function MovieList({movies}) {
  return (
    <ul className={styles.container}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieListItem movie={movie}/>
          </li>
        ))}
      </ul>
  )
}
