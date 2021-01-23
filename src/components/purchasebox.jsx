import React from 'react';
import PropTypes from 'prop-types';

class PurchaseBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { quantity, price } = this.props;
    return (
      <div>
        <div>
          <p>Avoid shipping delays, choose Curbside Pickup available at select locations.</p>
          <a href="#0">Learn more</a>
        </div>
        <div>
          <form>
            <label htmlFor="ship">
              <input type="radio" id="ship" name="shipOpt" />
              Ship to address
            </label>
            <br />
            <label htmlFor="curb">
              <input type="radio" id="curb" name="shipOpt" checked />
              Pick up at store
              <br />
              <a href="#0">Find a store near you</a>
            </label>
            <br />
            <button type="submit">
              Add to cart &mdash; $
              {quantity * price}
            </button>
            <br />
            <button type="button">Add to wish list</button>
            <button type="button">Add to registry</button>
          </form>
        </div>
        <span><a href="#0">REI return policy</a></span>
      </div>
    );
  }
}

PurchaseBox.propTypes = {
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default PurchaseBox;
