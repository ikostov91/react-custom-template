let user = null;

export const isUserAuthenticated = () => {
  return !!user;
};

export const getLoggedInUser = () => {
  return user;
};

export const authenticateUser = () => {
  user = {};
};

export const logoutUser = () => {
  user = null;
};
