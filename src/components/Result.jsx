import "../css/Result.css";
import Searchbox from "./Searchbox";

const Result = () => {
  return (
    <div className="results">

      <Searchbox className="search_container"/>
      <h3 className="search_msg">Search Result of movie name</h3>
      
    </div>
  );
};

export default Result;
