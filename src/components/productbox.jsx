import React from 'react';
import PropTypes from 'prop-types';

class ProductBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      brand,
      name,
      colors,
      rating,
      ratingCount,
      price,
      productNumber,
    } = this.props;
    return (
      <div>
        {brand}
        <h1>{name}</h1>
        {rating}
        {ratingCount}
        Item #
        {productNumber}
        {price}
        color:
        {colors[0].shade}
      </div>
    );
  }
}

ProductBox.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    shade: PropTypes.string,
    imgs: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  productNumber: PropTypes.number.isRequired,
};

export default ProductBox;
