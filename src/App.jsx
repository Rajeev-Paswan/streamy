import { SearchProvider } from "./context/SearchContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Movie from "./pages/Movie";

function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </SearchProvider>
  );
}

export default App;
