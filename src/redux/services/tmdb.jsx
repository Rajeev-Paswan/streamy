// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const tmdb = createApi({
  reducerPath: 'tmdb',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    searchMovies: builder.query({
      query: (paramsQuery) => paramsQuery.length > 0 ? `search/movie?query=${paramsQuery}&api_key=88b693131fd0d28f6ad3a9be6b2e10b8` : null,
    }),
    trendingMovies: builder.query({
      query: () => `trending/movie/week?api_key=88b693131fd0d28f6ad3a9be6b2e10b8`,
    }),
    movieDetails: builder.query({
      query: (id) => `movie/${id}?api_key=88b693131fd0d28f6ad3a9be6b2e10b8`,
    }),
    trendingSeries: builder.query({
      query: () => `tv/popular?api_key=88b693131fd0d28f6ad3a9be6b2e10b8`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSearchMoviesQuery, useTrendingMoviesQuery, useMovieDetailsQuery, useTrendingSeriesQuery } = tmdb