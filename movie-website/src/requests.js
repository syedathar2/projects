//import React from 'react';

const API_KEY = "f37cc8b5c0ad74b2e37000cfff3642d1";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  fetchTvAdventure: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetchtvAnimation: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  fetchTvComedy: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchTvDrama: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchTvCrime: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  fetchTvFamily: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
  fetchTvScifi: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  fetchTvMystery: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
};

export default requests;
