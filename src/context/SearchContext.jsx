/* ============= SEARCH API ============= */

import { createContext, useState, useEffect } from "react";

// creating context
const SearchContext = createContext();

// context provider function
export function SearchProvider({ children }) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;

  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]); // for api data

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  // fetching movies
  const getMovies = () => {
    fetch(`${API_URL}&query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchData(data.results);
      });
  };

  useEffect(() => {
    getMovies();
  }, [query]);

  return (
    <SearchContext.Provider
      value={{ query, searchData, getMovies, updateQuery }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
