import { useEffect, useState } from 'react';
import { getMoviesByName } from 'Api';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Button, Form, Input } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFound, setIsFound] = useState(true);

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      setIsLoader(true);
      try {
        const { results } = await getMoviesByName(query);
        if (results.length === 0) {
          setIsFound(false);
          setMovies([]);
        } else {
          setIsFound(true);
          setMovies(results);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoader(false);
      }
    };
    getMovie();
  }, [searchParams]);

  // const handleSubmit = query => {
  //   setSearchParams({ query });
  // };

  const updateQueryString = e => {
    const queryValue = e.target.value;
    if (queryValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ type: queryValue });
  };

  return (
    <section>
      <Form>
        <Input
          type="text"
          name="query"
          placeholder="Search movies"
          onChange={updateQueryString}
        />
        <Button type="submit">Search</Button>
      </Form>
      {isLoader && <Loader />}
      {isFound ? (
        <MovieList movies={movies} />
      ) : (
        <p>Sorry, we can't find any movie with that title</p>
      )}
    </section>
  );
};

export default Movies;
