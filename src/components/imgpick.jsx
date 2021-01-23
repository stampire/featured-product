import React from 'react';
import PropTypes from 'prop-types';
import GalleryImg from './galleryimg';

const ImgPick = ({ gallery, index, shade }) => {
  const imgs = gallery.map((photo, gIndex) => (
    <div><GalleryImg photo={photo} index={gIndex} /></div>
  ));
  return (
    <div>
      {imgs}
      Image&nbsp;
      {index}
      &nbsp;of&nbsp;
      {gallery.length}
      :&nbsp;
      <span>{shade}</span>
    </div>
  );
};

ImgPick.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  shade: PropTypes.string.isRequired,
};

export default ImgPick;
