import "../css/Video.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Video = () => {
  const { id } = useParams();
  const [server, setServer] = useState("vidsrc");
  const [src, setSrc] = useState("");

  // setting initial src based on default server
  useEffect(() => {
    setSrc(`https://vidsrc.to/embed/movie/${id}`);
  }, [id]);

  const handleServerChange = (e) => {
    const server = e.target.value;
    setServer(server);

    // set the src based on selected server
    if (server === "vidsrc") {
      setSrc(`https://vidsrc.to/embed/movie/${id}`);
    } else if (server === "smashy") {
      setSrc(`https://embed.smashystream.com/playere.php?tmdb=${id}`);
    }
  };

  return (
    <div className="video_container">
      <div className="video_box"> 
        <iframe src={src} frameBorder={0} allowFullScreen></iframe>
        <div className="server_list">
          <h2>Server</h2>
          <select value={server} onChange={handleServerChange}>
            <option value="vidsrc">vidsrc</option>
            <option value="smashy">smashy</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Video;
