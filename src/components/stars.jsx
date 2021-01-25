/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';

const Stars = ({ rating }) => {
  const full = 'https://stampire-misc-images.s3-us-west-1.amazonaws.com/fec-featured-product/full-star.svg';
  const threeQuarter = 'https://stampire-misc-images.s3-us-west-1.amazonaws.com/fec-featured-product/75-star.svg';
  const half = 'https://stampire-misc-images.s3-us-west-1.amazonaws.com/fec-featured-product/50-star.svg';
  const oneQuarter = 'https://stampire-misc-images.s3-us-west-1.amazonaws.com/fec-featured-product/25-star.svg';
  const empty = 'https://stampire-misc-images.s3-us-west-1.amazonaws.com/fec-featured-product/star-empty.svg';
  switch (true) {
    case (rating > 1.1 && rating < 1.35):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={oneQuarter} alt="1/4" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
        </span>
      );
    case (rating >= 1.35 && rating < 1.65):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={half} alt="1/2" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
        </span>
      );
    case (rating >= 1.65 && rating < 1.9):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={threeQuarter} alt="3/4" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
        </span>
      );
    case (rating >= 1.9 && rating < 2.10):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
        </span>
      );
    case (rating >= 2.10 && rating < 2.35):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={oneQuarter} alt="1/4" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
        </span>
      );
    case (rating >= 2.35 && rating < 2.65):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={half} alt="1/2" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
        </span>
      );
    case (rating >= 2.65 && rating < 2.90):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={threeQuarter} alt="3/4" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
        </span>
      );
    case (rating >= 2.90 && rating < 3.10):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
        </span>
      );
    case (rating >= 3.10 && rating < 3.35):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={oneQuarter} alt="1/4" />
          <img src={empty} alt="empty" />
        </span>
      );
    case (rating >= 3.35 && rating < 3.65):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={half} alt="1/2" />
          <img src={empty} alt="empty" />
        </span>
      );
    case (rating >= 3.65 && rating < 3.9):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={threeQuarter} alt="3/4" />
          <img src={empty} alt="empty" />
        </span>
      );
    case (rating >= 3.90 && rating < 4.1):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={empty} alt="empty" />
        </span>
      );
    case (rating >= 4.10 && rating < 4.35):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={oneQuarter} alt="1/4" />
        </span>
      );
    case (rating >= 4.35 && rating < 4.65):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={half} alt="1/2" />
        </span>
      );
    case (rating >= 4.65 && rating < 4.9):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={threeQuarter} alt="3/4" />
        </span>
      );
    case (rating >= 4.9):
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
          <img src={full} alt="full" />
        </span>
      );
    default:
      return (
        <span className="stars">
          <img src={full} alt="full" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
          <img src={empty} alt="empty" />
        </span>
      );
  }
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
