import React from 'react';
import $ from 'jquery';
import Path from './productpath';
import DisplayImg from './displayimg';
import ImgPick from './imgpick';
import Description from './description';
import Features from './features';
import Specs from './specs';
import ProductBox from './productbox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        photoGallery: [],
        technicalSpecs: {
          dimensions: [],
          weight: [],
        },
        features: [],
        colors: [{
          shade: '',
          imgs: [],
        }],
      },
      photo: {
        img: '',
        index: 0,
      },
      colorIndex: 0,
    };
    this.changeDisplay = this.changeDisplay.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: `http://localhost:3001/api${window.location.pathname}`,
      success: (data) => {
        this.setState({
          product: data,
          photo: {
            img: data.colors[0].imgs[0],
            index: 0,
          },
        });
      },
      error: (err) => {
        throw err;
      },
    });
  }

  changeDisplay(e) {
    e.preventDefault();
    const newIndex = Number(e.currentTarget.value);
    const { colorIndex, product } = this.state;
    this.setState({
      photo: {
        img: product.colors[colorIndex].imgs[newIndex],
        index: newIndex,
      },
    });
  }

  changeColor(e) {
    e.preventDefault();
    const newColor = Number(e.currentTarget.value);
    const { product } = this.state;
    this.setState({
      colorIndex: newColor,
      photo: {
        img: product.colors[newColor].imgs[0],
        index: 0,
      },
    });
  }

  render() {
    const { product, photo, colorIndex } = this.state;
    const {
      department,
      brandName,
      colors,
      description,
      features,
      technicalSpecs,
      productNumber,
      name,
      rating,
      ratingCount,
      price,
    } = product;
    const {
      img,
      index,
    } = photo;
    const { shade } = colors[colorIndex];
    return (
      <div className="container">
        <Path department={department} brand={brandName} />
        <DisplayImg photo={img} index={index} />
        <ImgPick
          gallery={colors[colorIndex].imgs}
          index={index}
          shade={shade}
          changeDisplay={this.changeDisplay}
        />
        <Description description={description} />
        <div className="features-specs">
          <Features features={features} brand={brandName} />
          <Specs specs={technicalSpecs} />
        </div>
        <ProductBox
          colors={colors}
          brand={brandName}
          name={name}
          rating={rating}
          ratingCount={ratingCount}
          price={price}
          productNumber={productNumber}
          changeColor={this.changeColor}
          colorIndex={colorIndex}
        />
      </div>
    );
  }
}

export default App;
