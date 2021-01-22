import React from 'react';
import PropTypes from 'prop-types';

class GalleryImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { photo } = this.props;
    return (
      <div><img src={photo} alt="" /></div>
    );
  }
}

GalleryImg.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default GalleryImg;
