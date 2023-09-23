import "../css/Info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="card">
        <div className="icon">
          <span className="material-icons-round">movie</span>
        </div>
        <div className="des">
          <span>Get all kinds of Movies Old, New, Hollywood and Bollywood</span>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <span className="material-icons-round">live_tv</span>
        </div>
        <div className="des">
          <span>
            Get all kinds of series TV Series, Web Series, Hollywood and
            Bollywood
          </span>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <span className="material-icons-round">hd</span>
        </div>
        <div className="des">
          <span>Get most of the Series and Movies in HD, FHD, 2K, 4K</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
