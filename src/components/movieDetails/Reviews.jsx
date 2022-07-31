import PropTypes from 'prop-types';

function Reviews({ reviews }) {
  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>
              <b>{author}</b>
            </p>
            <p>
              <i>{content}</i>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
