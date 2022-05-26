import React, { useLayoutEffect, useState } from "react";
import { Router } from "react-router-dom";

// Based on response from this question:
// https://stackoverflow.com/questions/69871987/react-router-v6-navigate-outside-of-components
const CustomRouter = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(
    () => history.listen(setState),
    [history]
  );

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default CustomRouter;
