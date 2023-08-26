import { getMovieCast } from 'Api';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Img, List, ListItem, NoCast } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoader, setIsLoader] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    const fetchMovieCast = async movieId => {
      try {
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoader(false);
        setIsContentLoaded(true);
      }
    };
    fetchMovieCast(movieId);
  }, [movieId]);

  return (
    <>
      {isLoader && <Loader />}
      {isContentLoaded && cast.length === 0 ? (
        <NoCast>Sorry, Cast is not available for this movie</NoCast>
      ) : (
        <List>
          {cast.map(actor => (
            <ListItem key={actor.cast_id}>
              {actor.profile_path ? (
                <Img
                  src={`https://image.tmdb.org/t/p/w400/${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <Img
                  src={
                    'https://via.placeholder.com/400x600.png?text=Poster+Not+Available'
                  }
                  alt={actor.name}
                />
              )}
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default Cast;
