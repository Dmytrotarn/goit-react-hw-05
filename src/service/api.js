import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzk5NDdjZDQ0MWNkYzg1MmZmMmVkYzQwOGJkOWY3MiIsIm5iZiI6MTczODI2Njk5OS4zNDUsInN1YiI6IjY3OWJkOTc3ODdlMDgwNGVjM2JkOTExMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTDNNT8jC5lCPz1FByjzJKdfbQ8Vrl2i31fY5ZZ16BM";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    accept: "application/json",
  },
};

export const getTrendingMovie = async () => {
  const { data } = await axios.get("/trending/movie/day", options);
  return data;
};

export const getSearchMovie = async (query) => {
  const { data } = await axios.get(`/search/movie?query=${query}`, options);
  return data;
};

export const getDetailsMovie = async (id) => {
  const { data } = await axios.get(`/movie/${id}`, options);
  return data;
};

export const getCreditsMovie = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`, options);
  return data;
};

export const getReviewsMovie = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`, options);
  return data;
};
