import React from 'react';
import PropTypes from 'prop-types';
import Quantity from './quantity';
import PurchaseBox from './purchasebox';
import Stars from './stars';

class ProductBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  increase(e) {
    e.preventDefault();
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  decrease(e) {
    e.preventDefault();
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  }

  changeQuantity(e) {
    e.preventDefault();
    if (e.target.value > 0) {
      this.setState({ quantity: Number(e.target.value) });
    }
  }

  render() {
    const { quantity } = this.state;
    const {
      brand,
      name,
      colors,
      rating,
      ratingCount,
      price,
      productNumber,
      changeColor,
      colorIndex,
    } = this.props;
    const colorImgs = [];
    for (let i = 0; i < colors.length; i += 1) {
      colorImgs.push(colors[i].imgs[0]);
    }
    const colorGal = colorImgs.map((img, index) => (
      <button type="button" value={index} onClick={changeColor}><img src={img} alt={index} /></button>));
    const shadeStr = colors[colorIndex].shade;
    return (
      <div className="product-box">
        <a href="#0">{brand}</a>
        <h1>{name}</h1>
        <br />
        <Stars rating={rating} />
        <a href="#0">
          {rating}
        &nbsp;|&nbsp;
          {`(${ratingCount})`}
        </a>
        <span>
          &nbsp;    Item #
          {productNumber}
        </span>
        <br />
        <span className="bolded larger">
          $
          {price}
        </span>
        <br />
        <br />
        <a href="#0">Orders of $50 or more ship for free.</a>
        <br />
        <br />
        REI Members get back an estimated&nbsp;
        <span className="bolded">
          $
          {(Math.round((price / 10) * 2) / 2).toFixed(2)}
        </span>
        &nbsp;on this item as part of their&nbsp;
        <a href="#0">member dividend.</a>
        <br />
        <br />
        <span className="bolded">
          Color:&nbsp;
          {`${shadeStr.charAt(0).toUpperCase()}${shadeStr.slice(1)}`}
        </span>
        <br />
        <br />
        <span className="bolded">
          $
          {price}
        </span>
        <br />
        <div className="color-gal">
          {colorGal}
        </div>
        <Quantity
          quantity={quantity}
          increase={this.increase}
          decrease={this.decrease}
          changeQuantity={this.changeQuantity}
        />
        <PurchaseBox quantity={quantity} price={price} />
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
  changeColor: PropTypes.func.isRequired,
  colorIndex: PropTypes.number.isRequired,
};

export default ProductBox;
