import React, { useState, useEffect } from 'react';
import ResultCard from '../components/ResultCard';
import { useTrendingMoviesQuery } from '../redux/services/tmdb';

function Movies() {
  const { data, isLoading, isError } = useTrendingMoviesQuery();

  return (
    <div className="results">
      <h2>Trending Movies</h2>
      <div className="result_cards">
        {data?.results?.map((movie) => (
          <ResultCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;