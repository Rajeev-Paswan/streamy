import "../css/Result.css";
import { useContext, useEffect } from "react";
import Searchbox from "./Searchbox";
import ResultCard from "./ResultCard";
import SearchContext from "../context/SearchContext";


const Result = () => {
  const {searchData} = useContext(SearchContext);
  // console.log(searchData)
  return (
    <div className="results">
      <Searchbox className="search_container" />
      <h3 className="search_msg">Search Result of MovieName </h3>
      <div className="result_cards">{
        searchData.map( card => <ResultCard key={card.id} {...card} /> )
      }</div>
    </div>
  );
};

export default Result;
