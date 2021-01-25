import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ description }) => (
  <div className="description"><h3>{description}</h3></div>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
