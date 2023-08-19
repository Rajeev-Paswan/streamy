import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      {/* <Route path="/home" element={<Home/>} /> */}
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
