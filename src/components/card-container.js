import React from 'react';
import classNames from 'classnames';

const CardContainer = ({ children, className = '' }) => {
  return (
    <div className={classNames('card-container', className)}>
      {children}
    </div>
  )
};

export default CardContainer;
