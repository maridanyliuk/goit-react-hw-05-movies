import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'Api';
import { Loader } from 'components/Loader/Loader';
import { NoReviews, List } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoader, setIsLoader] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    const fetchMovieReviews = async movieId => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoader(false);
        setIsContentLoaded(true);
      }
    };
    fetchMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {isLoader && <Loader />}
      {isContentLoaded && reviews.length === 0 ? (
        <NoReviews>Sorry, there is no review for this movie</NoReviews>
      ) : (
        <List>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </List>
      )}
    </>
  );
};

export default Reviews;
