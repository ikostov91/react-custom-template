import React from "react";
import classnames from "classnames";

const Logo = ({ className = '' }) => {
  return (
    <span className={classnames('site-logo', className)}>
      RCT
    </span>
  );
};

export default Logo;

