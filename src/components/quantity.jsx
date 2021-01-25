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
    <div className="quantity">
      <p className="bolded">Quantity</p>
      <div>
        <button onClick={decrease} type="button" className="q-button left">&mdash;</button>
        <input type="text" onChange={changeQuantity} value={quantity} className="entry" />
        <button onClick={increase} type="button" className="q-button right">&#xff0b;</button>
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
