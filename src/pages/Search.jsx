import Header from "../components/Header";
import Result from "../components/Result";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import SearchContext from "../context/SearchContext";

const Search = () => {
  const { query: paramsQuery } = useParams(); // stores params query into paramsQuery
  const { getMovies, updateQuery } = useContext(SearchContext);

  useEffect(() => {
    if(paramsQuery === undefined || "") {
      alert("return to homepage and enter a movie name");
    } else {
      updateQuery(paramsQuery);
      console.log("updated query: " + paramsQuery);
      getMovies(); // fetch movies from updated query
      console.log("Search data is updated")
    } 
  }, [paramsQuery]);

  return (
    <div>
      <Header />
      <Result />
      <Footer />
    </div>
  );
};

export default Search;
