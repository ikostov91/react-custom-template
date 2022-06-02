import React from "react";
import { Navigate, Route } from 'react-router-dom';
import { isUserAuthenticated, getLoggedInUser } from "../helpers/auth-utils";

const PrivateRoute = ({ children, roles }) => {
  const isAuthenticated = isUserAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  const loggedInUser = getLoggedInUser();
  if (roles && roles.indexOf(loggedInUser.role) === -1) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
