import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CustomColumn = ({ width = null, xs = null, sm = '', md = '', lg = '', xl = '', children }) => {
  const baseWidth = width ? `custom-column-${width}` : 'custom-column-';
  // const xsWidth = xs ? `custom-column-xs-${xs}` : '';
  // const smWidth = sm ? `custom-column-sm-${sm}` : '';
  // const mdWidth = md ? `custom-column-md-${md}` : '';
  // const lgWidth = lg ? `custom-column-lg-${lg}` : '';
  // const xlWidth = xl ? `custom-column-xl-${xl}` : '';

  return (
    <div className={classnames(baseWidth)}>
      {children}
    </div>
  )
};

CustomColumn.propTypes = {
  width: PropTypes.number
};

export default CustomColumn;
