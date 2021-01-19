import React from 'react';
import PropTypes from 'prop-types';

const Feature = ({ feature }) => <li>{feature}</li>;

Feature.propTypes = {
  feature: PropTypes.string.isRequired,
};

export default Feature;
