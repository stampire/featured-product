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
        colors: [],
      },
      photo: {},
    };
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001/product',
      success: (data) => {
        this.setState({
          product: data,
          photo: {
            img: data.photoGallery[0],
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
    const { product, photo } = this.state;
    const {
      department,
      brandName,
      photoGallery,
      description,
      features,
      technicalSpecs,
      colors,
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
    return (
      <div>
        <Path department={department} brand={brandName} />
        <DisplayImg photo={img} index={index} />
        <ImgPick gallery={photoGallery} />
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
