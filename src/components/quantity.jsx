import React from 'react';
import PropTypes from 'prop-types';

const Quantity = (props) => {
  const {
    quantity,
    increase,
    decrease,
    changeQuantity,
  } = props;
  return (
    <div>
      <p>Quantity</p>
      <div>
        <button onClick={decrease} type="button">&mdash;</button>
        <input type="text" onChange={changeQuantity} value={quantity} />
        <button onClick={increase} type="button">&#xff0b;</button>
      </div>
    </div>
  );
};

Quantity.propTypes = {
  quantity: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  changeQuantity: PropTypes.func.isRequired,
};

export default Quantity;
