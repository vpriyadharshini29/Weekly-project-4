import ReactDOM from "react-dom";

export default function LeadPreviewPortal({ lead, onClose }) {
  return ReactDOM.createPortal(
    <div className="portal-overlay" onClick={onClose}>
      <div className="portal-content" onClick={(e) => e.stopPropagation()}>
        <h4>{lead.name}</h4>
        <p>{lead.email}</p>
        <p>{lead.phone}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
