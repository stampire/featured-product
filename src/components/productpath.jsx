import React from 'react';
import PropTypes from 'prop-types';

const Path = ({ department, brand }) => (
  <div id="path">
    {department}
    <span> / </span>
    {brand}
  </div>
);

Path.propTypes = {
  department: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};

export default Path;
