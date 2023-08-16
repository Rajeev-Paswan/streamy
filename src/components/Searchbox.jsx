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
          required
          autoComplete="off"
        />
        <button id="search_btn flex" type="submit">
          <span className="material-icons-round flex">search</span>
        </button>
      </div>
    </form>
  );
};

export default Searchbox;
