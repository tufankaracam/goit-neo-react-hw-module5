import { useEffect } from "react";
import styles from "./moviecast.module.css";
import { getCast, imageLink } from "../../api/movie";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import Message from "../message/Message";

export default function MovieCast() {
  const [movieId] = useOutletContext();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getCastDetails = async () => {
      try {
        const result = await getCast(movieId);
        setCasts(result.cast);
      } catch (e) {
        console.log(e);
      }
    };
    getCastDetails();
  }, [movieId]);

  return casts.length > 0 ? (
    <ul className={styles.container}>
      {casts?.map((cast) => (
        <li key={cast.id} className={styles.card}>
          <img
            src={
              cast.profile_path
                ? `${imageLink}/${cast.profile_path}`
                : `https://placehold.co/200x200`
            }
            alt=""
            className={styles.image}
          />
          <div className={styles.text}>Name : {cast.name}</div>
          <div className={styles.text}>Char : {cast.character}</div>
        </li>
      ))}
    </ul>
  ) : (
    <Message text={"Any cast info not found"} />
  );
}
