import { Link, useLocation } from 'react-router-dom';
import { Img, List } from './MovieList.styled';

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
                  'https://via.placeholder.com/400x600.png?text=Poster+Not+Available'
                }
                alt={movie.original_title}
              />
            )}
            <h3>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </List>
  );
};
