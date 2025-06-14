
import "./ECommerce.css";

export default function Checkout() {
  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <p>Please complete your purchase.</p>
      <form>
        <label>Card Number</label>
        <input type="text" placeholder="1234 5678 9012 3456" />
        <label>Expiry</label>
        <input type="text" placeholder="MM/YY" />
        <label>CVV</label>
        <input type="text" placeholder="123" />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}
