import "../css/Result.css";
import { useContext, useEffect } from "react";
import Searchbox from "./Searchbox";
import ResultCard from "./ResultCard";
import SearchContext from "../context/SearchContext";

const Result = () => {
  const { searchData } = useContext(SearchContext);

  return (
    <div className="results">
      <Searchbox className="search_container" />
      <span className="search_msg">
        Search Result of{" "}
        <strong>
          {location.pathname.split("search/")[1].replaceAll("-", " ")}
        </strong>
      </span>
      <div className="result_cards">
        {searchData.map((card) => (
          <ResultCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Result;
