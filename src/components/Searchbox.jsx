import "../css/Searchbox.css";
import { useNavigate } from "react-router-dom";

const Searchbox = (props) => {
  const navigator = useNavigate();
  function getResults(e) {
    e.preventDefault();
    navigator("/search?q=" + e.target.search.value);
    props.fun && props.fun((name) => (name = location.search.split("?q=")[1]));
  }

  return (
    <form className={props.className} onSubmit={getResults}>
      <div className="search_child_container">
        <input
          type="text"
          id="search"
          placeholder="Search your movie/show/anime"
          name="q"
          autoComplete="off"
          required
        />
        <button id="search_btn" type="submit">
          <span className="material-icons-round">search</span>
        </button>
      </div>
    </form>
  );
};

export default Searchbox;
