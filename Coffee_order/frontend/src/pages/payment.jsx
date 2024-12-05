import React from "react";
import "./payment.css";
import headerImage from "../assets/coffee.png"; 

const Payment = ({ cartSummary }) => {
  const { subtotal, delivery, discount, taxes, total } = cartSummary;

  return (
    <div className="payment-container">
      {/* Left Side - Receipt Summary */}
      <div className="receipt-summary">

        <h2>Receipt Summary</h2>
        <div className="receipt-image">
        <img src={headerImage} alt="Coffee" />
      </div>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>€{subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Delivery</span>
          <span>€{delivery.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Discount</span>
          <span>-€{discount.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Taxes</span>
          <span>€{taxes.toFixed(2)}</span>
        </div>
        <div className="summary-item total">
          <span>Total</span>
          <span>€{total.toFixed(2)}</span>
        </div>
      </div>

      {/* Right Side - Payment Information */}
      <div className="payment-info">
        <h2>Payment Information</h2>
        <form className="payment-form">
          <div className="form-group">
            <label htmlFor="card-holder">Card Holder</label>
            <input type="text" id="card-holder" placeholder="Amanda Jackson" />
          </div>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="xxxx xxxx xxxx xxxx" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiration-date">Expiration Date</label>
              <input type="text" id="expiration-date" placeholder="MM / YY" />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" placeholder="123" />
            </div>
          </div>
          <button type="submit" className="buy-now-btn">
            Buy Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
