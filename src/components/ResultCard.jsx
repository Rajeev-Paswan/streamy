import { Link } from "react-router-dom";

function ResultCard(card) {
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <Link to={"/streamy/movie/" + card.id} className="video_card" href="">
      <div className="video_showcase">
        <img
          src={
            card.poster_path ? API_IMG + card.poster_path : "/img/404-error.png"
          }
          className={card.poster_path ? "poster_img" : "not_found_img"}
          alt="poster"
        />
        <div className="linear_gradient"></div>
        <div className="rating">
          <span className="material-icons-round icon">star_rate</span>
          <span>{parseFloat(card.vote_average).toFixed(1)}</span>
        </div>
        <div className="duration">
          <span className="material-icons-round icon">schedule</span>
          <span>duration</span>
        </div>
        <div className="quality">720p</div>
        <div className="category">Category</div>
      </div>
      <div className="des">
        <div className="video_title">{card.title}</div>
        <div className="video_tags">
          <p className="label">
            <span className="material-icons-round icon">local_offer</span>
          </p>
          <p className="tags">video tags</p>
        </div>
      </div>
    </Link>
  );
}

export default ResultCard;
