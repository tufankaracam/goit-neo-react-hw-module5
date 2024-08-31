import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.Authorization = `Bearer ${import.meta.env.VITE_API_KEY}`;
axios.defaults.params = { language: "en-US", include_adult: true };

export const imageLink = "https://image.tmdb.org/t/p/w500/";

export const getTrendingMovies = async () => {
  const result = await axios.get("/trending/movie/day");
  return result.data;
};

export const searchMovies = async (query, page) => {
  const result = await axios.get(`/search/movie`, { params: { query, page } });
  return result.data;
};

export const getMovieDetails = async (id) => {
  const result = await axios.get(`/movie/${id}`);
  return result.data;
};

export const getCast = async (id) => {
  const result = await axios.get(`/movie/${id}/credits`);
  return result.data;
};

export const getReviews = async (id) => {
  const result = await axios.get(`/movie/${id}/reviews`);
  return result.data;
};
