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
    const result = {
      userId: uuidv4(),
      role: 'User',
      token: jwtEncode({
        exp: Date.UTC() + 300000
      }, jwtTokenSecret)
    };
    console.log(result);
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
