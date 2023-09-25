import "../css/MovieInfo.css";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetailsQuery } from "../redux/services/tmdb";

const MovieInfo = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useMovieDetailsQuery(id);
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie_data-container">
      <div className="movie_data-wrapper">
        <div className="movie_poster">
          <img
            src={
              data?.poster_path
                ? API_IMG + data?.poster_path
                : "/img/404-error.png"
            }
            alt="movie"
          />
        </div>
        <div className="movie_details">
          <h1 className="movie_title">{data?.title}</h1>
          <div className="extra_info">
            <div className="imdb_quality-container">
              <span className="material-icons-round">hd</span>
              <span>Quality</span>
            </div>
            <div className="imdb_ratings-container">
              <span className="material-icons-round">star</span>
              <span className="imdb_ratings">
                {parseFloat(data?.vote_average).toFixed(1)}
              </span>
            </div>
          </div>
          <p className="movie_overview">
            <span className="info_type">Overview: </span>
            <span>{data?.overview}</span>
          </p>
          <div className="info-grid">
            <p className="movie_genre">
              <span className="info_type">Genre: </span>
              {data?.genres ? (
                <span>
                  {data?.genres.map((genre, index) => (
                    <a key={genre.id}>
                      {genre.name}
                      {index !== data?.genres.length - 1 ? ", " : ""}
                    </a>
                  ))}
                </span>
              ) : (
                <span>No genres available</span>
              )}
            </p>
            <p className="movie_release">
              <span className="info_type">Release date: </span>
              {data?.release_date}
            </p>
            <p className="movie_languages">
              <span className="info_type">Languages: </span>
              {data?.spoken_languages ? (
                <span>
                  {data?.spoken_languages.map((language, index) => (
                    <a key={index}>
                      {language.english_name}
                      {index !== data?.spoken_languages.length - 1 ? ", " : ""}
                    </a>
                  ))}
                </span>
              ) : (
                <span>Official Dub</span>
              )}
            </p>
            <p className="movie_duration">
              <span className="info_type">Duration: </span>{" "}
              {`${data?.runtime} minutes`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
