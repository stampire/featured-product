import React from 'react';
import PropTypes from 'prop-types';
import Feature from './feature';

const Features = ({ features }) => {
  const featuresList = features.map((feature) => <Feature feature={feature} />);
  return (
    <div>
      <h2>Features</h2>
      <ul>{featuresList}</ul>
    </div>
  );
};

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Features;
