import "../css/Result.css";
import { useState } from "react";
import Searchbox from "./Searchbox";
import ResultCard from "./ResultCard";

const Result = () => {
  const [movieName, setMovieName] = useState(location.search.split("?q=")[1]);
  function renderCardLoop() {
    let cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push(<ResultCard key={i} />);
    }
    return cards;
  }
  return (
    <div className="results">
      <Searchbox className="search_container" fun={setMovieName} />
      <h3 className="search_msg">Search Result of {movieName} </h3>
      <div className="result_cards">{renderCardLoop()}</div>
    </div>
  );
};

export default Result;
