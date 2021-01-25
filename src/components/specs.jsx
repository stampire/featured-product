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
    <div className="specs">
      <h2>Technical specs</h2>
      <ul>
        <li className="darker">
          <span className="bolded">
            Best Use&nbsp;
          </span>
          {bestUse}
        </li>
        <li>
          <span className="bolded">
            Material(s)&nbsp;
          </span>
          {materials}
        </li>
        <li className="darker">
          <span className="bolded">
            Dimensions&nbsp;
          </span>
          {dimensionStr}
        </li>
        <li>
          <span className="bolded">
            Weight&nbsp;
          </span>
          {weightStr}
        </li>
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
