import React from 'react';
import PropTypes from 'prop-types';

const ImgPick = ({
  gallery,
  index,
  shade,
  changeDisplay,
}) => (
  <div className="gallery">
    <div className="gallery-image">
      <button type="button" value="0" onClick={changeDisplay}>
        <img src={gallery[0]} alt="1" />
      </button>
      <button type="button" value="1" onClick={changeDisplay}>
        <img src={gallery[1]} alt="2" />
      </button>
      <button type="button" value="2" onClick={changeDisplay}>
        <img src={gallery[2]} alt="3" />
      </button>
      <button type="button" value="3" onClick={changeDisplay}>
        <img src={gallery[3]} alt="4" />
      </button>
    </div>
    <br />
    Image&nbsp;
    {index + 1}
    &nbsp;of&nbsp;
    {gallery.length}
    :&nbsp;
    <span id="gal-shade">{shade}</span>
  </div>
);

ImgPick.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  shade: PropTypes.string.isRequired,
  changeDisplay: PropTypes.func.isRequired,
};

export default ImgPick;
