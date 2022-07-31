import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense } from 'react';

// import MovieDetailsRender from '../pages/MoviesDetails';
import SharedLayout from './sharedLayout/SharedLayout';

const HomePageRender = lazy(() => import('../pages/Home'));
const MoviesPageRender = lazy(() => import('../pages/Movies'));

const MovieDetailsRender = lazy(() => import('../pages/MoviesDetails'));

export const App = () => {
  return (
    <>
      <SharedLayout />
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/" element={<HomePageRender />} />
          <Route path="/movies" element={<MoviesPageRender />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsRender />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
