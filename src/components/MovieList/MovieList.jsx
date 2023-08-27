import { Link, useLocation } from 'react-router-dom';
import { Img, List } from './MovieList.styled';


const baseUrl = 'https://image.tmdb.org/t/p/w500/';

const DEFAULT_MOVIE_POSTER =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';


export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.backdrop_path ? (
              <Img
                src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                alt={movie.original_title}
              />
            ) : (
              <Img
             src={
                movie.poster_path
                  ? baseUrl + movie.poster_path
                  : DEFAULT_MOVIE_POSTER
              }
              alt={movie.title}
              />
            )}
            <h3>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </List>
  );
};
