import { Suspense,lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
const Layout = lazy(() => import("./components/layout/Layout"));
const HomePage = lazy(() => import("./page/homepage/HomePage"));
const MoviesPage = lazy(() => import("./page/moviespage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./page/moviedetailspage/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/moviecast/MovieCast"));
const MovieReviews = lazy(() => import("./components/moviereviews/MovieReviews"));




function App() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
