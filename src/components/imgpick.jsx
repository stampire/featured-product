import React from 'react';
import PropTypes from 'prop-types';

const ImgPick = ({ gallery, index, shade }) => (
  <div className="gallery">
    <div className="gallery-image">
      <img src={gallery[0]} alt="1" />
      <img src={gallery[1]} alt="2" />
      <img src={gallery[2]} alt="3" />
      <img src={gallery[3]} alt="4" />
    </div>
    <br />
    Image&nbsp;
    {index + 1}
    &nbsp;of&nbsp;
    {gallery.length}
    :&nbsp;
    <span>{shade}</span>
  </div>
);

ImgPick.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  shade: PropTypes.string.isRequired,
};

export default ImgPick;
