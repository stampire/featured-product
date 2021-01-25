import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const PurchaseBox = ({ quantity, price }) => {
  return (
    <div className="purchase-box">
      <div className="curbside">
        Avoid shipping delays, choose Curbside Pickup available at select locations.
        <br />
        <a href="#0">Learn more</a>
      </div>
      <div>
        <form>
          <label htmlFor="ship">
            <input type="radio" id="ship" name="shipOpt" />
            &nbsp;Ship to address
          </label>
          <br />
          <label htmlFor="curb">
            <input type="radio" id="curb" name="shipOpt" checked />
            &nbsp;Pick up at store
            <br />
            <a href="#0" className="no-bold">Find a store near you</a>
          </label>
          <br />
          <button type="submit" className="cart-button">
            Add to cart &mdash; $
            {(quantity * price).toFixed(2)}
          </button>
          <br />
          <button type="button" className="list-button">Add to wish list</button>
          <button type="button" className="list-button">Add to registry</button>
        </form>
      </div>
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#0">REI return policy</a>
      </span>
    </div>
  );
};

PurchaseBox.propTypes = {
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default PurchaseBox;
