import * as React from 'react';
import { getUserRole } from '../helpers/authUtils';

function VC({ children, hasRole }) {
  let shouldRenderChildren = false;
  const userRole = getUserRole();

  if (hasRole && Array.isArray(hasRole)) {
    shouldRenderChildren = hasRole.includes(userRole);
  } else if (hasRole) {
    shouldRenderChildren = userRole.includes(hasRole);
  }

  if (shouldRenderChildren) {
    return (
      <>
        {children}
      </>
    );
  }
  return <></>;
}

export default VC;
