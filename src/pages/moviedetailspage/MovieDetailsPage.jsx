import { useEffect } from "react";
import styles from "./moviedetailspage.module.css";
import { getMovieDetails, imageLink } from "../../api/movie";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useState } from "react";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const getDetails = async () => {
      try {
        if (movieId.length > 0) {
          const result = await getMovieDetails(movieId);
          setDetails(result);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getDetails();
  }, [movieId]);
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => {
          navigate(-1);
        }}
      >
        {"<- Go Back"}
      </button>
      <div>
        <div className={styles.card}>
          <div className={styles.imagecontainer}>
            <img
              className={styles.image}
              src={
                details?.poster_path
                  ? `${imageLink}${details?.poster_path}`
                  : `https://placehold.co/200x200`
              }
              alt=""
            />
          </div>
          <div className={styles.infos}>
            <h2>{details?.title}</h2>
            <p>
              User Score :{" "}
              {details?.vote_average &&
                `${parseInt(details?.vote_average * 10)}%`}
            </p>
            <h3>Overview</h3>
            <p>{details?.overview}</p>
            <h4>Genres</h4>
            <p>{details?.genres?.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
        <div className={styles.additional}>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Outlet context={[movieId]} />
        </div>
      </div>
    </div>
  );
}
