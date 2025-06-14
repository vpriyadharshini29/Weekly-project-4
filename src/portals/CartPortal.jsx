import ReactDOM from "react-dom";
import "./Portal.css";

export default function CartPortal({ cartItems, onClose }) {
  return ReactDOM.createPortal(
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <h3>Cart</h3>
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cartItems.map((item, i) => (
            <div key={i} className="cart-item">
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </div>
          ))
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
