import React from 'react';
import PropTypes from 'prop-types';

class DisplayImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { photo } = this.props;
    return (
      <div className="display-image">
        <img src={photo} id="displayimg" alt="" />
      </div>
    );
  }
}

DisplayImg.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default DisplayImg;
