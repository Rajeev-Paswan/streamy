import "../css/Result.css";

const Result = () => {
  return (
    <div className="results">
        <form
          className="main_page search_container"
          action="/search"
          method="get"
        >
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
        <h3 className="search_msg">Search Result of movie name</h3>
        <div className="result_cards">
          <a className="video_card" href="">
            <div className="video_showcase">
              <div className="linear_gradient"></div>
              <div className="rating">
                <span className="material-icons-round icon">
                  star_rate
                </span>
                <span>9.9</span>
              </div>
              <div className="duration">
                <span className="material-icons-round icon">schedule</span>
                <span>duration</span>
              </div>
              <div className="quality">720p</div>
              <div className="category">Category</div>
            </div>
            <div className="des">
              <div className="video_title">Title</div>
              <div className="video_tags">
                <p className="label">
                  <span className="material-icons-round icon">local_offer</span>
                </p>
                <p className="tags">video tags</p>
              </div>
            </div>
          </a>
        </div>
      </div>
  )
}

export default Result;