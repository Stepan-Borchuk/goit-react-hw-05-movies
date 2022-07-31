import { useState, useEffect } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList';
import styled from 'styled-components';
import { fetchMovies } from '../service/fetchAPI';

const HomePageRender = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTrandingMovies() {
      try {
        const data = await fetchMovies(`/trending/movie/day`);
        const { results } = data;
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    getTrandingMovies();
  }, []);

  return (
    <>
      <Title>Trending Today</Title>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

const Title = styled.h2`
  margin: ${p => p.theme.space[4]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export default HomePageRender;
