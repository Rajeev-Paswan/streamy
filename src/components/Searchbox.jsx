import "../css/Searchbox.css"

const Searchbox = () => {
  return (
    <form className="search_container">
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
