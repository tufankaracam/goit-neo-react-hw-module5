import { useEffect } from "react";
import styles from "./moviereviews.module.css";
import { getReviews } from "../../api/movie";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import Message from "../message/Message";

export default function MovieReviews() {
  const [movieId] = useOutletContext();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviewDetails = async () => {
      try {
        const result = await getReviews(movieId);
        setReviews(result.results);
      } catch (e) {
        console.log(e);
      }
    };
    getReviewDetails();
  }, [movieId]);
  return reviews.length > 0 ?
  (<ul className={styles.container}>
    {reviews?.map((review) => (
      <li className={styles.card} key={review.id}>
        <h4>Author : {review.author}</h4>
        <p>{review.content}</p>
      </li>
    ))}
  </ul>) : (<Message text={'Any review info not found'} />)
}
