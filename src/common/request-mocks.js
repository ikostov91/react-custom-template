import { axiosMockAdapterInstance } from "./axios-instance";
import { apiUrl } from './requests';
import { testUserLogin } from '../helpers/auth-utils';
import AppError from './error';

axiosMockAdapterInstance.onPost(`${apiUrl}/account/login`).reply(config => {
  const { data } = config;
  const { email, password } = JSON.parse(data);
  if (email === testUserLogin.email && password === testUserLogin.password) {
    const response = {
      firstName: 'Ivaylo',
      lastName: 'Kostov',
      role: 'User',
      email: email
    };
    return [200, response];
  } else {
    throw new AppError(400, 'Wrong username and/or password.');
  }  
});

axiosMockAdapterInstance.onPost(`${apiUrl}/account/register`).reply(config => {
  const { data } = config;
  const { firstName, lastName, emailAddress, password } = JSON.parse(data);
  console.log({ firstName, lastName, emailAddress, password});
  return [200, {}]; 
});
