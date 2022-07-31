import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchMovies } from '../service/fetchAPI';
import Reviews from '../components/movieDetails/Reviews';

export default function ReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const getCastInfo = async id => {
      try {
        const data = await fetchMovies(`/movie/${movieId}/reviews`);
        const result = data.results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));
        if (!result.length) {
          throw new Error('');
        }
        setReviews(result);
      } catch (error) {
        toast.error('No reviews found');
      }
    };
    getCastInfo(movieId);
  }, [movieId]);

  if (Object.keys(reviews).length > 0)
    return (
      <>
        <Reviews reviews={reviews} />
      </>
    );
}
