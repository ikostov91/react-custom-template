import { axiosMockAdapterInstance } from "./axios-instance";
import { apiUrl } from './requests';
import { testUserLogin } from '../helpers/auth-utils';
import AppError from './error';
import jwtEncode from 'jwt-encode';
import { v4 as uuidv4 } from 'uuid';

const jwtTokenSecret = 'JWT_TOKEN_MOCK_SECRET';

axiosMockAdapterInstance.onPost(`${apiUrl}/account/login`).reply(config => {
  const { data } = config;
  const { email, password } = JSON.parse(data);
  if (email === testUserLogin.email && password === testUserLogin.password) {
    const tokenData = {
      exp: (Date.now() + 3600000) / 1000 // 1 hour
    };
    const response = {
      userId: uuidv4(),
      role: 'User',
      token: jwtEncode(tokenData, jwtTokenSecret)
    };
    return [200, response];
  } else {
    throw new AppError(400, 'Wrong username and/or password.');
  }  
});

axiosMockAdapterInstance.onPost(`${apiUrl}/account/register`).reply((config) => {
  const { data } = config;
  const { firstName, lastName, emailAddress, password } = JSON.parse(data);
  console.log({ firstName, lastName, emailAddress, password});
  return [200, {}]; 
});

axiosMockAdapterInstance.onGet(`${apiUrl}/account/current-user-info`).reply(() => {
  const result = {
    firstName: 'Ivaylo',
    lastName: 'Kostov',
    role: 'User',
    email: 'test@abv.bg'
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

axiosMockAdapterInstance.onGet(`${apiUrl}/users`).reply((config) => {
  const response = [
    { id: 1, firstName: 'Ivaylo', lastName: 'Kostov', age: 32, email: 'test@abv.bg', role: 'User' },
    { id: 2, firstName: 'Stamat', lastName: 'Gerasimov', age: 33, email: 'some-address@gmail.com', role: 'Administrator' },
    { id: 3, firstName: 'Mitko', lastName: 'Mitkov', age: 31, email: 'email@abv.bg', role: 'User' }
  ];
  return [200, response]; 
});
