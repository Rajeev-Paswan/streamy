import "../css/Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <ul className="navbar">
          <li>Home</li>
          <li>Genre</li>
          <li>Languages</li>
          <li>Movies</li>
          <li>Animated</li>
        </ul>
        <ul>
          <li>
            <input
              className="search-box"
              type="text"
              placeholder="Search Your Movie/Shows/Anime"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
export default Header;
