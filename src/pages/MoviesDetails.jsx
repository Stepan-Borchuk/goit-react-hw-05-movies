import { MovieClick } from '../components/MoviesList/MovieClick';
import { Suspense, lazy } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { GoBack, AdditionalInfo, AdditionalLink } from './MovieDetails.styled';

const CastPage = lazy(() => import('./CastPage'));
const ReviewsPage = lazy(() => import('./ReviewsPage'));

export const MovieDetailsRender = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const goBackPage = location.state?.from ?? '/';

  return (
    movieId && (
      <>
        <GoBack to={goBackPage}>Go back</GoBack>
        <MovieClick />
        <AdditionalInfo>
          <h3>Additional information</h3>
          <AdditionalLink to="cast">Cast</AdditionalLink>
          <AdditionalLink to="reviews">Reviews</AdditionalLink>
        </AdditionalInfo>{' '}
        <Suspense fallback={<>Loading..</>}>
          <Routes>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Routes>
        </Suspense>
      </>
    )
  );
};

export default MovieDetailsRender;
