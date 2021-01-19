import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ description }) => (
  <div>{description}</div>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
