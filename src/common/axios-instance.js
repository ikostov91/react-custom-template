// import axios, { AxiosRequestConfig } from 'axios';
// import AxiosMockAdapter from 'axios-mock-adapter';
// import { apiUrl } from './requests';

// // This sets the mock adapter on the default instance
// export const axiosMockInstance = new AxiosMockAdapter(axiosInstance, { delayResponse: 0 });

// // Mock any GET request to /users
// // arguments for reply are (status, data, headers)
// axiosMockInstance.onGet("/users").reply(200, {
//   users: [{ id: 1, name: "John Smith" }],
// });

// axiosMockInstance.onPost(`${apiUrl}/account/login`).reply(config => {
//   alert('MOCK');
// });

import axios from 'axios';

import AxiosMockAdapter from 'axios-mock-adapter';

const axiosMockInstance = axios.create();

export const axiosMockAdapterInstance= new AxiosMockAdapter(axiosMockInstance, { delayResponse: 0 });
export default axiosMockInstance;

