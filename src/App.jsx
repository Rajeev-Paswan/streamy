import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import { Providers } from "./redux/provider";

function App() {
  return (
    <Providers>
      <Routes>
        <Route path="/streamy" element={<Home />} />
        <Route path="/streamy/search" element={<Search />} />
        <Route path="/streamy/search/:query" element={<Search />} />
        <Route path="/streamy/movie/:id" element={<Movie />} />
        <Route path="/streamy/movies" element={<Movies />} />
      </Routes>
    </Providers>
  );
}

export default App;
