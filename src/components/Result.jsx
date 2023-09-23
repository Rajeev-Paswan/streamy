import "../css/Result.css";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Searchbox from "./Searchbox";
import ResultCard from "./ResultCard";
import { useSearchMoviesQuery } from "../redux/services/tmdb";

const Result = () => {
  const { query: paramsQuery } = useParams(); // stores query to paramsQuery
  const {data = [], isLoading, isError} = useSearchMoviesQuery(paramsQuery);

  return (
    <div className="results">
      <Searchbox className="search_container" />
      <span className="search_msg">
        Search Result of{" "}
        <strong>
          {location.pathname.split("search/")[1]?.replaceAll("-", " ")}
        </strong>
      </span>
      <div className="result_cards">
        {data?.results?.map((card) => (
          <ResultCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Result;
