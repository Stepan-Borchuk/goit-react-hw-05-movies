import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { fetchMovies } from '../../service/fetchAPI';
import { MovieContainer } from './MovieClick.styled';

export const MovieClick = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovies(movieId) {
      try {
        const data = await fetchMovies(`/movie/${movieId}`);

        setMovie(data);
      } catch (error) {
        toast.error('Page not found', { duration: 3000 });
      }
    }
    getMovies(movieId);
  }, [movieId]);

  if (Object.keys(movie).length > 0) {
    const { title, vote_average, overview, genres, poster_path } = movie;
    const userScore = vote_average * 10;
    const movieGenres = genres.map(genre => genre.name).join(', ');

    return (
      <MovieContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <h2>{title}</h2>
        <p>
          User score: <span>{userScore}%</span>
        </p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{movieGenres}</p>
      </MovieContainer>
    );
  }
};

MovieClick.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
  genres: PropTypes.string,
};
