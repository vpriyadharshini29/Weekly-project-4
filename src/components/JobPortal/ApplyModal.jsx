import ReactDOM from "react-dom";
import "./JobPortal.css";

export default function ApplyModal({ onClose }) {
  return ReactDOM.createPortal(
    <div className="portal-overlay">
      <div className="portal-content">
        <h3>Apply for this Job</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Resume submitted!");
          onClose();
        }}>
          <div className="form-group">
            <label>Upload Resume:</label>
            <input type="file" required />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
