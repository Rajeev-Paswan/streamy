import "../css/MovieInfo.css";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsContext from "../context/DetailsContext";

const MovieInfo = () => {
  const { getDetails, updateId, details } = useContext(DetailsContext);
  const { id } = useParams();
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    updateId(id);
    console.log("updated id: " + id);
    getDetails(); // fetch movies details from updated id
  }, [id]);
  return (
    <div className="movie_data-container">
      <div className="movie_poster">
        <img
          src={
            details.poster_path
              ? API_IMG + details.poster_path
              : "/img/404-error.png"
          }
          alt="movie"
        />
      </div>
      <div className="movie_details">
        <h3 className="movie_title">{details.title}</h3>
        <div className="extra_info">
          <span className="material-icons-round">hd</span>
          <span>Quality</span>
          <div className="imdb_ratings-container">
            <span className="material-icons-round">star</span>
            <span className="imdb_ratings">
              {parseFloat(details.vote_average).toFixed(1)}
            </span>
          </div>
        </div>
        <p className="movie_overview">
          <span className="info_type">overview:</span> {details.overview}
        </p>
        <div className="info-grid">
          <p className="movie_genre">
            <span className="info_type">genre: </span>
            {details.genres ? (
              <span>
                {details.genres.map((genre, index) => (
                  <a key={genre.id}>
                    {genre.name}
                    {index !== details.genres.length - 1 ? ", " : ""}
                  </a>
                ))}
              </span>
            ) : (
              <span>No genres available</span>
            )}
          </p>
          <p className="movie_release">
            <span className="info_type">release date: </span>
            {details.release_date}
          </p>
          <p className="movie_languages">
            <span className="info_type">languages: </span>
            {details.spoken_languages ? (
              <span>
                {details.spoken_languages.map((language, index) => (
                  <a key={index}>
                    {language.english_name}
                    {index !== details.spoken_languages.length - 1 ? ", " : ""}
                  </a>
                ))}
              </span>
            ) : (
              <span>Official Dub</span>
            )}
          </p>
          <p className="movie_duration">
            <span className="info_type">duration: </span> {details.runtime}
            minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
