import React from 'react';
import PropTypes from 'prop-types';

const Specs = ({ specs }) => {
  const {
    dimensions,
    weight,
    bestUse,
    materials,
  } = specs;
  const dimensionStr = `${dimensions.join('x')} inches`;
  const weightStr = `${weight[0]} lbs. ${weight[1]} oz.`;
  return (
    <div>
      <h2>Technical specs</h2>
      <ul>
        <li>{dimensionStr}</li>
        <li>{weightStr}</li>
        <li>{bestUse}</li>
        <li>{materials}</li>
      </ul>
    </div>
  );
};

Specs.propTypes = {
  specs: PropTypes.shape({
    dimensions: PropTypes.arrayOf(PropTypes.number),
    weight: PropTypes.arrayOf(PropTypes.number),
    bestUse: PropTypes.string,
    materials: PropTypes.string,
  }).isRequired,
};

export default Specs;
