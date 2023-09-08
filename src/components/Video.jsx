import "../css/Video.css";
import { useParams } from "react-router-dom";

const Video = () => {
  const { id } = useParams();

  return (
    <div className="video_container">
        <div className="video_box"><iframe src={"https://vidsrc.me/embed/movie?tmdb="+ id} frameBorder={0} allowFullScreen></iframe></div>
    </div>
  )
}

export default Video;