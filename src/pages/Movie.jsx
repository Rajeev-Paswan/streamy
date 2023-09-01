import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";
import Header from "../components/Header";
import DetailsContext from "../context/DetailsContext";

const Movie = () => {
  const { getDetails, updateId } = useContext(DetailsContext);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    updateId(id);
    console.log("updated id: " + id);
    getDetails(); // fetch movies details from updated id
    console.log("movie details is updated");
  }, [id]);

  return (
    <div>
      <Header />
      <MovieInfo />
    </div>
  );
};

export default Movie;
