import { axiosMockAdapterInstance } from "./axios-instance";
import { apiUrl } from './requests';
import { testUserLogin } from '../helpers/auth-utils';
import AppError from './error';
import jwtEncode from 'jwt-encode';
import { v4 as uuidv4 } from 'uuid';
import { createRandomUser } from "../helpers/faker-utils";

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



let usersList = [];
for (let index = 1; index <= 30; index++) {
  usersList.push(createRandomUser(index))
}
axiosMockAdapterInstance.onGet(`${apiUrl}/users`).reply((config) => {
  return [200, usersList]; 
});

const deletePathRegex = new RegExp(`${apiUrl}\/users\/[0-9]{1,50}`);
axiosMockAdapterInstance.onDelete(deletePathRegex).reply((config) => {
  const id = config.url.split('/').at(-1);
  usersList = usersList.filter(x => x.id != id);
  return [200, {}]; 
});
