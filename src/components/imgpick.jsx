import React from 'react';
import PropTypes from 'prop-types';
import GalleryImg from './galleryimg';

const ImgPick = ({ gallery }) => {
  const imgs = gallery.map((photo) => (
    <div><GalleryImg photo={photo} /></div>
  ));
  return <div>{imgs}</div>;
};

ImgPick.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImgPick;
