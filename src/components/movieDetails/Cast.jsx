import PropTypes from 'prop-types';
import { CastList } from './cast.styled';
import defaultImg from '../images/defaultImg.png';

function Cast({ cast }) {
  return (
    <>
      {
        <CastList>
          {cast.map(({ id, name, profile_path }) => {
            return (
              <li key={id}>
                <img
                  width={180}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/original${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                />
                <p>{name}</p>
              </li>
            );
          })}
        </CastList>
      }
    </>
  );
}

export default Cast;

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};
