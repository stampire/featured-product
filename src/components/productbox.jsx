import React from 'react';
import PropTypes from 'prop-types';
import Quantity from './quantity';

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
    const colorImgs = [];
    for (let i = 0; i < colors.length; i += 1) {
      colorImgs.push(colors[i].imgs[0]);
    }
    const colorGal = colorImgs.map((img) => <img src={img} alt="" />);
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
        {colorGal}
        <Quantity />
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
