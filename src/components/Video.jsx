import "../css/Video.css";
import { useParams } from "react-router-dom";

const Video = () => {
  const { id } = useParams();

  return (
    <div className="video_container">
        <div className="video_box"><iframe src={"https://vidsrc.to/embed/movie/"+ id} frameBorder={0} allowFullScreen></iframe></div>
    </div>
  )
}

export default Video;