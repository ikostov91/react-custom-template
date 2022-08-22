import { axiosMockAdapterInstance } from "./axios-instance";
import { apiUrl } from './requests';
import { getLoggedInUser, mockAccounts } from '../helpers/auth-utils';
import AppError from './error';
import jwtEncode from 'jwt-encode';
import { createRandomUser } from "../helpers/faker-utils";
import { sortObjectsBy } from "../helpers/sorting-utils";
import { DEFAULT_PAGE_PARAMETERS } from "../helpers/constants";

const jwtTokenSecret = 'JWT_TOKEN_MOCK_SECRET';

axiosMockAdapterInstance.onPost(`${apiUrl}/account/login`).reply(config => {
  const { data } = config;
  const { email, password } = JSON.parse(data);
  if (mockAccounts.some(x => x.email === email && x.password === password)) {
    const account = mockAccounts.find(x => x.email === email);
    const tokenData = {
      exp: (Date.now() + 3600000) / 1000 // 1 hour
    };
    const response = {
      userId: account.id,
      role: account.role,
      token: jwtEncode(tokenData, jwtTokenSecret)
    };
    return [200, response];
  } else {
    throw new AppError(400, 'Wrong username and/or password.');
  }  
});

axiosMockAdapterInstance.onPost(`${apiUrl}/account/register`).reply((config) => {
  // const { data } = config;
  // const { firstName, lastName, emailAddress, password } = JSON.parse(data);
  return [200, {}]; 
});

axiosMockAdapterInstance.onGet(`${apiUrl}/account/current-user-info`).reply(() => {
  const userCookie = getLoggedInUser();
  if (!userCookie) {
    return [200, {}];
  }

  const account = mockAccounts.find(x => x.id === userCookie.userId);
  const result = {
    firstName: account?.firstName,
    lastName: account?.lastName,
    role: account?.role,
    email: account?.email
  };
  return [200, result]; 
});

axiosMockAdapterInstance.onPut(`${apiUrl}/account/forgot-password`).reply((config) => {
  const { data } = config;
  const { email } = JSON.parse(data);
  console.log(email);
  return [200, {}];
});

axiosMockAdapterInstance.onPut(`${apiUrl}/account/reset-password`).reply((config) => {
  const { data } = config;
  const { email, token, newPassword, confirmPassword } = JSON.parse(data);
  console.log({ email, token, newPassword, confirmPassword });
  return [200, {}]; 
});

let usersList = [];
for (let index = 1; index <= 35; index++) {
  usersList.push(createRandomUser(index))
}
axiosMockAdapterInstance.onGet(`${apiUrl}/users`).reply((config) => {
  checkIsAuthenticated(config);

  if (config.params) {
    const usersCopy = [...usersList];
    const { page, itemsPerPage, searchText, sortBy, order } = config.params;
    const startIndex = (page - 1) * itemsPerPage;
    const result = usersCopy
      .sort((a, b) => sortObjectsBy(a, b, sortBy, order))
      .splice(startIndex, itemsPerPage);
    return [200, { result, pageParameters: { page, itemsPerPage, searchText, sortBy, order, totalPages: Math.ceil(usersList.length / itemsPerPage) }}]; 
  }
  return [200, { result: usersList, pageParameters: DEFAULT_PAGE_PARAMETERS}];
});

const getIdFromUrl = (url) => Number(url.split('/').at(-1));

const userPathRegex = new RegExp(`${apiUrl}/users/[0-9]{1,50}`);
axiosMockAdapterInstance.onPut(userPathRegex).reply((config) => {
  const id = getIdFromUrl(config.url);
  const { firstName, lastName, age, email, role } = JSON.parse(config.data);
  usersList = usersList.map(user => (
    (user.id === id) ? ({
      ...user,
      firstName,
      lastName,
      age,
      role,
      email
    }) : user
  ));

  return [200, {}]; 
});

axiosMockAdapterInstance.onDelete(userPathRegex).reply((config) => {
  const id = getIdFromUrl(config.url);
  usersList = usersList.filter(x => x.id !== id);
  return [200, {}]; 
});

axiosMockAdapterInstance.onGet(userPathRegex).reply((config) => {
  const id = getIdFromUrl(config.url);
  const user = usersList.find(x => x.id === id);
  return [200, user]; 
});

const checkIsAuthenticated = (config) => {
  console.log(config);
};
