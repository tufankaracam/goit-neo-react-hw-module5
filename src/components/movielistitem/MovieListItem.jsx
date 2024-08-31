import { Link } from "react-router-dom";
import styles from "./movielistitem.module.css";
import { imageLink } from "../../api/movie";

export default function MovieListItem({ movie }) {
  return (
    <Link to={`/movies/${movie?.id}`}>
      <div className={styles.card}>
        <div className={styles.imagecontainer}>
          <img
            className={styles.image}
            src={
              movie?.poster_path
                ? `${imageLink}${movie?.poster_path}`
                : "https://placehold.co/200x200"
            }
            alt={movie?.title}
          />
        </div>
        <div className={styles.content}>{movie?.title}</div>
      </div>
    </Link>
  );
}
