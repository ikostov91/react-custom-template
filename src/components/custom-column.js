import React from 'react';
import PropTypes from 'prop-types';

const CustomColumn = ({ width, children }) => {
  return (
    <div className={`custom-column-${width}`}>
      {children}
    </div>
  )
};

CustomColumn.propTypes = {
  width: PropTypes.number
};

export default CustomColumn;
