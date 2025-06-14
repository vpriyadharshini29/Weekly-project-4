import ReactDOM from "react-dom";
import "./LMS.css";

export default function VideoPortal({ videoUrl, onClose }) {
  return ReactDOM.createPortal(
    <div className="video-overlay" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <video src={videoUrl} controls autoPlay style={{ width: "100%" }} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
