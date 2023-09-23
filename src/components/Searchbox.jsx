import "../css/Searchbox.css";
import { useNavigate } from "react-router-dom";

const Searchbox = (props) => {
  const navigator = useNavigate();
  function updateNav(e) {
    e.preventDefault();
    navigator("/streamy/search/" + e.target.search.value.replaceAll(" ", "-"));
  }

  return (
    <form className={props.className} onSubmit={updateNav}>
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
