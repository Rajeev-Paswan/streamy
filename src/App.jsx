import "./css/App.css";
import "./css/Custom.css";


function App() {
  return (
    <>
      <div className="main">
        <div className="hero_img">
          <div className="img_container">
            <div className="image"></div>
            <div className="linear_gradient"></div>
            <h1>Movie Stream</h1>
          </div>
          <form className="search_container" action="/search" method="get">
            <div className="search_child_container flex flex-aln-center">
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
        </div>
        <div className="info flex flex-aln-center flex-jst-sb">
          <div className="card flex flex-d-col flex-aln-center">
            <div className="icon">
              <span className="material-icons-round">movie</span>
            </div>
            <div className="des">
              <span>
                Get all kinds of Movies Old, New, Hollywood and Bollywood
              </span>
            </div>
          </div>
          <div className="card flex flex-d-col flex-aln-center">
            <div className="icon">
              <span className="material-icons-round">live_tv</span>
            </div>
            <div className="des">
              <span>
                Get all kinds of series TV Series, Web Series, Hollywood and
                Bollywood
              </span>
            </div>
          </div>
          <div className="card flex flex-d-col flex-aln-center">
            <div className="icon">
              <span className="material-icons-round">hd</span>
            </div>
            <div className="des">
              <span>Get most of the Series and Movies in HD, FHD, 2K, 4K</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
