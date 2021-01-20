/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import Feature from './feature';

const Features = ({ features, brand }) => {
  const featuresList = features.map((feature) => <Feature feature={feature} />);
  return (
    <div>
      <h2>Features</h2>
      <ul>{featuresList}</ul>
      Imported.
      <br></br>
      <br></br>
      View all&nbsp;
      {brand}
    </div>
  );
};

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  brand: PropTypes.string.isRequired,
};

export default Features;
