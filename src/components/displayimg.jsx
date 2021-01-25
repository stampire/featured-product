import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const DisplayImg = ({ photo }) => {
  return (
    <div className="display-image">
      <img src={photo} id="displayimg" alt="" />
    </div>
  );
};

DisplayImg.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default DisplayImg;
