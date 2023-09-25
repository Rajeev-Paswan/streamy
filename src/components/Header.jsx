import "../css/Header.css";

function Header() {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <a href="/streamy/">
          <div className="site_name">Streamy</div>
        </a>
        <div className="nav_items">
          <span className="item">Home</span>
          <span className="item">Action</span>
          <span className="item">Hindi</span>
          <span className="item">Sci-Fi</span>
          <span className="item">Anime</span>
        </div>
        <form
          className="nav_bar search_container flex"
          action="/search"
          method="get"
        >
          <div className="search_child_container flex flex-aln-center">
            <input
              type="text"
              id="search"
              placeholder="Search your movie/show/anime"
              name="q"
              autoComplete="off"
              required
            />
            <button id="search_btn flex" type="submit">
              <span className="material-icons-round flex">search</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Header;
