import React, { useState, useEffect } from "react";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGI2OTMxMzFmZDBkMjhmNmFkM2E5YmU2YjJlMTBiOCIsInN1YiI6IjY0ZTQ4ODZlMDZmOTg0MDE0ZTY2OWM1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bloO_eEqAWsmngjvsdHj6A3Cd6RtSVjzpOByW7ycJUA&query=cars";

const AppContext = React.createContext();

const MovieData = ({ children }) => {
  const [movie, setMovie] = useState([]);
  // data from api
  const getMovies = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data.results);
        console.log(data.results);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <AppContext.Provider value={movie}>{children}</AppContext.Provider>;
};

export { AppContext, MovieData };
