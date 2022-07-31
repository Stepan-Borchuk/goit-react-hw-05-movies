import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { SearchForm, Input, SearchBtn } from '../pages/Movies.styled';
import { fetchMovies } from '../service/fetchAPI';
import { Formik } from 'formik';

const MoviesPageRender = () => {
  const [movies, setMovies] = useState([]);
  const [searhParams, setSearchParams] = useSearchParams();
  const query = searhParams.get('query') ?? '';

  useEffect(() => {
    async function getMovies(query) {
      try {
        const data = await fetchMovies(`/search/movie?query=${query}`);
        if (!data.results.length) {
          throw new Error('No results found');
        }
        setMovies(data.results);
      } catch (error) {
        console.log(error);
        toast.error('No results found', { duration: 3000 });
      }
    }

    if (query === '') {
      return;
    }

    getMovies(query);
  }, [query]);

  return (
    <>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={({ query }, { resetForm }) => {
          setSearchParams({ query });
          resetForm();
        }}
      >
        <SearchForm>
          <Input name="query" type="text" placeholder="Search movies" />
          <SearchBtn type="submit">Search</SearchBtn>
        </SearchForm>
      </Formik>
      {Object.keys(movies).length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPageRender;
