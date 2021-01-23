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
    const { shade } = colors[0];
    return (
      <div>
        <Path department={department} brand={brandName} />
        <DisplayImg photo={img} index={index} />
        <ImgPick gallery={colors[colorIndex].imgs} index={index} shade={shade} />
        <Description description={description} />
        <Features features={features} brand={brandName} />
        <Specs specs={technicalSpecs} />
        <ProductBox
          colors={colors}
          brand={brandName}
          name={name}
          rating={rating}
          ratingCount={ratingCount}
          price={price}
          productNumber={productNumber}
        />
      </div>
    );
  }
}

export default App;
