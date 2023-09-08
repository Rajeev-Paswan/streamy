import "../css/MovieInfo.css";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsContext from "../context/DetailsContext";


const MovieInfo = () => {
  const { getDetails, updateId, details } = useContext(DetailsContext);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    updateId(id);
    console.log("updated id: " + id);
    getDetails(); // fetch movies details from updated id
    console.log("movie details is updated");
  }, [id]);
  return (
    <div className="movie_data-container">
      <div className="movie_poster">
        <img src="https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg?region=0%2C0%2C540%2C810" alt="movie" />
      </div>
      <div className="movie_details">
        <h3 className="movie_title">{details.title}</h3>
        <div className="extra_info">
          <span className="material-icons-round">hd</span>
          <div className="imdb_ratings-container">
            <span className="material-icons-round">star</span>
            <span className="imdb_ratings">{parseFloat(details.vote_average).toFixed(1)}</span>
          </div>
        </div>
        <p className="movie_overview">{details.overview}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
