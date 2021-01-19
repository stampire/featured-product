import React from 'react';
import PropTypes from 'prop-types';
import GalleryImg from './galleryimg';

const ImgPick = ({ gallery }) => {
  const imgs = gallery.map((photo, index) => (
    <div><GalleryImg photo={photo} index={index} /></div>
  ));
  return <div>{imgs}</div>;
};

ImgPick.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImgPick;
