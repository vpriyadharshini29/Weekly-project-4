import ReactDOM from "react-dom";
import "./Portal.css";

export default function PreviewPortal({ product, onClose }) {
  return ReactDOM.createPortal(
    <div className="preview-overlay" onClick={onClose}>
      <div className="preview-modal" onClick={(e) => e.stopPropagation()}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <button onClick={onClose}>Close Preview</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
