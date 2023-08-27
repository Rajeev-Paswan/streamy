import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/home" element={<Home/>} /> */}
        <Route path="/search" element={<Search />} />
      </Routes>
    </SearchProvider>
  );
}

export default App;
