import MovieItem from './MovieItem';
import PropTypes from 'prop-types';
import { List } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, original_title, poster_path }) => {
        return (
          <MovieItem
            key={id}
            title={original_title}
            id={id}
            path={poster_path}
          />
        );
      })}
    </List>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
