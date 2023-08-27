import { createContext, useState, useEffect } from "react";

const searchQ = "Thor";
const API_KEY = `88b693131fd0d28f6ad3a9be6b2e10b8`;
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQ}`;

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchData, setSearchData] = useState([]);
  const getMovies = () => {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => setSearchData(data.results))
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SearchContext.Provider value={searchData}>{children}</SearchContext.Provider>
  );
}

export default SearchContext;
