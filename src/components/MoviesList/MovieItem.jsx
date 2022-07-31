import { MovieLink, MovieImg, ItemMovie } from './MovieItem.styled';
import PropTypes from 'prop-types';

const imagesBaseUrl = 'https://image.tmdb.org/t/p/w500';
const defaultImg =
  'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-fashion-movie-film-theme-background-poster-image_196478.jpg';

const MovieItem = ({ id, title, path }) => {
  const poster = `${imagesBaseUrl}${path}`;

  return (
    <>
      <ItemMovie>
        <MovieLink to={`/movies/${id}`}>
          <h3>{title}</h3>
          <MovieImg src={path ? poster : defaultImg} alt={title} />
        </MovieLink>
      </ItemMovie>
    </>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
