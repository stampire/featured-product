import React from 'react';
import $ from 'jquery';
import Path from './productpath';
import DisplayImg from './displayimg';
import ImgPick from './imgpick';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: { photoGallery: [] },
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
      </div>
    );
  }
}

export default App;
