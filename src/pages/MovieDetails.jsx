import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getMoviesById } from 'Api';
import { Section, Image, LinkButton, List } from './MovieDetails.styled';
import { useRef } from 'react';
import { Suspense } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setIsLoader(true);
    const fetchTrendingMovies = async movieId => {
      try {
        const results = await getMoviesById(movieId);
        setMovieInfo(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoader(false);
      }
    };
    fetchTrendingMovies(movieId);
  }, [movieId]);

  const { poster_path, original_title, vote_average, overview, genres } =
    movieInfo;

  const movieImg = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'This movie has not been rated yet.';

  return (
    <>
      <LinkButton to={backLinkHref.current}>
        <button type="button">Go Back</button>
      </LinkButton>
      <Section>
        {isLoader && <Loader />}
        <Image src={movieImg} alt={original_title} />
        <div>
          <h2>{original_title}</h2>
          <p>User Score:{userScore}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres &&
              genres.length > 0 &&
              genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </Section>
      <List>
        <h3>Additional information</h3>
        <li>
          <LinkButton to="cast">
            <button type="button">Cast</button>
          </LinkButton>
        </li>
        <li>
          <LinkButton to="reviews">
            <button type="button">Reviews</button>
          </LinkButton>
        </li>
      </List>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
