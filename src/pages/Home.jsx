import "../css/App.css";
import Searchbox from "../components/Searchbox";
import Info from "../components/Info";

function Home() {
  return (
    <>
      <div className="main">
        <div className="hero_img">
          <div className="img_container">
            <div className="image"></div>
            <div className="linear_gradient"></div>
            <h1>Movie Stream</h1>
          </div>
          <Searchbox />
        </div>
        <Info />
      </div>
    </>
  );
}

export default Home;